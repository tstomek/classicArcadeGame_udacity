// Enemies our player must avoid
const Enemy = function (x, y, speeds) {

    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses

    this.x = x;
    this.y = y;
    this.speeds = speeds;
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speeds * dt;


    if (this.x > 500) {
        this.x = -50;
        this.speeds = 100 + Math.floor(Math.random() * 400);
    }

    // Checks for collisions between the player and the enemies
    if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && 60 + player.y > this.y) {
        player.x = 202;
        player.y = 405;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function (x, y) {
    this.x = x;
    this.y = y;

    //The image of the player of horn-girl is added to the playing field
    this.player = 'images/char-horn-girl.png';
};

Player.prototype.update = function (dt) {

};

// Renders the image of the user into the game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

// Allows the user to use the arrow keys to jump from tile to tile
Player.prototype.handleInput = function (keyPress) {

    // Enables user on key to move

    if (keyPress == 'left' && this.x > 0) {
        this.x -= 102;
    }
    if (keyPress == 'right' && this.x < 700) {
        this.x += 102;
    }
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 83;
    }
    if (keyPress == 'down' && this.y < 405) {
        this.y += 83;
    }
    // Instantly reset to the starting position
    if (this.y < 0) {
        setTimeout(() => {
            this.x = 202;
            this.y = 405;
        }, 800);
    }
};


//enemies are placed in an array
let allEnemies = [];

// Location of the 3 enemies
let locationEnemy = [63, 147, 230];

locationEnemy.forEach(function (locationY) {
    enemy = new Enemy(0, locationY, 300);
    allEnemies.push(enemy);
});

//location of the player is located at x=200, y=405
let player = new Player(202, 405);

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
