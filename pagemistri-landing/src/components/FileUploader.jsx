import React, { useState } from 'react';

export function FileUploader({ onUploadComplete, value }) {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(value || "");

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'pagemistriuploads');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/zac7rqiv/image/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.secure_url) {
        setPreview(data.secure_url);
        onUploadComplete(data.secure_url);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 text-center bg-gray-50 relative">
      {preview ? (
        <div className="flex flex-col items-center gap-2">
          <img src={preview} alt="Preview" className="max-h-32 object-contain rounded" />
          <button 
            type="button"
            onClick={() => {
              setPreview("");
              onUploadComplete("");
            }}
            className="text-xs text-red-500 hover:underline"
          >
            Remove / Change Image
          </button>
        </div>
      ) : (
        <>
          <input type="file" onChange={handleFileChange} className="hidden" id="logo-upload" accept="image/*" />
          <label htmlFor="logo-upload" className="cursor-pointer text-sm font-medium text-indigo-600 hover:underline">
            {loading ? "Uploading file..." : "Click to Upload Logo / Files"}
          </label>
        </>
      )}
    </div>
  );
}
