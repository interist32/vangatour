const hapi  = require('hapi');
const server = new hapi.Server();
const inert = require('inert');
const path = require('path');

const offers = require('./data.json');

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
    method: 'POST',
    path: '/getOffers',
    handler: function(request, reply){
      reply(filterOffers(offers, true));
    }
  });

  server.start(()=>{
    console.log(`Server started at ${server.info.uri}`);
  });

  filterOffers = (offers, userData) => {
    return offers.slice(0, 3);
  }
});
