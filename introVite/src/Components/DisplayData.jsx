// Display data component,
export default function DisplayData({ tasks }) {
    if (tasks.length <= 0) {
      return <h2>No data</h2>;
    }
    return (
      <>
        {tasks.map((task, index) => (
          <div key={index}>
            <h3>Task Name: {task.taskName}</h3>
            <h3>
              Completion Status:{" "}
              {task.completionStatus ? "Completed" : "Not Completed"}
            </h3>
          </div>
        ))}
      </>
    );
  }