import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(fileBase64: string, folder = "aura-aesthetics") {
  return cloudinary.uploader.upload(fileBase64, { folder });
}

export function getOptimizedUrl(publicId: string, width = 800) {
  return cloudinary.url(publicId, {
    width,
    quality: "auto",
    fetch_format: "auto",
    crop: "fill",
  });
}

export default cloudinary;
