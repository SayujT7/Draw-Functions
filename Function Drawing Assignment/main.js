// Setup Canvas 
let cnv = document.getElementById("canvasEl");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 700;

face(200, 300, "green", "blue");
face(500, 600, "pink", "purple");
face(300, 450, "yellow", "red");

robot(550, 150, "blue", "red", "purple");
robot(400, 100, "blue", "red", "purple");
robot(300, 400, "blue", "red", "purple");
robot(125, 305, "blue", "red", "purple");


