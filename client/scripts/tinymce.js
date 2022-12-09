import path from "node:path";
import childProcess from "node:child_process";

const srcDir = path.join("./", "node_modules", "tinymce");
const outputDir = path.join("./", "public", "tinymce");
childProcess.exec(`cp -r ${srcDir} ${outputDir}`);
