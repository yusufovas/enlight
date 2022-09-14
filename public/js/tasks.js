const task_form = document.getElementById("task_form");
const title = document.getElementById("title");
let cookie = document.cookie.split(";");
let c = cookie.find((el) => el.includes("group_id"));
let splitted = parseInt(c.split("=")[1]);

task_form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  fetch("http://localhost:6060/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      task_title: title.value,
      group_id: splitted,
    }),
  });
  window.location.reload()
});

var modal = document.getElementById("myModal");

var button = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

button.onclick = function () {
  modal.style.display = "block";
  console.log('ok');
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


