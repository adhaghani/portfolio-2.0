"use client";

import { useEffect, useState } from "react";
import { Text } from "@/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurFade } from "@/components/magicui/blur-fade";
import { CheckCircle, XCircle, AlertTriangle, Loader2, Database, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SystemStatus {
  database: "operational" | "degraded" | "down" | "unknown";
  api: "operational" | "degraded" | "down" | "unknown";
  timestamp: string;
}

export default function StatusPage() {
  const [status, setStatus] = useState<SystemStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/status");
        if (!res.ok) throw new Error("Failed to fetch status");
        const data = await res.json();
        setStatus(data);
      } catch (error) {
        setStatus({
          database: "unknown",
          api: "unknown",
          timestamp: new Date().toISOString(),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    // Poll every 30 seconds
    const interval = setInterval(fetchStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (state: string) => {
    switch (state) {
      case "operational":
        return "text-green-500";
      case "degraded":
        return "text-yellow-500";
      case "down":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusIcon = (state: string) => {
    switch (state) {
      case "operational":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "degraded":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "down":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <AlertTriangle className="w-5 h-5 text-gray-500" />;
    }
  };

  const StatusItem = ({
    label,
    state,
    icon: Icon,
  }: {
    label: string;
    state: string;
    icon: any;
  }) => (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card/50">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-background rounded-md border">
          <Icon className="w-5 h-5 text-muted-foreground" />
        </div>
        <span className="font-medium">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        {getStatusIcon(state)}
        <span className={`capitalize font-medium ${getStatusColor(state)}`}>
          {state}
        </span>
      </div>
    </div>
  );

  return (
    <div className="py-24 px-4 min-h-screen flex items-center justify-center">
      <BlurFade inView>
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <Text as="h1" className="text-3xl font-bold mb-2">
              System Status
            </Text>
            <Text as="p" styleVariant="muted">
              Live status of portfolio services and infrastructure.
            </Text>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Current Status</span>
                {loading && <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />}
                {!loading && status?.database === "operational" && status?.api === "operational" && (
                   <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">
                     ALL SYSTEMS OPERATIONAL
                   </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {status ? (
                <>
                  <StatusItem
                    label="Database (Supabase)"
                    state={status.database}
                    icon={Database}
                  />
                  <StatusItem
                    label="API Services"
                    state={status.api}
                    icon={Server}
                  />
                  
                  <div className="pt-4 text-center">
                    <Text as="p" styleVariant="muted" className="text-xs">
                      Last updated: {new Date(status.timestamp).toLocaleString()}
                    </Text>
                  </div>
                </>
              ) : (
                <div className="flex justify-center py-8">
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </BlurFade>
    </div>
  );
}
