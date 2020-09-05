const container = document.querySelector(".container");
const Cake = [
  {
    name: "Beautiful Cindrella cake",
    image: "images/cake_1.jpg"
  },
  {
    name: "CakeBake",
    image: "images/cake_2.jpg"
  },
  {
    name: "BlackForestcake",
    image: "images/cake_3.jpg"
  },
  {
    name: "SnowWhite",
    image: "images/cake_4.jpg"
  },
  {
    name: "Vanilla Cake",
    image: "images/cake_5.jpg"
  },
  {
    name: "Creame Cake",
    image: "images/cake_6.jpg"
  }

];
const showCake = () => {
  let output = "";
  Cake.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Order</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCake);
