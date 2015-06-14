'use strict'

function setup () {
    createCanvas(windowWidth,windowHeight);
}

var t = 0;

function draw () {
    background(255,255,255);

    t += 0.01;

    // noiseDetail(1,5)
    for (let i = 0; i < 150; i++) {
        let x = i * 4;
        let y = height * noise(t, i * 0.01);

        stroke(100,100,100)
        line(x,0,x,height * noise(t, i * 0.01));

        fill(0,0,0)
        noStroke()
        ellipse(x, y, 2, 2); 
    }
}