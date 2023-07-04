import "./App.scss";
//import react,{useState}from 'React';
import React from 'react';

function App() {
  const [weight, setWeight]=React.useState(0);
  const [height, setHeight]=React.useState(0);
  const [message, setMessage]=React.useState("");
  const [bmi, setBmi]=React.useState("");

  let caleBmi =(e)=>{
     e.preventDefault();
    if(weight===0 || height===0)
    {
      alert("Please enter valid weight and height")
    }
    else{
      let bmi=(weight/(height*height)*703);
     setBmi(bmi);

     if(bmi<25){
      setMessage("you are Underweight");
      console.log("you are Underweight")
     }
     else if(bmi>=25 && bmi<30)
     {
      setMessage("you are helthey weight");
      console.log("you are helthey weight")
     }
     else{
      setMessage("you are over weight");
     }
    }
  }
  //logic
  let reload=()=>{
window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form >
          <div>
            <label>Weight (ibs)</label>
            <input 
            type="text" 
            value={weight}
             placeholder="enter the weight"
             onChange={(e)=>setWeight(e.target.value)}
              />
          </div>
          <div>
            <label>Height (in)</label>
            <input type="text"
             value={height}
              placeholder="enter the height" 
              onChange={(e)=>setHeight(e.target.value)}
              />
          </div>
          <div>
          <button className='btn' onClick={caleBmi} type="submit">Submit</button>
          <button className='btn btn-outline' onClick={reload}>Reload</button>
        </div>
        </form>
        <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
      </div>
    </div>
  );
}

export default App;
