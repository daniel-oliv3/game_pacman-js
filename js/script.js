const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

class Boundary {
    constructor({ position }){
        this.position = position;
        this.width = 40;
        this.height = 40;
    }

    draw(){
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.position.width, this.position.height);
    }
}

const boundary = new Boundary({
    position: {
        x: 0,
        y: 0
    }
});

boundary.draw();


const boundary2 = new Boundary({
    position: {
        x: 41,
        y: 0
    }
})