import { useState } from "react";
import styles from "./AddTodo.module.css";
import { MdAddToPhotos } from "react-icons/md";

function AddTodo({onNewItem}) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
    const handleDateChange = (event) => {
      setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  };


return ( 
          <div className="container text-center">
            <div className={` row ${styles.kgRow}`}>

              <div className="col-6">
                <input type="text" placeholder="Enter ToDo Here"
                value={todoName}
                onChange={handleNameChange}/>
              </div>
              <div className="col-4">
                <input type="Date" value={dueDate}onChange={handleDateChange}/>
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-success kg-button"
                onClick={handleAddButtonClicked}
                ><MdAddToPhotos /></button>
              </div>
            </div>
          </div>
        );

}

export default AddTodo