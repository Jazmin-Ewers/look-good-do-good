import { useState } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
      <div>
        <h3 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'New? Sign Up' : 'Already a user? Sign In'}</h3>
      </div>
    </main>
  );
}

