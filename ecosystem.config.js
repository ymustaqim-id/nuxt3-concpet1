module.exports = {
  apps: [
    {
      // pm2 start -- start

      name: 'sinau-app',
      port: 4444,
      exec_mode: 'cluster',
      instances: 4,
      autorestart: true,
      // max_memory_restart: '1024M',
      script: './.output/server/index.mjs',

      out_file: './pm2.out.log',
      error_file: './pm2.error.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      log_type: 'json'
    }
  ]
}