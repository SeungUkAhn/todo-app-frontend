import './App.css';
import {Component} from "react";

function App() {
  return (
    <div className="App">
      My Todo Application Updated
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
        <FourthComponent></FourthComponent>
    </div>
  );
}

function FirstComponent(){
    return (
        <div className="FirstComponent">First Component</div>
    );
}

function SecondComponent(){
    return (
        <div className="SecondComponent">Second Component</div>
    );
}

class ThirdComponent extends Component{
    render(){
        return (
            <div className="ThirdComponent">Third Component</div>
        );
    }
}
class FourthComponent extends Component{
    render(){
        return (
            <div className="FourthComponent">Fourth Component</div>
        );
    }
}

export default App;
