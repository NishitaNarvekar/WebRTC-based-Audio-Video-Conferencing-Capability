var express = require('express')
, app = express()
, http = require('http')
, server = http.createServer(app)
, io = require('socket.io').listen(server);
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/public/home.html');
});


app.get('/', function (request, response) {
    response.redirect('default.html');
}
		);


//var CLIENTS=[];
var peer1,peer2;
var sessions = [];
var nsession= [];
var usernames = {};
var sess = new Object();

var sessionMgm = require("sessionManagement");

io.sockets.on('connection', function (socket) {

//CLIENTS.push(socket);
	
	
	//--------------------new
	
	socket.on('setUserInfo', function (data) {
       console.log('the entered name is:' + data + '**********'); 
        sess.sessionId = socket.id;
        console.log('::: A socket with session id ' + sess.sessionId + ' connected! ::: ');
        //sess.userId = data.userId;
       //sess.username = data.username;
       //sess.role = data.role;
        //sessionMgm.add(sess);
       
        //*************************
        
        nsession.push(sess.sessionId);
        nsession.push(data);
        io.sockets.emit('disponline',nsession);
        

       //********************* 
        sessions.push(sess.sessionId);
        //for(var i in sessions) {
            //if(sessions[i] == sess.sessionId)
                //peer2=i;
    	//}
        
        
    });
	
	//-------------doc name sending
	
	
socket.on('senddoc', function(docname) {
	
	var temp=socket.id;
	for(var i in nsession) {
        if(nsession[i] == temp)
            peer1=i;
        console.log('peer 1 is-------------',nsession[peer1]);
     //   console.log('peer 2 is-------------',nsession[peer2]);
	}
	console.log('entered docname is:--------',docname);
        if(docname != null) {
        	
        	for(var i in nsession) {
                if(nsession[i] == docname)
                  {
                		i=i-1;
                		peer2=i;
                		
                    }
                else
                	{
                	console.log('docname nt found-----------------------');
                	}
        	} 
        	console.log('peer 2 is-------------',nsession[peer2]);
            }
        
    });
	
	
	
	
	///--------------new

	//old 
    //socket.on('sendchat', function (data) {
     //   io.sockets.emit('updatechat', socket.username, data);
    //});
    
    //--------------new
    socket.on('sendchat', function(data) {
    	
        if(data != null) {
        	
           // var user = sessionMgm.getSessionByUserId(data.userId);
            console.log('::: A socket with ID ' + sess.sessionId  + ' connected! ::: ');
            if(sess.sessionId  != null) {
            	//for(var i in sessions)
            		{
            			//peer1=peer2-1;
            			io.sockets.socket(nsession[peer2]).emit('updatechat',socket.username, data);
            			
            			io.sockets.socket(nsession[peer1]).emit('updatechat',socket.username, data);
            			
            		}
                //io.sockets.socket(user.sessionId).emit('send2');
                //io.sockets.socket(user.sessionId).emit('send4');
                //io.sockets.socket(user.sessionId).emit('send5');
                //io.sockets.socket(user.sessionId).emit('send1');
            } else {
                var sysMsg = {type: "error", message: "User not found!"};
                socket.emit('systemMessage', sysMsg);
            }
        }
    });
    
    
    socket.on('sendchat4', function(data) {
    	if(data != null) {
        	
            // var user = sessionMgm.getSessionByUserId(data.userId);
             console.log('::: A socket with ID ' + sess.sessionId  + ' connected! ::: ');
             if(sess.sessionId  != null) {
             	//for(var i in sessions)
             		{
             			
             			io.sockets.socket(nsession[peer2]).emit('updatechat',socket.username, data);
             			
             			io.sockets.socket(nsession[peer1]).emit('updatechat',socket.username, data);
             			
             		}
                 //io.sockets.socket(user.sessionId).emit('send2');
                 //io.sockets.socket(user.sessionId).emit('send4');
                 //io.sockets.socket(user.sessionId).emit('send5');
                 //io.sockets.socket(user.sessionId).emit('send1');
             } else {
                 var sysMsg = {type: "error", message: "User not found!"};
                 socket.emit('systemMessage', sysMsg);
             }
         }
    });
    
    socket.on('sendchat5', function(data) {
    	if(data != null) {
        	
            // var user = sessionMgm.getSessionByUserId(data.userId);
             console.log('::: A socket with ID ' + sess.sessionId  + ' connected! ::: ');
             if(sess.sessionId  != null) {
             	//for(var i in sessions)
             		{
             			
             			io.sockets.socket(nsession[peer1]).emit('updatechat',socket.username, data);
             			
             			io.sockets.socket(nsession[peer2]).emit('updatechat',socket.username, data);
             			
             		}
                 //io.sockets.socket(user.sessionId).emit('send2');
                 //io.sockets.socket(user.sessionId).emit('send4');
                 //io.sockets.socket(user.sessionId).emit('send5');
                 //io.sockets.socket(user.sessionId).emit('send1');
             } else {
                 var sysMsg = {type: "error", message: "User not found!"};
                 socket.emit('systemMessage', sysMsg);
             }
         }
    });   
    
    
    
    socket.on('disconnect', function() {
        sessionMgm.remove(socket.id);
    });
    
    
    
    
    
    //-----------------------new
    
    
   /* socket.on('adduser', function (username) {
        socket.username = username;
        usernames[username] = username;
        
        //socket.emit('updatechat', 'SERVER', 'you have connected');
        //socket.broadcast.emit('updatechat', 'SERVER'
	//			, username + '  has connected');
        io.sockets.emit('updateusers', usernames);
        //io.sockets.emit('disponline',usernames);
        
    });*/
    
    
    
    
    socket.on('disconnect', function () {
        delete usernames[socket.username];
        io.sockets.emit('updateusers', usernames);
        socket.broadcast.emit('updatechat', 'SERVER'
				, socket.username + ' has disconnected');
    });
});





var port = 7777;
server.listen(port);
console.log('listening on port: ' + port);








