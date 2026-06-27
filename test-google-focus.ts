import fs from "fs";
import path from "path";

async function testGoogleFocus() {
  const target = "https://images1-fabric.practo.com/doctor/308182/dr-jayaprasad-v-1481112270-5847fa4ee6fc2.jpg";
  const url = `https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&refresh=2592000&url=${encodeURIComponent(target)}`;
  const dest = path.join(process.cwd(), "public", "dr_jayaprasad_v.jpg");
  
  console.log(`Fetching from Google Focus proxy: ${url}`);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      }
    });
    console.log(`Status: ${res.status}`);
    if (res.ok) {
      const buf = await res.arrayBuffer();
      // Ensure public directory exists
      const publicDir = path.join(process.cwd(), "public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(dest, Buffer.from(buf));
      console.log(`Saved ${buf.byteLength} bytes to ${dest}`);
    } else {
      console.log(`Failed: ${res.statusText}`);
    }
  } catch (err) {
    console.error("Error during fetch:", err);
  }
}

testGoogleFocus();
