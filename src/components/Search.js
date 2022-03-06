import React, { useState } from "react";

export default function Search({handleFilter, handleSearch}) {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="row my-3">
      <div className="col-12 col-md-6">
        <div className="input-group">
          <input type="text" className="form-control" name="name" value={inputSearch} onChange={(e)=>setInputSearch(e.target.value)}/>
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={()=>handleSearch(inputSearch)}>
              Tìm
            </button>
          </span>
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="filter"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Sắp xếp
          </button>
          <ul className="dropdown-menu" aria-labelledby="filter">
            <li>
              <a className="btn dropdown-item" onClick={()=>handleFilter("increase")}>
                Tên từ A - Z
              </a>
            </li>
            <li>
              <a className="btn dropdown-item"  onClick={()=>handleFilter("decrease")}>
                Tên từ Z - A
              </a>
            </li>
            <hr className="m-0"></hr>
            <li>
              <a className="btn dropdown-item"  onClick={()=>handleFilter("hide")}>
                Trạng Thái Ẩn
              </a>
            </li>
            <li>
              <a className="btn dropdown-item"  onClick={()=>handleFilter("show")}>
                Trạng Thái Kích Hoạt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
<div className="row my-3">
  <div className="col-12 col-md-6">
    <div className="input-group">
      <input type="text" className="form-control" name="name" />
      <span className="input-group-btn">
        <button className="btn btn-primary" type="button" aria-label="">
          Tìm
        </button>
      </span>
    </div>
  </div>
  <div className="col-12 col-md-6">
    <div class="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="filter"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sắp xếp
      </button>
      <ul className="dropdown-menu" aria-labelledby="filter">
        <li>
          <a className="btn dropdown-item" href="#">
            Tên từ A - Z
          </a>
        </li>
        <li>
          <a className="btn dropdown-item" href="#">
            Tên từ Z - A
          </a>
        </li>
        <hr className="m-0"></hr>
        <li>
          <a className="btn dropdown-item" href="#">
            Trạng Thái Ẩn
          </a>
        </li>
        <li>
          <a className="btn dropdown-item" href="#">
            Trạng Thái Kích Hoạt
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>;
