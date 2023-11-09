import fs from "node:fs";

// copy all from the directory .output/server to .zeabur/output/functions/index.func
fs.cpSync(".output/server", ".zeabur/output/functions/index.func", {
  recursive: true,
  verbatimSymlinks: true,
});
