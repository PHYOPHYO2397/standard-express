export const test = (res, req) => {
  return res.status(200).json({ message: "connected to test controller" });
};
