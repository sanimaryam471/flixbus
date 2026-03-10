export default function handler(req, res) {

  const file = req.query.file;

  if (!file) {
    res.status(400).send("No file specified");
    return;
  }

  const fileUrl = `/pdfs/${file}`;

  res.setHeader("Content-Type", "text/html");

  res.send(`
    <html>
      <body>
        <script>
          const a = document.createElement('a');
          a.href = '${fileUrl}';
          a.download = '${file}';
          document.body.appendChild(a);
          a.click();
          window.location = "https://www.flixbus.fr/";
        </script>
      </body>
    </html>
  `);
}