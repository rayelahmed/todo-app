const addTodo = () => {
  const todoText = document.querySelector(".add-todo").value;
  const todoList = document.querySelector(".todo-list-here");

  todoList.innerHTML += `<li class="todo-item d-flex align-items-center justify-content-between">
    <div class="d-flex align-items-center">
      <input class="custom-checkbox" type="checkbox" name="" id="" />
      <h5 class="pl-2">${todoText}</h5>
    </div>
    <button class="cross-btn"><i class="fa-solid cross-btn fa-xmark"></i></button>
  </li>`;
};

const faSolid = document.getElementById("fa-solid");
faSolid.addEventListener("click", addTodo);

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("cross-btn")) {
    const listItem = event.target.closest(".todo-item");
    listItem.remove();
  }
});
