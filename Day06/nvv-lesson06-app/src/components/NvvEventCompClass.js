import React, { Component } from 'react';

class NvvEventCompClass extends Component {

    nvv_Func1 = ()=>{
        alert("Hàm không có tham số")
    }

    nvv_Func2 = (param)=>{
        alert("Hàm có tham số:\n"+ param)
    }

    render() {
        return (
            <div>
                <h2>Event in class component</h2>
                <button onClick={this.nvv_Func1}>Click</button>
                <button onClick={()=>this.nvv_Func2("Vu Van Nguyen")}>Click Param</button>
            </div>
        );
    }
}

export default NvvEventCompClass;