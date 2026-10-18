
function findCard(name) {
  return Array.from(document.querySelectorAll("#list .card")).find(
    (card) => card.querySelector("h3").textContent.trim() === name
  );
}

export function addProduct(name, price) {
  const card = document.createElement("li");
  card.classList.add("card");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const priceElement = document.createElement("p");
  priceElement.classList.add("price");
  priceElement.textContent = `${price} EGP`;

  card.append(heading, priceElement);
  document.querySelector("#list").append(card);
}

export function removeProduct(name) {
  const card = findCard(name);
  if (card) {
    card.remove();
  }
}

export function markSoldOut(name) {
  const card = findCard(name);
  if (card) {
    card.classList.add("sold-out");
  }
}

export function clearProducts() {
  document.querySelectorAll("#list .card").forEach((card) => card.remove());
}

export function wireButtons() {
  document.querySelector("#add").addEventListener("click", () => {
    addProduct("Notebook", 45);
  });

  document.querySelector("#reset").addEventListener("click", () => {
    clearProducts();
  });
}
