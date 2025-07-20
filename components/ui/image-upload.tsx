"use client";

import { useState, useRef, DragEvent, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { Input } from "@/components/ui/input";
import { Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { uploadImage, validateImageFile } from "@/utils/image-upload";
import OptimizedImage from "@/components/ui/optimized-image";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  label?: string;
  description?: string;
}

export default function ImageUpload({
  value,
  onChange,
  label = "Image",
  description = "Drag and drop an image or click to upload",
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const [urlInput, setUrlInput] = useState(value);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    setError("");

    // Validate file
    const validation = validateImageFile(file);
    if (!validation.valid) {
      setError(validation.error || "Invalid file");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 100);

      const result = await uploadImage(file);

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (result) {
        onChange(result.url);
        setUrlInput(result.url);
        setError("");
      } else {
        setError("Failed to upload image. Please try again.");
      }
    } catch (err) {
      setError("Upload failed. Please try again.");
      console.error("Upload error:", err);
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      onChange(urlInput.trim());
      setError("");
    }
  };

  const handleRemoveImage = () => {
    onChange("");
    setUrlInput("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium">{label}</label>

      {/* Current Image Preview */}
      {value && (
        <Card className="relative">
          <CardContent className="p-4">
            <div className="relative group">
              <OptimizedImage
                src={value}
                alt="Preview"
                width={400}
                height={192}
                className="w-full h-48 object-cover rounded-lg"
                priority={false}
                quality={85}
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={handleRemoveImage}
                >
                  <X className="w-4 h-4 mr-2" />
                  Remove
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upload Area */}
      {!value && (
        <Card
          className={`border-2 border-dashed transition-colors ${
            isDragging
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50"
          } ${isUploading ? "pointer-events-none" : "cursor-pointer"}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => !isUploading && fileInputRef.current?.click()}
        >
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-center text-center space-y-4">
              {isUploading ? (
                <>
                  <Loader2 className="w-8 h-8 animate-spin text-primary" />
                  <div className="space-y-2">
                    <Text as="p" className="font-medium">
                      Uploading...
                    </Text>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      {uploadProgress}% complete
                    </Text>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 bg-muted rounded-full">
                    <Upload className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <Text as="p" className="font-medium">
                      {description}
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-sm">
                      Supports JPEG, PNG, WebP up to 5MB
                    </Text>
                    <Text as="p" styleVariant="muted" className="text-xs">
                      Images will be automatically compressed and optimized
                    </Text>
                  </div>
                  <Button type="button" variant="outline" size="sm">
                    <ImageIcon className="w-4 h-4 mr-2" />
                    Choose File
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* URL Input Alternative */}
      <div className="space-y-2">
        <Text as="p" styleVariant="muted" className="text-sm">
          Or paste an image URL:
        </Text>
        <div className="flex gap-2">
          <Input
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="flex-1"
          />
          <Button
            type="button"
            onClick={handleUrlSubmit}
            variant="outline"
            disabled={!urlInput.trim()}
          >
            Add URL
          </Button>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-3">
            <Text as="p" className="text-red-600 text-sm">
              {error}
            </Text>
          </CardContent>
        </Card>
      )}

      {/* Help Text */}
      <Text as="p" styleVariant="muted" className="text-xs">
        Recommended: 1200x630px for optimal social media sharing
      </Text>
    </div>
  );
}
