const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;


class Shape {

  constructor(x, y, velX, velY) {

    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;

  }

}



class Ball extends Shape {

  constructor(x, y, velX, velY, color, size) {

    super(x, y, velX, velY);

    this.color = color;
    this.size = size;

  }


  draw() {

    ctx.beginPath();

    ctx.fillStyle = this.color;

    ctx.arc(
      this.x,
      this.y,
      this.size,
      0,
      2 * Math.PI
    );

    ctx.fill();

  }


  update() {

    if (
      this.x + this.size >= canvas.width ||
      this.x - this.size <= 0
    ) {

      this.velX = -this.velX;

    }


    if (
      this.y + this.size >= canvas.height ||
      this.y - this.size <= 0
    ) {

      this.velY = -this.velY;

    }


    this.x += this.velX;
    this.y += this.velY;

  }


  collisionDetect() {

    for (const ball of balls) {

      if (this !== ball) {

        const dx = this.x - ball.x;
        const dy = this.y - ball.y;

        const distance = Math.sqrt(dx * dx + dy * dy);


        if (distance < this.size + ball.size) {

          ball.color = this.color =
          `rgb(
          ${Math.random()*255},
          ${Math.random()*255},
          ${Math.random()*255}
          )`;

        }

      }

    }

  }

}



class EvilCircle {

  constructor(x, y) {

    this.x = x;
    this.y = y;
    this.color = "white";
    this.size = 20;
    this.velX = 20;
    this.velY = 20;

  }


  draw() {

    ctx.beginPath();

    ctx.strokeStyle = this.color;

    ctx.lineWidth = 3;

    ctx.arc(
      this.x,
      this.y,
      this.size,
      0,
      2 * Math.PI
    );

    ctx.stroke();

  }


  checkBounds() {

    if (
      this.x + this.size >= canvas.width ||
      this.x - this.size <= 0
    ) {

      this.x -= this.velX;

    }


    if (
      this.y + this.size >= canvas.height ||
      this.y - this.size <= 0
    ) {

      this.y -= this.velY;

    }

  }


  setControls() {

    window.onkeydown = (e) => {

      switch(e.key) {

        case "a":
          this.x -= this.velX;
          break;

        case "d":
          this.x += this.velX;
          break;

        case "w":
          this.y -= this.velY;
          break;

        case "s":
          this.y += this.velY;
          break;

      }

    };

  }


  collisionDetect() {

    for (const ball of balls) {

      const dx = this.x - ball.x;
      const dy = this.y - ball.y;

      const distance = Math.sqrt(dx*dx + dy*dy);


      if (distance < this.size + ball.size) {

        ball.exists = false;

      }

    }

  }

}



const balls = [];


while (balls.length < 25) {


  const size = 10 + Math.random() * 20;


  const ball = new Ball(

    Math.random() * (canvas.width - size * 2) + size,

    Math.random() * (canvas.height - size * 2) + size,

    Math.random() * 4 - 2,

    Math.random() * 4 - 2,

    `rgb(
    ${Math.random()*255},
    ${Math.random()*255},
    ${Math.random()*255}
    )`,

    size

  );


  balls.push(ball);

}



const evilCircle = new EvilCircle(
  400,
  250
);


evilCircle.setControls();



function loop() {


  ctx.fillStyle = "rgba(0,0,0,0.25)";

  ctx.fillRect(
    0,
    0,
    canvas.width,
    canvas.height
  );


  for (const ball of balls) {


    if (ball.exists !== false) {

      ball.draw();

      ball.update();

      ball.collisionDetect();

    }


  }


  evilCircle.draw();

  evilCircle.checkBounds();

  evilCircle.collisionDetect();


  requestAnimationFrame(loop);

}


loop();