import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const file = req.query.file;
  if (!file) return res.status(400).send("No file specified");

  const filePath = path.join(process.cwd(), "public/pdfs", file);

  if (!fs.existsSync(filePath)) return res.status(404).send("File not found");

  // Force download
  res.setHeader("Content-Disposition", `attachment; filename=${file}`);
  res.setHeader("Content-Type", "application/pdf");

  const fileBuffer = fs.readFileSync(filePath);
  res.send(fileBuffer);
}
