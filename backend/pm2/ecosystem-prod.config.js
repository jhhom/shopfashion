const path = require("path");

const backendDir = path.resolve(__dirname, "..");

module.exports = {
  apps: [
    {
      name: "shopfashion-server",
      cwd: backendDir,
      script: "./pm2/start_server.sh",
      log_file: path.join(backendDir, "logs/server.log"),
    },
  ],
};
