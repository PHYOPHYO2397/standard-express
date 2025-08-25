import { uploadFileToCloud } from "../utils/cloudinary.js";
export const authController = async (req, res) => {
  //console.log(req.files);
  let profile_photo = "";
  let cover_photo = "";
  const profilePhotoPath = req.files.profile_photo[0].path;
  const coverPhotoPath = req.files.cover_photo[0].path;
  if (profilePhotoPath) {
    try {
      await uploadFileToCloud(profilePhotoPath);
    } catch (error) {
      console.log(error);
    }
  }
};
