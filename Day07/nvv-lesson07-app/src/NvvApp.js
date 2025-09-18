import React from 'react'
import NvvUseState from './components/NvvUseState'
import NvvListStudent from './components/NvvListStudent'

export default function NvvApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [nguyễn Văn Vũ]</h1>
        <hr/>

        <NvvUseState />

        <NvvListStudent />
    </div>
  )
}
