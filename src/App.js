import {useState} from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

function App() {
    const [todos, setTodos] = useState([])
    const [task, setTask] = useState([])

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                complete: false
            }
            setTodos([...todos, newItem])
        }
    }

    const removeTask = (id) => {
        setTodos([...todos.filter((todo) => todo.id !== id)])
    }

    const handleToggle = (id) => {
        setTodos([
            ...todos.map((todo) =>
                todo.id === id ? {...todo, complete: !todo.complete} : {...todo}
            )
        ])
    }

    const random = () => {
        return Math.round(Math.random() * (todos.length - 1))
    }

    const returnTasks = () => {
        setTask([
            todos[random()].task,
            todos[random()].task,
            todos[random()].task
        ])
    }

    return (
        <div className="App">
            <header>
                <h1>Рулетка</h1>
                <button onClick={returnTasks}>запустить</button>
            </header>
            <div className="item-todo rez">
                <div>
                    <div className="left">Артем</div>
                    <div className="right">{task[0]}</div>
                </div>
                <div>
                    <div className="left">Данил</div>
                    <div className="right">{task[1]}</div>
                </div>
                <div>
                    <div className="left">Лада</div>
                    <div className="right">{task[2]}</div>
                </div>
            </div>
            <ToDoForm addTask={addTask}/>
            {todos.map((todo) => {
                return (
                    <ToDo
                        todo={todo}
                        key={todo.id}
                        toggleTask={handleToggle}
                        removeTask={removeTask}
                    />
                )
            })}
        </div>
    );
}

export default App;