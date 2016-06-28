const hapi  = require('hapi');
const server = new hapi.Server();
const inert = require('inert');
const path = require('path');
const fs = require('fs');

const offers = require('./data.json');
var winston = require('winston');
winston.add(winston.transports.File, { filename: './logs/result.log' });

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
    path: '/{params*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'public')
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/q/{q}',
    handler: function(request, reply){
      return reply.redirect('/');
    }
  });

  server.route({
    method: 'GET',
    path: '/result',
    handler: function(request, reply){
      return reply.redirect('/');
    }
  });

  server.route({
    method: 'POST',
    path: '/getOffers',
    handler: function(request, reply){
      var answers = JSON.parse(request.payload.json);

      winston.log('info', 'getOffers', { answers: answers });
      reply(filterOffers(offers, answers));
    }
  });

  server.start(()=>{
    console.log(`Server started at ${server.info.uri}`);
  });
});

function filterOffers(offers, userData) {
  var filteredOffers = offers.slice();

  filteredOffers = filteredOffers
    .filter(o=>userData['1'] == 8 || o.country == userData['1'])
    .filter(o=>o.hasChild == userData['2'])
    .filter(o=>o.budget == userData['3'])
    .filter(o=>userData['4']==3 || o.category == userData['4'])
    .filter(o=>userData['5']==3 || o.beach == userData['5'])
    .filter(o=>o.seaDistance == userData['6'])
    .filter(o=>userData['7']==2 || o.theme == userData['7']);

    if(filteredOffers.length === 0){
      filteredOffers = offers
        .filter(o=>userData['1'] == 8 || o.country == userData['1'])
        .filter(o=>o.budget == userData['3']);
    }

    return filteredOffers
      .sort((a,b)=>{
        return parseFloat(b.rating.replace(',', '.')) - parseFloat(a.rating.replace(',', '.'));
      })
      .slice(0, 4);
}
