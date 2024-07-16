let scrollY = 0;

// add button
let button = document.createElement("button");
button.classList =
  "yt-spec-button-shape-next yt-spec-button-shape-next--filled yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m return-button";
button.style.display = "none";

let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
svg.setAttribute("width", "24px");
svg.setAttribute("height", "24px");
svg.setAttribute("viewBox", "0 -960 960 960");

let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute(
  "d",
  "M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z",
);
path.setAttribute("fill", "currentColor");
path.setAttribute("stroke-width", "1");
path.setAttribute("stroke-linecap", "round");

svg.appendChild(path);
button.appendChild(svg);
document.body.appendChild(button);

button.addEventListener("click", () => {
  window.scrollTo({ top: scrollY, behavior: "smooth" });

  button.style.display = "none";
});

let search = new URLSearchParams(window.location.search);
let currVid = `${window.location.pathname}?v=${search.get("v")}`;
document.body.addEventListener("click", (ev) => {
  if (ev.target.matches(`a[href^="${currVid}&t="]`)) {
    scrollY = window.scrollY;
    button.style.removeProperty("display");
  }
});

// hide button on navigate
document.addEventListener("yt-navigate-start", () => {
  search = new URLSearchParams(window.location.search);
  currVid = `${window.location.pathname}?v=${search.get("v")}`;

  button.style.display = "none";
});
