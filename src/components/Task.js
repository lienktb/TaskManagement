import React from "react";

export default function Task({ index, item, handleStatus, deleteTask, handleOpen }) {
  return (
    <tr>
      <td>{index+1}</td>
      <td>{item.name}</td>
      <td style={{width: "10rem"}} className="text-center">
        {item.status != "false" && item.status!=false? (
          <span
          className="btn bg-danger bg-opacity-50 p-0 fw-bold text-white px-1"
          style={{ fontSize: "14px" }}
          onClick={()=>handleStatus(item.id)}
        >
          Kích Hoạt
        </span>
        ) : (
          <span
            className="btn bg-primary bg-opacity-50 p-0 fw-bold text-white px-1"
            style={{ fontSize: "14px" }}
            onClick={()=>handleStatus(item.id)}
          >
            Ẩn
          </span>
        )}
      </td>
      <td className="d-flex justify-content-center">
        <button className="btn btn-warning mx-1" onClick={()=>handleOpen({item:item, type:"Sửa"})}>Sửa</button>
        <button className="btn btn-danger mx-1" onClick={()=>deleteTask(item.id)}>Xóa</button>
      </td>
    </tr>
  );
}
