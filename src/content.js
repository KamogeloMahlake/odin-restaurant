const h1 = document.createElement("h1");
const hours = document.createElement("div");
const location = document.createElement("div");
const hoursTitle = document.createElement("h2");
const locationTitle = document.createElement("h2");
const lContent = document.createElement("p");


hoursTitle.textContent = "Hours";
locationTitle.textContent = "Location";
lContent.textContent = "815 Test Street, Test, Test";
hours.appendChild(hoursTitle);
location.appendChild(locationTitle);
location.appendChild(lContent);

const hoursArray = ["Monday-Friday: 7am-7pm", "Saturday: 9am-3pm", "Sunday: 9am-12pm"];

for (const i of hoursArray)
{
  const p = document.createElement("p");
  p.textContent = i;
  hours.appendChild(p);
}

const content = document.createElement("div");
content.id = "content";
content.appendChild(hours);
content.appendChild(location);
export {content};
