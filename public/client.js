// initialize socket, connect to server
var socket = io.connect('http://localhost:7777');

socket.on('connect', function(data){
	socket.emit('join', 'Hello server from client');
});

// listen for 'thread' event and update messages
socket.on('thread', function(data){
	$('#thread').append('<li>' + data + '</li>');
});

// send message to server on submit & reset form
$('form').submit(function(){
	var message = $('#message').val();
	socket.emit('messages', message);
	this.reset();

	return false; // prevent default refresh on form submission
})