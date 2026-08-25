import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  logoUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url);
      return { url: file.url };
    }),

  documentUploader: f({ pdf: { maxFileSize: "16MB" }, text: { maxFileSize: "16MB" }, blob: { maxFileSize: "16MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url);
      return { url: file.url };
    }),

  mediaUploader: f({ image: { maxFileSize: "32MB", maxFileCount: 10 }, video: { maxFileSize: "32MB", maxFileCount: 5 } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("file url", file.url);
      return { url: file.url };
    }),
};
