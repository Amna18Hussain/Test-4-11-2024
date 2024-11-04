// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'https://api-nodejs-todolist.herokuapp.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};
