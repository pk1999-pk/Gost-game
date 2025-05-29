let score = 0;
let timeLeft = 15;
let interval;

document.getElementById('startButton').onclick = () => {
  score = 0;
  document.getElementById('scoreBoard').innerText = "";
  document.getElementById('withdrawForm').style.display = "none";
  let gameArea = document.getElementById('gameArea');
  gameArea.innerHTML = '';
  interval = setInterval(() => {
    spawnCoin(gameArea);
  }, 500);
  setTimeout(() => {
    clearInterval(interval);
    gameArea.innerHTML = '';
    document.getElementById('scoreBoard').innerText = "Your Score: " + score;
    document.getElementById('withdrawForm').style.display = "block";
  }, timeLeft * 1000);
};

function spawnCoin(area) {
  let coin = document.createElement('div');
  coin.className = 'coin';
  coin.style.top = Math.random() * 360 + 'px';
  coin.style.left = Math.random() * 260 + 'px';
  coin.onclick = () => {
    score += 1;
    coin.remove();
  };
  area.appendChild(coin);
}
