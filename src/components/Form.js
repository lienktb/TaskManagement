import React, { useEffect, useState } from "react";

export default function Form({ handleOpen, addTask, editTask,  type}) {
  const [task, setTask] = useState({id:null, name:"", status: "false"});
  useEffect(()=>{
    // setTask(...type.item)
    if(type.item!=""){
      const item = type.item;
      setTask(item)
    }
  },[type])
  // console.log(task)
  const handleChange = (e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    setTask({...task, [name]: value});
  }
  // console.log(task)
  const handleSubmit = ()=>{
    if(type.type=="Sửa"){
      editTask(task);
    }else{
      addTask(task);
    }
  }
  
  return (  
    
      <div className="col-12 col-md-4">
        <div className="card">
      <p className="card-text p-2 bg-danger bg-opacity-10 text-danger">
        {type.type=="Thêm" ? "Thêm Công Việc": "Sửa công việc"}
        <button className="btn text-white float-end fw-bold" onClick={handleOpen}>x</button>
      </p>

      <form className="px-3">
        <div className="form-group">
          <label className="fw-bold">
            Tên:
          </label>
          <div>
            <input type="text" className="form-control" name="name" onChange={handleChange} value={task.name}/>
          </div>
        </div>
        <div className="form-group mt-2">
          <label className="fw-bold">
            Trạng thái:
          </label>
          {/* {type.item.status ? setTask({...task, status: type.item.status}): ""} */}
          <select className="form-select" name="status" value={task.status} onChange={handleChange}>
            <option value={false}>Ẩn</option> 
            <option value={true}>Kích Hoạt</option>
          </select>
        </div>

      </form>
        <div className="form-group my-3 mx-auto ">
          <button type="submit" className="btn btn-warning text-white" onClick={()=>handleSubmit()}>
            Lưu lại
          </button>
          <button type="submit" className="btn btn-danger text-white ms-2" onClick={handleOpen}>
            Hủy bỏ
          </button>
        </div>
    </div>
   </div>
  );
}
