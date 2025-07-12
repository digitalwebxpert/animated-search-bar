const container = document.getElementById("searchContainer");
const input = document.getElementById("searchInput");

container.addEventListener("click", function (e) {
  e.stopPropagation();
  container.classList.add("active");
  input.focus();
});

document.addEventListener("click", function (e) {
  if (!container.contains(e.target)) {
    container.classList.remove("active");
    input.value = "";
  }
});
