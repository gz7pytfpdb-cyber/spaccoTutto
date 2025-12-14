const button = document.querySelector(".checkBtn");
const input = document.querySelector(".imputPlaceholder");
const taskList = document.querySelector(".taskList");
button.addEventListener("click", function () {
  const inputText = input.value;
  if (inputText === "") {
    return;
  }

  const li = document.createElement("li");
  li.classList.add("listOfCheckList");
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });
  li.innerText = inputText;
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "x";
  deleteBtn.classList.add("deleteBtn");
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  taskList.appendChild(li);
  li.appendChild(deleteBtn);
  input.value = "";
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});
