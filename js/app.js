// Character super class
class Character {
    constructor(sprite, x, y) {
        this.STEP = 101;
        this.JUMP = 83;
        this.STARTX = this.STEP * 2;
        this.STARTY = (this.JUMP * 4) + 55;
        if(sprite === 'bug') {
            this.SPRITE = 'images/enemy-bug.png'
            this.y = y + 55
        }
        else {
            this.SPRITE = 'images/char-boy.png'
            this.y = y;
            this.x = this.STARTX;
            this.y = this.STARTY;
        }
    }
}

// Enemies our player must avoid
class Enemy extends Character{
    constructor(sprite, x, y, speed){
        super(sprite, x, y)
        this.speed = speed;
        this.STEP = 101;
        this.boundary = this.STEP * 5;
        this.resetPos = -this.STEP;
    }

    // Update the enemy's position, required method for game
    update(dt) {
        if (this.x < this.boundary) {
          this.x += this.speed * dt;
        }
        else {
            this.x = this.resetPos;
        }
    };

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.SPRITE), this.x, this.y);
    };
};

// hero class
class Hero extends Character {
    constructor(sprite, x, y){
        super(sprite, x, y);
        this.victory = false;
  }

  // draw heor on current x and y position
    render() {
        ctx.drawImage(Resources.get(this.SPRITE), this.x, this.y);
    }

    // handle keyboard input
    handleInput(input) {
        switch(input) {
            case 'left':
                if (this.x > 0){
                    this.x -= this.STEP;
                }
            break;
            case 'up':
                if (this.y > this.JUMP){
                    this.y -= this.JUMP;
                }
            break;
            case 'right':
                if (this.x < this.STEP * 4) {
                    this.x += this.STEP;
                }
            break;
            case 'down':
                if (this.y < this.JUMP * 4){
                    this.y += this.JUMP;
                }
            break;
        }
    }

    update() {
        for(let enemy of allEnemies) {
            if (
                this.y === enemy.y &&
                (enemy.x + enemy.STEP/2 > this.x &&
                    enemy.x < this.x + this.STEP/2 )
                ){
                    this.reset();
                }
            }

            if(this.y === 55) {
                this.victory = true;
            }
    }

    reset() {
        this.y = this.STARTY;
        this.x = this.STARTX;
    }
};


// This listens for key presses and sends the keys to your
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



function bugSpeed() {
    return Math.floor(400 + Math.random()*(400 + 1 - 500))
}

const player = new Hero('boy');
const bug1 = new Enemy('bug', -101, 0, bugSpeed());
const bug2 = new Enemy('bug', -101, 83, bugSpeed());
const bug3 = new Enemy('bug', (-101 * 2.5), (83 * 2), bugSpeed());
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3);

console.log(bug1);
console.log(player);
