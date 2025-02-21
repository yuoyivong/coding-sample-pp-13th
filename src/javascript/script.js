// default task data
const taskList = [
  {
    taskId: 1,
    taskName: "Complete JavaScript Homework",
    dueDate: "10/02/2024",
    priority: "high",
  },
  {
    taskId: 2,
    taskName: "Review Team Documentation",
    dueDate: "30/12/2024",
    priority: "medium",
  },
];

// variable declaration
const taskListBody = document.getElementById("taskListBody");
const formSubmit = document.getElementById("formSubmit");
const taskNameInput = document.getElementById("taskName");
const dueDateSelect = document.getElementById("dueDate");
const priorityTask = document.getElementById("priority");
const taskNameError = document.getElementById("taskNameError");
const dueDateError = document.getElementById("dueDateError");
const priorityError = document.getElementById("priorityError");
const priorityColor = document.getElementById("priorityColor");

displayTaskInTable();
// display task list data in table
function displayTaskInTable() {
  // use for of loop to loop through each array element and display in each row of a table
  for (let task of taskList) {
    // set priority color based on its value
    let priorityColor =
      task.priority === "high"
        ? "text-red-600"
        : task.priority === "medium"
        ? "text-yellow-600"
        : "text-green-600";

    taskListBody.innerHTML += `<tr
    class="border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600  odd:bg-white even:bg-gray-50"
  >
    <td
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      ${task?.taskId}
    </td>
    <td class="px-6 py-4">${task?.taskName}</td>
    <td class="px-6 py-4">${task?.dueDate}</td>
    <td class="px-6 py-4 capitalize font-semibold ${priorityColor}">${task?.priority}</td>
    <td class="px-6 py-4">
      <button
        type="button"
        onclick="handleStatusButtonClick(this)"
        value="Pending"
        class="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
      >
        Pending
      </button>
    </td>
  </tr>`;
  }
}

// function to handle onclick button action
function handleStatusButtonClick(button) {
  // get button value to check if its value is "Pending" then change to "Completed" and set new style
  if (button.value === "Pending") {
    button.textContent = "Completed";
    button.value = "Completed";
    button.setAttribute(
      "class",
      "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    );
  } else {
    // if the value is "Completed" then change it to "Pending" and apply style
    button.textContent = "Pending";
    button.value = "Pending";
    button.setAttribute(
      "class",
      "focus:outline-none text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
    );
  }
}

// when user clicks on the form, we can get value from each input and push to the array to display another row
function handleFormSubmit(e) {
  e.preventDefault();

  handleFormValidation();

  try {
    if (
      taskNameInput.value !== "" &&
      dueDateSelect.value !== "" &&
      priorityTask.value !== ""
    ) {
      //   clear old data on every submit by assigning an empty string to table body
      taskListBody.innerHTML = "";
      //  define new task
      const newTask = {
        taskId: taskList?.length + 1,
        taskName: taskNameInput.value,
        dueDate: dueDateSelect.value,
        priority: priorityTask.value,
        status: false,
      };

      //  push new obj to array
      taskList.push(newTask);
      formSubmit.reset();

      //   call display task in table function to show new data
      displayTaskInTable();
    }
  } catch (err) {
    console.log(err.message);
  }
}

// add submit event to form
formSubmit.addEventListener("submit", handleFormSubmit);

// handle validation
function handleFormValidation() {
  let currentDate = new Date();
  // check whether the task name input is empty or not
  if (taskNameInput.value === "") {
    taskNameError.textContent = "* Task name field is required.";
  } else {
    taskNameError.textContent = "";
  }

  // check whether the due date is empty or not
  if (dueDateSelect.value === "") {
    dueDateError.textContent = "* Due Date field is required.";
  } else if (new Date(dueDateSelect.value) < currentDate) {
    dueDateError.textContent =
      "* Due Date field cannot be lower than current date.";
  } else {
    dueDateError.textContent = "";
  }

  // check whether the priority field is empty or not
  if (priorityTask.value === "") {
    priorityError.textContent = "* Priority field is required.";
  } else {
    priorityError.textContent = "";
  }
}
