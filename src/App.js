import './App.css';
import { UserInfo } from './components/UserInfo';
import { UserInfo2 } from './components/UserInfo2';


function App() {
  return (
     <>
      <h1>Start here</h1>
      <UserInfo/>
      <UserInfo2 userId={'1'}/>
      <UserInfo2 userId={'2'}/>
      <UserInfo2 userId={'3'}/>
     </>
  );
}

export default App;
