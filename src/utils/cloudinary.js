import { v2 as cloudinary } from "cloudinary";
// Configuration
cloudinary.config({
  cloud_name: "dostc1ecb",
  api_key: "762231641288343",
  api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View API Keys' above to copy your API secret
});

export const uploadFileToCloud = async (filePath) => {
  try {
    if (!filePath) return null;
    // Upload an image
    const response = await cloudinary.uploader.upload(filepath, {
      resource_type: auto,
    });
    console.log("File Upload Completed", response.url);
  } catch (error) {
    console.log(error);
    return null;
  }
};
