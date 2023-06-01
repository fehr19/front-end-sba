let elementList = document.querySelectorAll(".tableHeader");

document.getElementById("numberOfRows").textContent = "Total Art works: " + (elementList.length );

elementList.forEach(element => {
element.textContent = getRandomInt(1000);
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

