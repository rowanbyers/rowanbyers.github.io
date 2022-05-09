//elements

const explosion =
document.getElementById("explosion");
const doomButton =
document.getElementById("doomButton");
const projects =
document.getElementById("projects");
const bioButton =
document.getElementById("bioButton");
const bioSplash =
document.getElementById("bioSplash");
const bio =
document.getElementById("bio");

//doom button
doomButton.addEventListener("click", function() {
    explosion.hidden = false;
    doomButton.hidden = true;
    projects.hidden = true;
  }
);
explosion.addEventListener("click", function() {
    explosion.hidden = true;
    doomButton.hidden = false;
    projects.hidden = false;
});

//bio splash
bioButton.addEventListener("click", function(){
    bio.hidden = false;
    bioSplash.hidden = true;
});

//logo
document.getElementById("logo").addEventListener("mousedown", function() {
    document.getElementById("rgb").hidden = true;
    document.getElementById("logoExplosion").hidden = false;
})

document.getElementById("logo").addEventListener("mouseup", function() {
    document.getElementById("rgb").hidden = false;
    document.getElementById("logoExplosion").hidden = true;
});