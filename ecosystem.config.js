module.exports = {
  apps: [
    {
      name: "bluesky-website",
      script: "pnpm",
      args: "start",
      instances: 2,
      exec_mode: "cluster",
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],

}
