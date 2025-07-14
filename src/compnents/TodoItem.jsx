import { RiDeleteBack2Fill } from "react-icons/ri";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(todoName)}
          >
            <RiDeleteBack2Fill />
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
