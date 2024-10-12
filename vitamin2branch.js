/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementByID('sidebarButton');
  const sidebar = document.getElementByID('sidebar');

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains('opened');

    if (sidebarIsOpen) {
      // Close the sidebar
      /** YOUR CODE HERE */
      sidebar.classList.remove('opened');
      sidebarButton.textContent ='›';
    } else {
      // Open the sidebar
      /** YOUR CODE HERE */
      sidebar.classList.add('opened');
      sidebarButton.textContent='‹';
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const addTodoButton = document.getElementById('add-Todo');
  const todoListUl = document.getElementById('todo-List');
}
/** YOUR CODE HERE */
  addTodoButton.addEventListener("click", (event) => {
      const taskName = document.getElementById('task-name').value;
    if (taskName.length > 0) {
      let newTask = document.createElement('li');
      newTask.textContent = taskName;
      todoListUl.appendChild(newTask);
      //console.log (taskName);
      document.getElementById('task-name').value ='';
    
    }
    });

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const message = document.getElementByID('message');

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    /** YOUR CODE HERE */
    message.textContent ='Hello {firstNameInput.value} ${lastNameInput.value}!';
  };

  /** YOUR CODE HERE */
firstNameInput.addEventListener('input', updateMessage);
lastNameInput.addEventListener('input', updateMessage);

};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
