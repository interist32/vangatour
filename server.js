const hapi  = require('hapi');
const server = new hapi.Server();
const inert = require('inert');
const path = require('path');

const offers = require('./data.json');

server.connection({
  host: 'localhost',
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
      reply(filterOffers(offers, JSON.parse(request.payload.json)));
    }
  });

  server.start(()=>{
    console.log(`Server started at ${server.info.uri}`);
  });
});

function filterOffers(offers, userData) {
  var filteredOffers = offers.slice();

  return filteredOffers
    .filter(o=>o.country == userData['1'])
    .filter(o=>o.hasChild == userData['2'])
    .filter(o=>o.budget == userData['3'])
    .filter(o=>userData['4']==3 || o.category == userData['4'])
    .filter(o=>o.beach == userData['5'])
    .filter(o=>o.seaDistance == userData['6'])
    .filter(o=>userData['7']==2 || o.theme == userData['7'])
    .sort((a,b)=>{
      return parseFloat(b.rating.replace(',', '.')) - parseFloat(a.rating.replace(',', '.'));
    })
    .slice(0, 4);
}
