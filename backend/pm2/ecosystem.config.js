module.exports = {
  apps: [
    {
      name: "shopfashion-server",
      cwd: "/Users/joohom/SideProjects/job-application/showcase-projects/shopfashion/shopfashion-4/backend",
      script: "./pm2/start_server.sh",
      log_file:
        "/Users/joohom/SideProjects/job-application/showcase-projects/shopfashion/shopfashion-4/backend/logs/server.log",
    },
  ],
};
