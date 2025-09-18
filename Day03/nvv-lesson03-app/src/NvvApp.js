import React, { Component } from 'react';
import NvvFuncComp from './components/NvvFuncComp';
import NvvClassComp from './components/NvvClassComp';
import NvvrRenderList from './components/NvvrRenderList';
import NvvListStudent from './components/NvvListStudent';

class NvvApp extends Component {
  constructor(props){
    super(props);
    this.state = {
            students: [
                { id: 1, name: "Nguyễn Văn A", age: 20, gender: "Nam", isActive: true },
                { id: 2, name: "Trần Thị B", age: 21, gender: "Nữ", isActive: true },
                { id: 3, name: "Lê Văn C", age: 22, gender: "Nam", isActive: false },
                { id: 4, name: "Phạm Thị D", age: 19, gender: "Nữ", isActive: true },
                { id: 5, name: "Hoàng Văn E", age: 23, gender: "Nam", isActive: false }
            ],
        }
  }
  render() {
    return (
      <div className='container border'>
        <h1>Nguyễn Văn Vũ</h1>
        <h2>Ôn tập: conponent / props / state / Render ListKey</h2>
        <hr/>
        <NvvFuncComp />
        <hr/>
        <NvvFuncComp fullName="Nguyễn Vũ" address="FitNTU" email="vanvu@gmail.com"></NvvFuncComp>

        <NvvClassComp />
        <NvvClassComp name="Vu Vu" age="21" phone = "0812056108" email="vanvu@gmaill.com"></NvvClassComp>

        <hr/>
        <NvvrRenderList />
        <hr/>
        <NvvListStudent students = {this.state.students} />
      </div>
    );
  }
}

export default NvvApp;