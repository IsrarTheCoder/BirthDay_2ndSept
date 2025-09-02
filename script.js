function checkPassword() {
  const password = document.getElementById("passwordInput").value;
  if (password === "flyaway") {
    launchButterflies();
    setTimeout(() => {
      document.getElementById("cover").style.display = "none";
      document.getElementById("mainContent").style.display = "block";
    }, 3000);
  } else {
    alert("Incorrect password. Try again!");
  }
}

function launchButterflies() {
  for (let i = 0; i < 30; i++) {
    const butterfly = document.createElement("div");
    butterfly.className = "butterfly";
    butterfly.style.left = Math.random() * window.innerWidth + "px";
    butterfly.style.bottom = "0px";

    document.body.appendChild(butterfly);

    setTimeout(() => {
      butterfly.remove();
    }, 3000);
  }
}
