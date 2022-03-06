import React from "react";
import Task from "./Task";

export default function ListTask({
  tasks,
  handleStatus,
  deleteTask,
  handleFilters,
  handleSearch,
  search,
  handleOpen,
}) {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Trạng Thái</th>
          <th>Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Tìm kiếm"
              value={search}
            />
          </td>
          <td>
            <select
              className="form-select"
              name=""
              defaultValue={2}
              onChange={(e) => handleFilters(e.target.value)}
            >
              <option value={2}>Tất cả</option>
              <option value={0}>Ẩn</option>
              <option value={1}>Kích Hoạt</option>
            </select>
          </td>
          <td></td>
        </tr>

        {tasks ? tasks.map((item, index) => (
          <Task
            key={index}
            item={item}
            index={index}
            handleStatus={handleStatus}
            deleteTask={deleteTask}
            handleOpen={handleOpen}
          />
        )): ""}
      </tbody>
    </table>
  );
}
