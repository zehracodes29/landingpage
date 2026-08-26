import React, { useState } from 'react';

export function FileUploader({ onUploadComplete }: { onUploadComplete: (url: string) => void }) {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'YOUR_PUBLIC_CLOUDINARY_PRESET');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) {
        onUploadComplete(data.secure_url);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center bg-gray-50">
      <input type="file" onChange={handleFileChange} className="hidden" id="logo-upload" />
      <label htmlFor="logo-upload" className="cursor-pointer text-sm font-medium text-indigo-600 hover:underline">
        {loading ? "Uploading file..." : "Click to Upload Logo / Files"}
      </label>
    </div>
  );
}
