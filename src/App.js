import './App.css';
import { UserInfo } from './components/UserInfo';
import { includeUser } from './components/include-user';
import { logProps } from './components/log-props';

function App() {
  const UserInfoWrapper = logProps(UserInfo);
  const UserInfoWrapper2 = includeUser(UserInfo,1);
  return (
    <>
  <UserInfoWrapper test='test1' a={1}/>
  <UserInfoWrapper2 test='test1' a='11'/>
    </>
  );
}

export default App;
