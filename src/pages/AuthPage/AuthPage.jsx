import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <img src="https://i.imgur.com/XULFC19.png"></img>
      <div className='formBox'>
        <h1>Look Good Do Good</h1>
        <br></br>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
        <h4 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'New? Sign Up' : 'Already a user? Sign In'}</h4>
      </div>
    </main>
  );
}

