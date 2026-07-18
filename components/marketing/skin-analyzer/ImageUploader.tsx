"use client";

import { useRef, useState } from "react";
import { Upload, Camera } from "lucide-react";

export function ImageUploader({
  onImageReady,
}: {
  onImageReady: (base64: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  function handleFile(file: File | undefined) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setPreview(result);
      onImageReady(result.split(",")[1]);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        handleFile(e.dataTransfer.files?.[0]);
      }}
      className="border-2 border-dashed border-obsidian/15 rounded-2xl aspect-[4/3] flex flex-col items-center justify-center cursor-pointer hover:border-gold-luxe transition-colors overflow-hidden"
    >
      {preview ? (
        <img src={preview} alt="Uploaded selfie" className="w-full h-full object-cover" />
      ) : (
        <>
          <div className="flex gap-3 text-obsidian/40">
            <Upload size={28} />
            <Camera size={28} />
          </div>
          <p className="mt-4 text-sm text-obsidian/60">Drop a selfie or tap to upload</p>
          <p className="text-xs text-obsidian/40 mt-1">Well-lit, no makeup, facing forward</p>
        </>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}
