function printFlower() {
  const flowerContainer = document.getElementById('flowerContainer');
  flowerContainer.innerHTML = ''; // Clear previous flower

  // Create an SVG element for the flower
  const flowerSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  flowerSVG.setAttribute("width", "100");
  flowerSVG.setAttribute("height", "100");

  // Create a flower petal
  for (let i = 0; i < 6; i++) {
    const petal = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    petal.setAttribute("cx", "50");
    petal.setAttribute("cy", "20");
    petal.setAttribute("rx", "10");
    petal.setAttribute("ry", "30");
    petal.setAttribute("fill", "pink");
    petal.setAttribute("transform", `rotate(${i * 60}, 50, 50)`);
    flowerSVG.appendChild(petal);
  }

  // Create the flower center
  const center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  center.setAttribute("cx", "50");
  center.setAttribute("cy", "50");
  center.setAttribute("r", "10");
  center.setAttribute("fill", "yellow");
  flowerSVG.appendChild(center);

  // Append SVG to the container
  flowerContainer.appendChild(flowerSVG);
}
