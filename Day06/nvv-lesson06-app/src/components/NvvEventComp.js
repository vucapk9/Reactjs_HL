import React from 'react'

export default function NvvEventComp() {

    const nvv_Func1 = ()=>{
        alert("Xin chào")
    }
    const nvv_Func2 = (param)=>{
        alert(param)
    }
    return (
        <div>
        <h1>Event - Component Function</h1>
            <button onClick={nvv_Func1}>Click Here</button>
            
            {/* gọi lần đầu tiên và duy nhất khi load */}
            {/* <button onClick={nvv_Func1()}>Click Here</button>ss */}

            {/* gọi hàm có tham số */}
            <button onClick={()=>nvv_Func2('Vu Nguyên')}>Click Here Param</button>

        </div>
    )
}
