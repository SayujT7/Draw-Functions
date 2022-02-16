// Functions

// Colour Function 
function stroke(style) {
    ctx.strokeStyle = style;
}

function fill(style) {
    ctx.fillStyle = style;
}

function lineWidth(width) {
    ctx.lineWidth = width;
}

function font(fontSetting) {
    ctx.font = fontSetting;
}

// Line Function 
function line(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function circle(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, mode);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}

function semiCirlce(x, y, r, mode) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI, false, mode);
    if (mode === "fill") {
        ctx.fill();
    } else if (mode === "stroke") {
        ctx.stroke();
    }
}


function face() {
    //Draw Head
    circle(350, 350, 75, "stroke");
    // Eyes
    circle(320, 320, 10, "fill");
    circle(380, 320, 10, "fill");
    // Nose 
    
    // Mouth
}