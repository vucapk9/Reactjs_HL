import React, { useState } from 'react'
import axios  from 'axios';

export default function NvvUserAdd() {
    const nvv_api = "https://68d4979d214be68f8c69b0c6.mockapi.io/K22CNT2_NguyenVanVu_2210900081/users";
     const [form, setForm] = useState({
        fullname: "",
        username: "",
        password: "",
        status: "",
    });

    const handleChange = (e)=>{
         setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios
        .post(nvv_api, form)
        .then((res) => {
            alert("Thêm user thành công!");
            console.log("User vừa thêm:", res.data);
        })
        .catch((err) => {
            console.error("Lỗi khi thêm user:", err);
        });
    }
    
  return (
    <div>
        <h2>Thêm mới user</h2>
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
            <button type="submit">Thêm User</button>
            </form>
    </div>
  )
}
