
import './App.css';
import Button from './button';
import Inputtext from './textbox';
import Login from './image/animation.gif'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
        <p className="Heading">Log in</p>
        <img src={Login} alt="loging" width="250" height="250"></img>        
        <div><Inputtext title="Username"></Inputtext></div>
        <div><Inputtext title="Email"></Inputtext></div>
        <div><Inputtext title="Password"></Inputtext></div>
        <div><Inputtext title="Confirm Password"></Inputtext></div>
        <div style={{flexDirection:'row',flex:1}}><Button title="Submit"></Button>
        <Button title="Signup"></Button></div>
        <p style={{fontSize:10,marginTop:-4,color:'#111'}}>Don't have an account?<br></br>SignUp now</p>
        
        </div>
      
      </header>
    </div>
  );
}

export default App;
