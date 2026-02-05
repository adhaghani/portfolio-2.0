"use client";

import { useEffect, useState } from "react";
import { AdminAuthClient } from "@/utils/admin-auth-client";

export default function AdminDebugPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [debugInfo, setDebugInfo] = useState<any>({});

  useEffect(() => {
    const checkAuth = async () => {
      const storedSession = AdminAuthClient.getStoredSession();

      let verificationResult = null;
      let verificationError = null;

      if (storedSession.token) {
        try {
          verificationResult = await AdminAuthClient.verifyToken();
        } catch (error) {
          verificationError = error;
        }
      }

      setDebugInfo({
        storedSession,
        verificationResult,
        verificationError,
        localStorage: {
          token: localStorage.getItem("admin_token"),
          adminData: localStorage.getItem("admin_data"),
        },
      });
    };

    checkAuth();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Auth Debug</h1>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>

      <div className="mt-4 space-y-2">
        <button
          onClick={async () => {
            const result = await fetch("/api/admin/verify", {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("admin_token")}`,
              },
            });
            const data = await result.json();
            // eslint-disable-next-line no-console
            console.log("Direct verify test:", { status: result.status, data });
            alert(`Verify result: ${result.status} - ${JSON.stringify(data)}`);
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Test Verify API
        </button>

        <button
          onClick={() => {
            localStorage.clear();
            alert("LocalStorage cleared");
            window.location.reload();
          }}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear LocalStorage
        </button>
      </div>
    </div>
  );
}
