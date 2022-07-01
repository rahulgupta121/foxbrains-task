import React, {useState} from 'react'
function Basicform() {
  // const [persone, setpersone] = useState({firstName: "", lastName : "", age: ""});
  const [persone, setpersone] = useState();
  const [firstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()
  const [age, setage] = useState()

  const formControl = ()=>{
    alert("shgds")
  }

  return (
    <>
      <div>
        <h4>First Name<input type="input" placeholder=' First Name ' value={firstName} onChange={(e)=> setfirstName(e.target.value)}/></h4>
      
        <h4>Last Name<input type="input" placeholder=' Last Name ' value={lastName} onChange={(e)=> setlastName(e.target.value)}/></h4>
      
        <h4>Age<input type="input" placeholder='Age ' value={age} onChange={(e)=> setage(e.target.value)}/></h4>

        <button onClick={formControl}>Add me </button>
      </div>
    </>
  )
}

export default Basicform