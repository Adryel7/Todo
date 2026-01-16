import { useContext } from "react";
import { themeConfig } from "../../contexts/theme";
import { ThemeContext } from "../../contexts/ThemeContext";
import type { Todo } from "../../hooks/useTodo";
import IconCheck from '/images/icon-check.svg'
import IconCross from '/images/icon-cross.svg'

interface TodoListPropos {
  todoList: Todo[];
  toggleTodoCompleted: (id: number) => void;
  setFilter: (filter: 'all' | 'active' | 'completed') => void;
  filter: 'all' | 'active' | 'completed';
  clearCompleted: () => void;
  delTodo: (id: number) => void;
}

const TodoList = ({
  todoList,
  toggleTodoCompleted,
  setFilter,
  filter,
  clearCompleted,
  delTodo,
}: TodoListPropos) => {

  const { theme } = useContext(ThemeContext);

  return (
    <>

      <div className={`${themeConfig[theme].todo.backgroundColor} rounded-md`}>
        <ul>
          {todoList.map((todo) => (
            <li className={`p-6 border-b ${themeConfig[theme].todo.borderColor}`} key={todo.id}>
              <div className="flex group itens-center gap-4 justify-between ">
                <span className={`w-6 h-6 rounded-full hover:bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))] p-px`}>
                  <button
                    onClick={() => toggleTodoCompleted(todo.id)}
                    className={`flex w-full h-full rounded-full cursor-pointer border ${themeConfig[theme].todo.borderColor} ${themeConfig[theme].todo.backgroundColor}
                           ${todo.completed && (
                        "bg-[linear-gradient(to_right,hsl(192,100%,67%),hsl(280,87%,65%))]"
                      )}`}>
                    {todo.completed && (
                      <img
                        src={IconCheck}
                        alt="Icone de check"
                        className="h-2 w-2 m-auto ml-2"
                      />
                    )}
                    <p className={` ${themeConfig[theme].todo.textColor} ${todo.completed ? "line-through opacity-50 pl-6" : "pl-10"}`}>{todo.text} </p>
                  </button>
                </span>
                <button onClick={() => delTodo(todo.id)} className="cursor-pointer opacity-0 group-hover:opacity-100"><img src={IconCross} alt="" /></button>
              </div>
            </li>
          ))}
        </ul>

        <div className={`text-sm flex justify-between p-4 ${themeConfig[theme].todo.textFooter}`}>
          <p>{todoList.length} items left</p>

          <div className="hidden sm:flex gap-4">
            <button
              onClick={() => setFilter("all")}
              className={
                `cursor-pointer
                 ${filter === "all" ? 'text-primary-blue-500' : ''}
                 ${themeConfig[theme].todo.textHoverFooter}`}
            >All</button>
            <button onClick={() => setFilter("active")}
              className={
                `cursor-pointer 
                ${filter === "active" ? 'text-primary-blue-500' : ''}
                ${themeConfig[theme].todo.textHoverFooter}`}>Active</button>
            <button onClick={() => setFilter("completed")}
              className={
                `cursor-pointer 
                ${filter === "completed" ? 'text-primary-blue-500' : ''}
                ${themeConfig[theme].todo.textHoverFooter}`}>Completed</button>
          </div>

          <button onClick={clearCompleted} className={`cursor-pointer ${themeConfig[theme].todo.textHoverFooter}`}>Clear Completed</button>
        </div>

      </div>



      <div className={`${themeConfig[theme].todo.backgroundColor} flex justify-center gap-5 py-4 rounded-md mt-7 ${themeConfig[theme].todo.textFooter} sm:hidden`}>
        <button onClick={() => setFilter("all")} className={`cursor-pointer ${filter === "all" ? 'text-primary-blue-500' : ''} ${themeConfig[theme].todo.textHoverFooter}`} >All</button>
        <button onClick={() => setFilter("active")} className={`cursor-pointer ${filter === "active" ? 'text-primary-blue-500' : ''} ${themeConfig[theme].todo.textHoverFooter}`}>Active</button>
        <button onClick={() => setFilter("completed")} className={`cursor-pointer ${filter === "completed" ? 'text-primary-blue-500' : ''} ${themeConfig[theme].todo.textHoverFooter}`}>Completed</button>
      </div>

    </>
  )
}

export default TodoList