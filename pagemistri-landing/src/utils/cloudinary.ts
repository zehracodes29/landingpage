export const uploadToCloudinary = async (file: File, folderPath?: string): Promise<string> => {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  if (!cloudName || !uploadPreset) {
    throw new Error("Cloudinary environment variables are missing.");
  }

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);
  if (folderPath) {
    formData.append("folder", folderPath);
  }

  // Determines resource_type ('image' or 'raw' for documents/pdfs)
  const resourceType = file.type.startsWith("image/") ? "image" : "raw";

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error?.message || "Failed to upload file");
  }

  const data = await res.json();
  return data.secure_url; // Hosted CDN download URL
};
