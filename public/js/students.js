const list = document.querySelector("#list");
const form = document.querySelector("#form");
const modal = document.getElementById("myModal");
const title = document.getElementById('title')

list.addEventListener("click", (evt) => {
  let group_id;
  evt.target.dataset.id ? (group_id = evt.target.dataset.id) : "";
  document.cookie = "group_id" + "=" + (group_id || "");
  fetch("http://localhost:6060/tasks-for-students", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      data && data.length > 0 ? data.map(el => {
        title.innerHTML = el.task_title
      }) : title.innerHTML = 'no tasks';
    });
});
