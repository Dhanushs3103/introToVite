// libraries
import React from "react";

// local imports
import DisplayData from "./DisplayData";


// function form component
export default function FormComponent() {
  let [formState, setFormState] = React.useState({
    taskName: "",
    completionStatus: false,
  });

  let [tasks, setTasks] = React.useState([]);

  let { taskName, completionStatus } = formState;

  function handleInputChange(event) {
    let { name, type, value, checked } = event.target;
    let finalValue = type === "checkbox" ? checked : value;
    setFormState({
      ...formState,
      [name]: finalValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, formState]);
    setFormState({
      ...formState,
      taskName: "",
      completionStatus: false,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* taskName*/}
        <label htmlFor="taskName">
          Task name :
          <input
            type="text"
            name="taskName"
            value={taskName}
            id="taskName"
            onChange={handleInputChange}
            placeholder="Enter the task"
          />
        </label>
        {/*completion status*/}
        <label htmlFor="completion">
          completion status:
          <input
            id="completion"
            name="completionStatus"
            value={completionStatus}
            onChange={handleInputChange}
            type="checkbox"
          />
        </label>
        {/*submit button*/}
        <button>submit</button>
      </form>

      {/* Displaying the task*/}

      <DisplayData tasks={tasks} />
    </>
  );
}
