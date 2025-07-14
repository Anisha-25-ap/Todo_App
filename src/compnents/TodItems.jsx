import TodoItem from "./TodoItem";

const todoItems = ({todoItems}) => {
  return ( <>
  <div className="items-container">
    <TodoItem todoDate="4/13/26" todoName="Buy milk"></TodoItem>
    <TodoItem todoDate="4/11/26" todoName="Go o Colege"></TodoItem>

  </div>
  
  </>)
};

export default todoItems;