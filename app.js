const express= require('express');
const app=express();
var index=1;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res)=>{
	//res.send('hello world');
	res.render('index');
});

const server=app.listen(3000);
const io=require('socket.io')(server);

io.on('connection', function(socket){
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
		console.log('message👉: ' + msg);
	});
});