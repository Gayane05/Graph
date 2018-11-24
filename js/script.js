
function drawCircle(xPos,yPos){
	var circle = canvas.getContext("2d"); 
		circle.beginPath();    
		circle.arc(xPos,yPos,30,0,2*Math.PI);  
      	circle.fillStyle = 'green';
		circle.stroke();

	var text = document.createElement("p");   
		var node = document.createTextNode(circleCount);
		text.appendChild(node);
		var element = document.getElementById("p1");
		element.appendChild(text);
		text.style.position = "absolute";
		text.style.left = xPos + "px";
		text.style.top = yPos-15 + "px";

		console.log(circleCount); 
		circleCount++;
}



function changeCircleColorClick(center_x, center_y){
		var circle_two = canvas.getContext("2d");  
			circle_two.beginPath();             
			circle_two.arc(center_x,center_y,30,0,2*Math.PI);  
			circle_two.fillStyle = 'violet';
 			circle_two.fill();
 			circle_two.stroke();
}


function drawLine(start_x, start_y, end_x, end_y){

  	var headLen = 10;   
    var angle = Math.atan2(end_y-start_y,end_x-start_x);
    
    var c = document.getElementById("inner");
    var context = c.getContext("2d");
	context.beginPath();
    context.moveTo(start_x,start_y);
    context.lineTo(end_x+3*Math.cos(angle-Math.PI/6),end_y+3*Math.sin(angle-Math.PI/6));
    context.lineTo(end_x, end_y);
    context.lineTo(end_x-headLen*Math.cos(angle-Math.PI/4),end_y-headLen*Math.sin(angle-Math.PI/4));
    context.moveTo(end_x, end_y);
    context.lineTo(end_x-headLen*Math.cos(angle+Math.PI/4),end_y-headLen*Math.sin(angle+Math.PI/4));
    context.stroke();

}


function click(evt){
	var coord=[]; 

	xPos = evt.pageX;
	yPos = evt.pageY;
	x = xPos;
	y = yPos;

	var k = 1;

	if(circleCount<=input.value){
		coord[1] = xPos; 
		coord[2] = yPos; 
		coordArray[circleCount] = coord; 
		drawCircle(xPos,yPos); 
	}


	else {
		let arr = []; 
		var heravorutyun_x=0;
		var heravorutyun_y=0;

		for(var i=1; i<circleCount; i++){
			
			arr = coordArray[i];   

			if(count_yes>1)  
			{
				count_yes = 0;
			}

			heravorutyun_x =( xPos - arr[1])*(xPos - arr[1]); 
			heravorutyun_y = (yPos - arr[2])*(yPos - arr[2]); 

			if(heravorutyun_x<900 && heravorutyun_y<900)
			{	
 				k++;

				if(count_yes == 0) 
				{
					first_coord[1] = arr[1]; 
					first_coord[2] = arr[2];
				}

				if(count_yes == 1)  
				{
					console.log("yes");
					last_coord[1] = arr[1]; 
					last_coord[2] = arr[2];
 					drawLine(first_coord[1],first_coord[2], last_coord[1],last_coord[2]); 		
				}
				++count_yes;
			}
		}
	}

}


var canvas = document.getElementById("inner"); 
var input = document.getElementById("username"); 

var para = document.createElement("p");  

var lineCoord_LineTo = [];
var lineCoord_MoveTo = [];

var count_yes = 0; 
var xPos = 0;
var yPos = 0;
var circleCount = 1; 
var coordArray = []; 
var first_coord = []; 
var last_coord = []; 

$('#inner').click(click);

var c_canvas = document.getElementById("inner");
var context = c_canvas.getContext("2d");

