import React, { useContext, useEffect, useState } from 'react'
import NvvExamInfo from './NvvExamInfo'

import { ThemeContext } from './NvvExampleContext';

export default function NvvExamContext() {
    let theme = useContext(ThemeContext);
   
  return (
    <div>
        <p className={theme}>
            Áp dụng:
            <br/>
            <span className={theme}>
                useContext là một React Hook cho phép truy cập dữ liệu từ Context mà không cần phải truyền props qua nhiều cấp (tránh tình trạng props drilling).
            </span>
        </p>
        <NvvExamInfo />
    </div>
  )
}