// 1.Memanggil Libary untuk server
const { log } = require("console");
const http = require("http");

// 2. bikin server
const server = http.createServer(function (req, res) {
  // menjelaskan jenis isi data dan type datanya
  const { method, url } = req;
  console.log("method ", method);
  console.log("url ", url);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(
    "assalamu alaikum Umi maafkanlah anakmu yang banyak berbuat durhaka padamu ini"
  );
});

// 3.Menghidupkan server
server.listen(3000, () => {
  console.log("hidupkan server: node latihan-http.js");
  console.log("Buka di browser: http://localhost:3000");
  console.log("matikan server: diterminal tekan ctrl+c");
});



// Percobaan sendiri 
const http2 = require("http");

const server2 = http2.createServer(function (req, res) {
// Menjelaskan jenis data dan status koneksinya
  const { method, url } = req;
  console.log("Method: ", method);
  console.log("Url: ", url);
  if (ur === "/") {
    // masuk halaman utama
    res.writeHead(200, { "Content-Type": "text/html" });
    // Isi datanya
    res.end("<di><h1>Ini halaman utamanya</h1></di>");
  } else if (url === "/profile") {
    // Halaman profile
    res.writeHead(200, { Content_Type: "text/plain" });
    // Isi datanya
    res.end("Ini halaman profile: " + url + ", method:" + method);
  } else if (url === "/api/hello") {
    if (method !== "POST") {
      res.writeHead(200, { "Content-Type": "aplication/json" });
      res.end(JSON.stringify({ name: "Hello" }));
    } else {
      // Halaman tidak ditemukan
      res.writeHead(405, { "Content-Type": "text/plain" });
      // isi datanya
      server2.end("Halaman tidak ditemukan url :" + url + ", method" + method);
    }
  }
});
// menghidupkan server
server2.listen(4000, () => {
  console.log("Hidupkan Server dengan : node latihan-http.js");
  console.log("Buka server di browser dengan : http://localhost:4000");
  console.log("matikan server dengan : diterminal tekan ctrl+c");
});
