import React from 'react'
import NvvUseState from './components/NvvUseState'
import NvvListStudent from './components/NvvListStudent'
import NvvUseEffectDemo from './components/NvvUseEffectDemo'
import NvvExampleContext from './components/NvvExampleContext'

export default function NvvApp() {
  return (
    <div className='container border'>
        <h1>React Hook - Demo [Nguyễn Văn Vũ]</h1>
        <hr/>

        {/* <NvvUseState />

        <NvvListStudent />

        <NvvUseEffectDemo /> */}

        <NvvExampleContext />
    </div>
  )
}