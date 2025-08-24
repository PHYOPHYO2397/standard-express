import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split(".")[1];
    const fileNameExtension = `${this.filename}-${uniqueSuffix}.${fileExtension}`;
    cb(null, fileNameExtension);
  },
});

export const upload = multer({ storage });
