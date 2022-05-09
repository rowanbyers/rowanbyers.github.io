const explosion =
document.getElementById('explosion');
const doomButton =
document.getElementById("doomButton");

doomButton.addEventListener("click", function() {
    explosion.hidden = false;
    doomButton.hidden = true;
  }
  );