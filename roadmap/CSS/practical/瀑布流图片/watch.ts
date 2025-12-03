import childProcess from "child_process";
import fs from "fs";
import path from "path";

fs.watch("./index.html", (eventType, filename) => {
  console.log(`Event Type: ${eventType}`);
  console.log(`Filename: ${filename}`);
  console.log(path.resolve("./index.html"));
  // childProcess.exec(
  //   `open ${path.resolve("./index.html")}`,
  //   (error, stdout, stderr) => {
  //     if (error) {
  //       console.error(`Error opening file: ${error.message}`);
  //       return;
  //     }
  //     if (stderr) {
  //       console.error(`stderr: ${stderr}`);
  //       return;
  //     }
  //     console.log(`stdout: ${stdout}`);
  //   }
  // );
});
