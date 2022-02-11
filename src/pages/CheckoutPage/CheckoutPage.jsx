import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser, cart }) {
  return (
    <main>
      <SignUpForm setUser={setUser} />
      <LoginForm setUser={setUser} />
    </main>
  )
}
