import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
// import App2 from './App2';
// import Hello from './Hello';
// import HelloClass from './HelloClass';
// import FunctionClick from './FunctionClick';
import Greetings from './Greetings';
import Welcome from './Welcome';
import reportWebVitals from './reportWebVitals';
import Propone from './Propone';
import PropTwo from './Proptwo';
import Propthree from './Propthree';
import Propfour from './Propfour';
import Propfive from './Propfive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App2/>
    <Welcome/>
    <Welcome/>
    <Hello/>
    <HelloClass/>
    <FunctionClick/> */}
    {/* <Greetings name ="chinmay" course="react" language = "marathi"/> 
    <Greetings name ="sarika" course="pansare" language = "marathi"/>
    <Greetings name ="ninad" course="dani" language = "marathi"/> */}
      <Propone name ="chinmay"/>
      <Propone name = "sarika"/>
      <Propone name = "ram"/>
      <PropTwo title = "minskole" subtitle = "react"/>
      <PropTwo title = "minskole"/>
      <Propthree label='Sumbit'/>
      <Propthree/>
      <Propfour label="Email"  type="email" placeholder="you@example.com" required/>
      <Propfour label="Password" type = "password" minLength="6"/>
      <Propfive>
          <h3>Welcome to minskole</h3>
          <p>This is react class</p>
      </Propfive>
      <Propfive>
          <h3>Welcome to Minskole 2</h3>
          <p>This is react class para 2</p>
      </Propfive>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
