import React from 'react'
import Register from './components/Register1'
import View from './components/view'
import Delete from './components/Delete'
import Update from './components/Update'
const App = () =>{
  return(
    <div>
      <h1 style={{backgroundColor:'purple',alignItems:'center',textAlign:'center',color:'white'}}>User Registration System</h1>
      <Register/>
      <View/>
      <Delete/>
      <Update/>
    </div>
  )
}

export default App