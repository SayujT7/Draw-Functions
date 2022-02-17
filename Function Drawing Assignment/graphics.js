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

function rect(x, y, w, h, mode) {
    if (mode === "fill") {
        ctx.fillRect(x, y, w, h)
    } else if (mode === "stroke") {
        ctx.strokeRect(x, y, w, h);
    }
}


function face(x, y, colorHead, colorEyes) {
    //Draw Head
    fill(colorHead)
    circle(x, y, 75, "fill");
    // Eyes
    fill(colorEyes);
    circle(x - 30, y - 20, 10, "fill");
    circle(x + 30, y - 20, 10, "fill");
    // Nose 
    line(x + 2, y + 2, x + 20, y + 10);
    line(x + 20, y + 10, x, y + 20);
    // Mouth
    line(x - 15, y + 40, x + 25, y + 40);
}

function robot(x, y, colorHead, colorEyes, colorBody) {
    //Draw Head (550,150)
    fill(colorHead)
    rect(x, y, 75, 75, "fill");

    //Draw Eyes
    fill(colorEyes)
    rect(x + 15, y + 20, 10, 10, "fill");
    rect(x + 50, y + 20, 10, 10, "fill");

    //Draw Body
    fill(colorBody);
    rect(x - 40, y + 75, 150, 175, "fill");

    //Draw Arms
    rect(x - 150, y + 115, 150, 30, "fill");
    rect(x + 110, y + 115, 110, 30, "fill");

    //Draw Legs
    rect(x - 20, y + 250, 30, 125, "fill");
    rect(x + 65, y + 250, 30, 125, "fill");

}