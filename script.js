function trigger() {
  const message = document.getElementById('message');
  message.textContent = "You shouldn't have clicked...";
  message.style.color = "white";
  document.body.style.backgroundColor = "darkred";

  // Play creepy sound
  const audio = document.getElementById('creepySound');
  audio.play();

  // Add a fake jumpscare
  setTimeout(() => {
    document.body.innerHTML = '<h1 style="color:white; font-size:5em; text-align:center;">👁️ WE SEE YOU.</h1>';
  }, 4000);
}
