import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './conts/Sign-Up/SignUp';
import LogIn from './conts/Log-in/LogIn';
// import Form from './conts/Form/Form';

function App() {
    return (
        <BrowserRouter>
            <div className='App'> 
                <Routes>
                    <Route path = '/signUp' element = {<SignUp/>}/>
                    <Route path = '/logIn' element = {<LogIn/>}/>
                    {/* <Route path = '/fillForm' element =  {<Form/>}/> */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
