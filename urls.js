const axios = require("axios");
const fs = require("fs");

// read file name and return URLS

function readFile() {
  const fileName = process.argv[2];
  return new Promise((resolve, reject) => {
    fs.readFile(`${fileName}`, "utf8", (error, data) => {
      if (error) {
        console.log("Error could not read file", error);
        reject(error);
      }
      const fileUrls = data.split("\n");
      resolve(fileUrls);
    });
  });
}

// for each URL get html and save in a new file

async function callFileUrls() {
  const fileUrls = await readFile();

  const urlPromises = fileUrls.map(async (url) => {
    try {
      const hostName = new URL(url).hostname;
      const res = await axios.get(url);
      await writeFile(res.data, hostName);
    } catch (error) {
      if (!url) return;
      console.log(`#### ERROR DOWNLOADING URL: ${url} ####`);
    }
  });

  await Promise.all(urlPromises);
}

callFileUrls();

// create new files from urls and name them after url hostname

function writeFile(html, hostName) {
  fs.writeFile(hostName, html, (error) => {
    if (error) throw error;
    console.log(`Created ${hostName}`);
  });
}
