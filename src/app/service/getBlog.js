import fs from "fs";
import path from "path";

export const getBlog = () => {
  const filePath = path.join(process.cwd(), "/src/app/data/blogData.json");
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return jsonData;
};
