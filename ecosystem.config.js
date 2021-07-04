module.exports = {
  apps: [
    {
      name: 'TipBot',
      script: './bot/bot.js',
      cwd: '/root/TipBot',
      instance_id_env: '0',
      watch: true,
      ignore_watch : ['node_modules', 'Logs', 'Downloads', '.git'],
      error_file:
        '/root/TipBot/Logs/tipbot-err.log',
      out_file: '/root/TipBot/Logs/tipbot-out.log',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
