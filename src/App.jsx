import { useState, useEffect } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai'
import cfep from './assets/cfep.png'
import './App.css'

function App() {

const [list, setList] = useState([]);
const [task, setTask] = useState("");

useEffect(() => {
setList([]);
}, [])


const handleAddItem = () => {

  if(task === "") {
    alert("Preencha uma tarefa")
  }else{

    const idRandom = (num) => Math.floor(Math.random() * num)

    const newTask = { id: idRandom(102343), title: task, isComplete: false }
    
    console.log(newTask)

    setList([...list, newTask]);
    
    setTask("");
  }

  
}


const handleDelete = (id) => {
  setList(list.filter((remove) => remove.id !== id))
}

function handleCheckItem(id){

  const taskComplete = list.map(task => {
			if (task.id === id) {
				return { ...task, isComplete: !task.isComplete }
			}

			return task
		})

		setList(taskComplete)
}


return (
<>
  <div className="container">
    <div className="box">
      <h1>LISTA DE TAREFAS</h1>
      <div className="box_img">
        <img src={cfep} alt="" />
      </div>
      <div className="add_task">
        <input type="text" value={task} onChange={((e)=> setTask(e.target.value))} placeholder="Digite sua tarefa" />
        <button onClick={handleAddItem}>Adicionar</button>
      </div>
      <div className="container_list">
        <ul>
          {list.map((item) =>(
          <li key={item.id} className={item.isComplete ? "listItemComplete" : "listItem"}>
            <p>{item.title}</p>
            <span>
              <i onClick={()=> handleCheckItem(item.id)}><AiOutlineCheck/></i>
              <i onClick={()=> handleDelete(item.id)}><RiDeleteBin6Line /></i>
            </span>
          </li>
          )) }
        </ul>
      </div>
    </div>

  </div>
</>
)
}

export default App