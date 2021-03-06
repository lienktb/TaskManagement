import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Search from "./components/Search";
import ListTask from "./components/ListTask";
import { useEffect, useState } from "react";
import { stringify, v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [taskReplace, setTaskReplace] = useState(tasks);
  const [type, setType] = useState();

  useEffect(()=>{
    const check = localStorage.getItem("tasks");
    if(check){
      setTasks(JSON.parse(check));
      setTaskReplace(JSON.parse(check));
    }else{
      localStorage.setItem("tasks",JSON.stringify([]));
    }
  },[])
  const addTask = (task) => {
    const id = uuidv4();
    task = { ...task, id: id };
    const arr = [...tasks, task];
    setTasks(arr);
    localStorage.setItem("tasks", JSON.stringify(arr));
    setTaskReplace(tasks);
  };
  console.log(tasks);

  function compareValue(a, b) {
    let fa = a.name.toLowerCase();
    let fb = b.name.toLowerCase();

    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  }
  function compareValue2(a, b) {
    let fa = a.name.toLowerCase();
    let fb = b.name.toLowerCase();

    if (fa > fb) {
      return -1;
    }
    if (fa < fb) {
      return 1;
    }
    return 0;
  }
  const handleFilter = (filter) => {
    const newTasks = [...tasks];
    switch (filter) {
      case "increase":
        newTasks.sort(compareValue);
        console.log(newTasks);
        setTasks(newTasks);
        break;
      case "decrease":
        newTasks.sort(compareValue2);
        setTasks(newTasks);
        break;
      case "hide":
        setTasks(
          newTasks
            .filter((item) => item.status=="false")
            .concat(newTasks.filter((i) => i.status=="true"))
        );
        break;
      case "show":
        setTasks(
          newTasks
            .filter((item) => item.status=="true")
            .concat(newTasks.filter((i) => i.status=="false"))
        );
        break;
      case "1":
        setTasks(taskReplace.filter((item) => item.status=="true"));
        break;
      case "0":
        setTasks(taskReplace.filter((item) => item.status=="false"));
        break;
      case "2":
        setTasks(JSON.parse(localStorage.getItem("tasks")));
        break;
      default:
        throw new Error("error");
    }
  };
  const handleStatus = (id) => {
    const newTasks = tasks.map((item) => {
      if (item.id == id) {
        const temp = !(item.status=="true");
        item.status = temp.toString();
      }
      return item;
    });
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
    setTaskReplace(tasks);
  };

  const deleteTask = (id) => {
    const arr = tasks.filter((item) => item.id != id);
    setTasks(arr);
    localStorage.setItem("tasks", JSON.stringify(arr));
  };

  const handleSearch =(input)=>{
    setSearch(input)
    const newTasks = search ? taskReplace.filter(item=>item.name.toLowerCase().includes(input.toLowerCase())) : tasks;
    setTasks(newTasks)
  }
  
  const handleSearch2 =(input)=>{
    const newTasks = input!=null ? taskReplace.filter(item=>item.name.toLowerCase().includes(input.toLowerCase())):tasks;
    setTasks(newTasks)
  }

  const handleOpen = (type)=>{
    setType(type);
    type.type=="Th??m" ? setOpen(!open): setOpen(true);
  }

  const editTask =(task)=>{
    const newTasks = tasks.map((item)=>{
      if(item.id==task.id){
        item = task;
      }
      return item
    })
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTaskReplace(newTasks)
  }
  return (
    <div className="App">
      <div className="container">
        <header>
          <h2 className="text-center mt-3">Qu???n l?? c??ng vi???c</h2>
        </header>
        <hr></hr>
        <div className="row mt-2">
          {open?<Form
            handleOpen={() => setOpen(!open)}
            addTask={addTask}
            type={type}
            editTask={editTask}
          />:""}
          <div className="col">
            <button className="btn btn-primary" onClick={()=>handleOpen({item:"", type: "Th??m"})}>
              Th??m c??ng vi???c
            </button>
            <Search handleFilter={handleFilter} handleSearch={handleSearch2}/>
            <ListTask
              tasks={tasks}
              handleStatus={handleStatus}
              deleteTask={deleteTask}
              handleFilters={handleFilter}
              handleSearch={handleSearch}
              search={search}
              handleOpen={handleOpen}
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
