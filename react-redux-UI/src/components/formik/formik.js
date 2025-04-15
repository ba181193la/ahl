import React, { useState } from 'react'
import Advanced from './advanced'
import Basic from './basic'
// import "./formik.css";

function FormikComponent() {
    const [view,setView]=useState('basic')
  return (
    <div>
        <nav>
            <h3
            onClick={()=>setView('basic')}
            style={{color:view==="basic"?"#fff":"" ,cursor: "pointer",
            }}

            >Basic</h3>
            <h3
             onClick={()=>setView('advanced')}
             style={{color:view==="advanced"?"#fff":"",cursor: "pointer",}}
            >advanced</h3>

        </nav>
        {view==="basic"?<Basic />:<Advanced />}
    </div>

  )
}

export default FormikComponent