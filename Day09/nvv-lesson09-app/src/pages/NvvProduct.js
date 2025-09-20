import React from 'react'
import { Link,Outlet } from 'react-router-dom'

export default function NvvProduct() {
    const products=[
        {id:1, name:"samsung a10"},
         {id:2, name:"iphone 17"},
         {id:3, name:"vivo a10"},
    ]
    return(
        <div>
            <h2>Danh sách sản phẩm</h2>
            <hr/>
            <ul>
                {products.map((p)=>(
                    <li>
                        <Link to={'/products/${p.id}'}>{p.name}</Link>
                    </li>
                ))
            }
            <hr/>
            <Outlet/>
            </ul>
        </div>
    )
}