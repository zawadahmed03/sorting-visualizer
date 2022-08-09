const draw = (randomNumbers, c) => {
  c.fillStyle = "#ffffff";
  c.fillRect(0, 0, window.innerWidth, window.innerHeight);
  c.beginPath();
  for (let i = 0; i < randomNumbers.length; i++) {
    c.moveTo(i, 0);
    c.lineTo(i, randomNumbers[i]);
  }
  c.stroke();
};

export default draw
