const PROXY_CONFIG = [
 
  {
    context: [
      '/api/coach/get-all',
      '/api/coach/create',
      '/api/coach/delete',
      '/api/coach/update'


    ],
    target: "http://localhost:8080", 
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }
]
module.exports = PROXY_CONFIG;
