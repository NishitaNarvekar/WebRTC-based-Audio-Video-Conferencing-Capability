/// <reference path="jquery-2.1.0.js" />

var socket;
var selu;

$(document).ready(function () {
 //   socket = io.connect('http://localhost:7777');
 socket = io.connect('http://192.168.1.21:7777');
  //  socket.on('connect', addUser);
    socket.on('connect', setUserInfo);
    socket.on('updatechat', processMessage);
    
    socket.on('updateusers', updateUserList);
    socket.on('disponline',dispusers);
    $('#btn21').click(sendMessage2);
    $('#btn21').click(processEnterPress);
    $('#calldoc').click(processdoc);
    //$('#btn3').click(sendMessage);
    //$('#btn3').click(processEnterPress);
    $('#clear').click(sendMessage4);
    $('#clear').click(processEnterPress);
    $('#btn4').click(processMessage);
    $('#btn4').click(sendMessage5);
    $('#btn4').click(processEnterPress);
    $('#btn5').click(sendMessage);
    $('#btn5').click(processEnterPress);
    

    
   

});


//function addUser() {
  //  socket.emit('adduser', prompt("write something"));
//}
function dispusers(nsession) {
	var cnt=0;
	$('#onlineusers').text("");	

	for(var i in nsession) {
		cnt=cnt+1;
		}
	
	while(cnt!=0) {
	//	selu="nishita";
	//	$('<br><b><INPUT type="radio" id="user" name="sel" value=nsession[i] onClick="setU(selu)">' + nsession[i] + '</b>')
		//$('<br><b><INPUT TYPE="radio" NAME="sel" VALUE="D" onClick="setU(createCallback(nsession[i]))">' + nsession[i] + '</a></b>')
		
		//$('<br><b><INPUT type="radio" id="user" name="sel" value=nsession[i]>' + nsession[i] + '</b>')
	cnt=cnt-1;
		$('<br><b>*' + nsession[cnt] + '<br></b>')
		.appendTo($('#onlineusers'));
		cnt=cnt-1;
	    //$('#nsession').val(nsession[i]);
	}
    
	//function createCallback(selu){
		//socket.emit(prompt("in create call back"));
		  //return function(){
		    //socket.emit(prompt("you clicked",selu));
		  //};
	//	}
	
}
function setU(setting) {
	
	//if($('input[name=user]:checked','#myform').val()){
	setting="siddhi";
	//}
	
	socket.emit(prompt("yoyooyoy",setting));
    
}

function setUserInfo() {
    socket.emit('setUserInfo',prompt("whats your name"));
}
function processMessage(username, data) {
 //$('<b>' + username + ':</b>' + data + '<br/>')
	//.insertAfter($('#onlineusers'));
    $('#data').val(data);
       
}

function processdoc() {
	 //$('<b>' + username + ':</b>' + data + '<br/>')
		//.insertAfter($('#onlineusers'));
	   var docname=$('#docn').val();
	    socket.emit('senddoc', docname);
	}

function processMessage2(username, data) {
    //$('<b>' + username + ':</b>' + data + '<br/>')
	//.insertAt($('#data'));
   // $('#data').val(data);
}
function updateUserList(data) {
	
    $('#users').empty();
    $.each(data, function (key, value) {
        $('#users').append('<div>' + key + '</div>');
    });
}
function sendMessage() {
    var message = $('#data').val();
    $('#data').val('');    
socket.emit('sendchat', message);
    $('#data').focus();
}

function sendMessage2() {
    var message = $('#data').val();
    //$('#data').val('');
    $('#data').val(message);    
    socket.emit('sendchat', message);
    $('#data').focus();
}
function sendMessage4() {
    var message = $('#data').val(' ');
    $('#data').val('');
    //$('#data').val(message);    
socket.emit('sendchat4', message);
    $('#data').focus();
}
function sendMessage5() {
    var message = $('#data').val();
    //$('#data').val('');
    $('#data').val(message);    
socket.emit('sendchat5', message);
    $('#data').focus();
}

function processEnterPress(e) {
    if (e.which == 13) {
        e.preventDefault();
        $(this).blur();
        $('#btn2').focus().click();
    }
}

