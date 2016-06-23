const hapi  = require('hapi');
const server = new hapi.Server();
const inert = require('inert');
const path = require('path');

server.connection({
  host: 'mac-pro.local',
  port: 3000
});

server.register(inert, (err)=>{
  if(err){
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'public')
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/getOffers',
    handler: function(request, reply){
      reply([]);
    }
  });

  server.start(()=>{
    console.log(`Server started at ${server.info.uri}`);
  });
});
