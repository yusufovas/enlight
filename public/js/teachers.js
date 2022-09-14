
const list = document.querySelector("#list");
list.addEventListener("click", (evt) => {
  let group_id;
  evt.target.dataset.id ? (group_id = evt.target.dataset.id) : "";
  document.cookie = "group_id" + "=" + (group_id || "");
});