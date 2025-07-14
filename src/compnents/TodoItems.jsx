import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={() => onDeleteClick(item.name)}
        />
      ))}
    </div>
  );
};

export default TodoItems;
