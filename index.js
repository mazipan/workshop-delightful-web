const URL_API = 'https://ghibliapi.herokuapp.com/films'

document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById('app')
  fetch(URL_API)
    .then(res => res.json())
    .then(data => {
      data.forEach(element => {
        const div = document.createElement("div");

        const att = document.createAttribute("class");       // Create a "class" attribute
        att.value = "notification is-primary";
        div.setAttributeNode(att);

        const text = document.createTextNode(element.title);
        div.appendChild(text);
        app.appendChild(div);
      });
    })
});
