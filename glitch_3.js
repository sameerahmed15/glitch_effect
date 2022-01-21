var sketch = function(p) {
    p.windowW = window.innerWidth;
    p.windowH = window.innerHeight;
    p.isLoaded = false;
    p.glitch;
    p.imgSrc = 'https://i.postimg.cc/FR0nkSYR/Pngtree-game-glitch-t-shirt-design-5337428-1.png';

    p.setup = function() {
        p.background(0);
        p.createCanvas(p.windowW, p.windowH);
        p.loadImage(p.imgSrc, function(img){
            p.channelLen = 4;
            p.imgOrigin = img;
            p.imgOrigin.loadPixels();
            p.copyData = [];
            p.flowLineImgs = [];
            p.shiftLineImgs = [];
            p.shiftRGBs = [];
            p.scatImgs = [];
            p.throughFlag = true;
            p.copyData = new Uint8ClampedArray(p.imgOrigin.pixels);
            p.isLoaded = true
            for (let i = 0; i < 1; i++) {
                let o = {
                    pixels: null,
                    t1: floor(random(0, 1000)),
                    speed: floor(random(4, 24)),
                    randX: floor(random(24, 80))
                };
                p.flowLineImgs.push(o);
            }
    
            // shift line
            for (let i = 0; i < 6; i++) {
                let o = null;
                p.shiftLineImgs.push(o);
            }
    
            // shift RGB
            for (let i = 0; i < 1; i++) {
                let o = null;
                p.shiftRGBs.push(o);
            }
    
            // scat imgs
            for (let i = 0; i < 3; i++) {
                let scatImg = {
                    img: null,
                    x: 0,
                    y: 0
                };
                p.scatImgs.push(scatImg);
            }
        });
    }

    p.draw = function() {
        p.clear();
        p.background(0);

        if (p.isLoaded) {
            p.show();
        }
    }

    p.show = function() {

    }
}

var myp5 = new p5(sketch)