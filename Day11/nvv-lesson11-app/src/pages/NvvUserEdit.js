import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { useNavigate, useParams } from "react-router-dom";

export default function NvvUserEdit() {
    const navigate = useNavigate();
    const nvv_api = "https://68d4979d214be68f8c69b0c6.mockapi.io/K22CNT2_NguyenVanVu_2210900081/users/";

    const { id } = useParams(); 
    
    const [form, setForm] = useState({
        fullname: "",
        username: "",
        password: "",
        status: "",
    });

    useEffect(()=>{
         axios
      .get(nvv_api+`${id}`)
      .then((res) => {
        // Ở thực tế, API backend của bạn sẽ trả về đủ dữ liệu
        setForm({
          fullname: res.data.fullname || "",
          username: res.data.username || "",
          password: res.data.password || "",
          status: res.data.status || 0,
        });
      })
      .catch((err) => {
        console.error("Lỗi khi load user:", err);
      });
    },[id])

    const handleChange = (e)=>{
         setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios
        .put(nvv_api + `${id}`, form)
        .then((res) => {
            alert("Cập nhật user thành công!");
            console.log("User vừa thêm:", res.data);
            navigate("/users"); // Quay lại danh sách users
        })
        .catch((err) => {
            console.error("Lỗi khi thêm user:", err);
        });
    }
    
  return (
    <div>
        <h2>Sửa mới user</h2>
        <form onSubmit={handleSubmit}>
            <div>
                Fullname:
                <input
                name="fullname"
                value={form.fullname}
                onChange={handleChange}
                />
            </div>
            <div>
                UserName:
                <input
                name="username"
                value={form.username}
                onChange={handleChange}
                />
            </div>
            <div>
                Password:
                <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                />
            </div>
            <div>
                Status:
                <input
                name="status"
                value={form.status}
                onChange={handleChange}
                />
            </div>
            <button type="submit">Cập nhật User</button>
            </form>
    </div>
  )
}
