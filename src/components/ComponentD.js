

import React, {useContext} from 'react'
import {MyContext} from '../App';


function ComponentD() {

    const data = useContext(MyContext)

  return (
    <div>
        
        <h1>{data}</h1>
        
    </div>
  )
}

export default ComponentD