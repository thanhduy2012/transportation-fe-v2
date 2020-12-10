const PROXY_CONFIG = [
 
  {
    context: [
      '/api/coach/get-all',
      '/api/coach/create',
      '/api/coach/delete',
      '/api/coach/update',



      '/api/driver/get-all',
      '/api/driver/create',
      '/api/driver/delete',
      '/api/driver/update',


      '/api/trip/get-all',
      '/api/trip/create',
      '/api/trip/delete',
      '/api/trip/update',


    ],
    target: "http://localhost:8080", 
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }
]
module.exports = PROXY_CONFIG;
