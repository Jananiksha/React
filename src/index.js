import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';


/* function functioncomponent(){
  return (
    <div>
      <h1>
        this is janani
      </h1>
      <my component/>
    </div>
  );
  } */

  <div>
    <h1>WELCOME TO MY WEBSITE</h1>
  </div>


  class StateManagement extends React.Component{
    constructor(){
      super()
      this.state={year:"Catch me on:"}
    }
  
  first = () => this.setState({year:"9876543210"})
  second = () => this.setState({year:"jananiksha664@gmail.com"})
  three = () => this.setState({year:"jananiksha-6387563"})
  four = () => this.setState({year:"_janani_"})
  render(){
    return (
      <div>
        <h1>{this.state.year}</h1>
        <button type="button" onClick={this.first}>Contact No</button>
        <button type="button" onClick={this.second}>Mail Id</button>
        <button type="button" onClick={this.three}>LinkedIn</button>
        <button type="button" onClick={this.four}>Instagram</button>
      </div>
    )
  }
  }
  
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <StateManagement />
      <App />
    </React.StrictMode>
  );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();