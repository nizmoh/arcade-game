// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPos = -this.step;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < this.boundary) {
      this.x += 200 * dt;
    }
    else {
        this.x = this.resetPos;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});



// hero class
  // constructor
    // properties
        // x position
        // y position
        //  sprite image
    // methods
      // check collision
        // did player x and y collide with enemy?
      // check win
        // did player x and y reach final tile?
      // render
        // draw player sptite on current x and y coords position
      // handle keyboard input
        // update players x and y properties according to input
      // reset hero
        // set x and y to starting x and y

class Hero {
  constructor(){
    this.Sprite = 'images/char-boy.png';
    this.step = 101;
    this.jump = 83;
    this.startX = this.step * 2;
    this.startY = this.jump * 5;
    this.x = this.startX;
    this.y = this.startY;

  }

  // draw heor on current x and y position
  render() {
    ctx.drawImage(Resources.get(this.Sprite), this.x, this.y);
  }

  handleInput(input) {
    switch(input) {
      case 'left':
        if (this.x > 0){
          this.x -= this.step;
        }
        break;
      case 'up':
        if (this.y > this.jump){
          this.y -= this.jump;
        }
        break;
      case 'right':
        if (this.x < this.step * 4) {
          this.x += this.step;
        }
        break;
      case 'down':
        if (this.y < this.jump * 4){
          this.y += this.jump;
        }
        break;
    }
  }

}

const player = new Hero();
const bug1 = new Enemy();
const allEnemies = [];
allEnemies.push(bug1);
