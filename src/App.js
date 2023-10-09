import './App.css';
import ClickCounter from './components/ClickCounter';
import { Separater } from './components/Separater';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className="App">
      <Separater data={new Date().toString()} />
      <Separater data="Click Counter"/>
      <ClickCounter/>
      <Separater data="This is Form Number 1"/>
      <LoginForm/>
    </div>
  );
}

export default App;
