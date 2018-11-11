
function click(evt){
	var coord=[];

	xPos = evt.pageX;
	yPos = evt.pageY;
	x = xPos;
	y = yPos;

	coord[1] = xPos;
	coord[2] = yPos;

	if(clickCount<=input.value){
		console.log(xPos);
		console.log(yPos);

		coordArray[clickCount] = coord;

		var ctx = canvas.getContext("2d");  // https://www.w3schools.com/html/html5_canvas.asp
		ctx.beginPath();               // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_animate_3
		ctx.arc(xPos,yPos,30,0,2*Math.PI);
		ctx.stroke();

		var text = document.createElement("p");
		var node = document.createTextNode(clickCount);
		text.appendChild(node);
		var element = document.getElementById("p1");
		element.appendChild(text);
		text.style.position = "absolute";
		text.style.left = xPos + "px";
		text.style.top = yPos-15 + "px";

	//	console.log(coord[1]);

		console.log(clickCount);
		clickCount++;

	}
	else{
	
		let arr1=[];
		let i = 1;

		let dx; 
		let dy; 

		var check = 0 ;


		for(i = 1;i<clickCount;i++){
			
			arr1 = coordArray[i];
			
		//	console.log(arr1);
			console.log(xPos);
			console.log(yPos);

			dx = xPos - arr1[1];
			dy = yPos - arr1[2];

			var isInsideOuterRadius=(dx*dx+dy*dy<30*30);
			var isInsideInnerRadius=(dx*dx+dy*dy<1*1);
			if( (isInsideOuterRadius && !isInsideInnerRadius))
			{
				console.log("yeeah");
				if(check==1 )
				{
					lineCoord_LineTo[1]=xPos;
					lineCoord_LineTo[2]=yPos;
					check++;
				}
			
				if(check==0)
				{
				//console.log("yeeah");
					lineCoord_MoveTo[1]=xPos;
					lineCoord_MoveTo[2]=yPos;
					check++;
				}
				if(check==2)
				{
					var c = document.getElementById("inner");
					var ctx = c.getContext("2d");
					ctx.beginPath();
					ctx.moveTo(700,30);
					ctx.lineTo(45, 7);
					ctx.stroke();
				}
			}
			else console.log("noo");
		}
	}

	/*var dx=testX-centerX;   // https://stackoverflow.com/questions/20218603/identifying-event-on-arc-of-circle
	var dy=testY-centerY; */
}


var canvas = document.getElementById("inner"); //main
var input = document.getElementById("username"); //click

var para = document.createElement("p");  // click

var lineCoord_LineTo = [];
var lineCoord_MoveTo = [];

let xPos = 0;
let yPos = 0;

let clickCount = 1;

let xPos1 = 0;
let xPos2 = 0;
let yPos1 = 0;
let yPos2 = 0;

let coordArray = [];
let index = 0;
let check = false;


// alert("hi");

$('#inner').click(click);

//console.log(coordArray);

