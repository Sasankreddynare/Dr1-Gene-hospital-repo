import fs from "fs";
import path from "path";

async function testReferer() {
  const url = "https://images1-fabric.practo.com/doctor/308182/dr-jayaprasad-v-1481112270-5847fa4ee6fc2.jpg";
  const dest = path.join(process.cwd(), "public", "dr_jayaprasad_v.jpg");
  
  console.log(`Fetching ${url} with Practo referer...`);
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://www.practo.com/",
        "Origin": "https://www.practo.com",
        "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache"
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

testReferer();
