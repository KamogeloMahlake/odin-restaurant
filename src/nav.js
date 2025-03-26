const nav = document.createElement("nav");
const tabTitles = ["Home", "Menu", "About"];

for (const title of tabTitles)
{
  const button = document.createElement("button");
  button.textContent = title;
  nav.appendChild(button);
}

export default document.createElement("header").appendChild(nav);
