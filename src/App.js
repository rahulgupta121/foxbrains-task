import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter"
import Forms from './components/Controlled-form'
import data from './data.js'
function App() {


  // const data 
  const datatableData = [
    ["Joe James", "Example Inc.", "Yonkers", "NY"],
    ["John Walsh", "Example Inc.", "Hartford", "CT"],
    ["Bob Herm", "Example Inc.", "Tampa", "FL"],
    ["James Houston", "Example Inc.", "Dallas", "TX"],
    ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
    ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
    ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
    ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
    ["Meral Elias", "Example Inc.", "Hartford", "CT"],
    ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
    ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
    ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
    ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
    ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
    ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
    ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
    ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
  ];
  console.log(data)


  const addMeClick = () =>{
    alert(12+2)
  }

  const removeMeClick = (id) =>{
    alert(12+2)
  }
  return (
    <div className="App">
     <div className="mainCard"> 
     {/* <Counter />
     <Forms /> */}

{data && data.map((item, key)=>{
return (
  <>
{/* <h2>{item.name}</h2> */}

  <div className="card" >
<img src={item.pic} alt="Avatar" style={{width: "100%" }}/>
<div className="container">
  <h4><b>{item.name}</b></h4>
  <h4><b>{item.price}</b></h4> 
  <div className="menuButton">
    <button onClick={()=> addMeClick()} className='addButton'>+</button> 
  <button onClick={()=> removeMeClick()} className='removeButton'>-</button> 
  </div>
  
</div>
</div>

  </>
)

})}
     </div>

    </div>
  );
}

export default App;
