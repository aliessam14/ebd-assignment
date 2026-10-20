
import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");
  listElement.replaceChildren();

  for (const item of list) {
    const li = document.createElement("li");
    li.classList.add("product");
    li.textContent = item.name;
    listElement.append(li);
  }
}

export function matching() {
  return items.filter((item) => item.price < 100);
}

export function start() {
  renderItems(items);

  document.querySelector("#run-filter").addEventListener("click", () => {
    renderItems(matching());
  });
}
