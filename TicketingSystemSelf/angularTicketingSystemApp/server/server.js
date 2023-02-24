const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server=jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);

const ticketsData = require('../server/data/tickets');
server.get('/api/tickets',(req,res,next) => {
    res.status(200).send(ticketsData.getTickets);
});


server.listen(3000, ()=>{
    console.log('JSON server listening on port 3000');
});