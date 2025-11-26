// Grab DOM elements
const form = document.getElementById("movie-form");
const input = document.getElementById("movie-input");
const list = document.getElementById("movie-list");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const title = input.value.trim();
  if (title === "") {
    return; // Do nothing if input is empty
  }

  addMovieItem(title);
  input.value = "";
  input.focus();
});

// Create a new list item with a delete button
function addMovieItem(title) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = title;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";

  // When the delete button is clicked, remove the li element
  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  list.appendChild(li);
}
