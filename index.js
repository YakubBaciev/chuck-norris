const button = document.createElement("button");
const div = document.createElement("div");

button.textContent = "ШУТКА";

document.body.append(button);
document.body.append(div);

async function getJoke() {
  const data = await fetch("https://api.chucknorris.io/jokes/random ");
  const dataJason = await data.json();
  div.textContent = dataJason.value;
}
button.addEventListener("click", () => {
  getJoke();
});
