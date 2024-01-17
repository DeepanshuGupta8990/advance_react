import axios from 'axios';
import './App.css';
import { BookInfo } from './components/BookInfo';
import CurrentUser_loader from './components/CurrentUser_loader';
import Data_Source from './components/Data_source';
import Resource_loader from './components/Resource_loader';
import { UserInfo } from './components/UserInfo';
import User_loader from './components/User_loader';

function App() {
  return (
    <>
    <h2>Current user</h2>
    <CurrentUser_loader>
      <UserInfo/>
    </CurrentUser_loader>
    
    <hr />

    <h2>Users by id</h2>
   {
    [1,2,3].map((element)=>{
      return (
        <User_loader userId={`${element}`}>
        <UserInfo/>
       </User_loader>
      )
    })
   }

   <hr />

   <h2>Current user using resource loader</h2>
   <Resource_loader resource_url={'http://localhost:9090/current-user'} resource_name={'user'}>
       <UserInfo/>
   </Resource_loader>

   <hr />

   <h2>Books by id</h2>
   {
    [1,2,3].map((element)=>{
      return(
        <Resource_loader resource_url={`http://localhost:9090/books/${element}`} resource_name={'book'}>
        <BookInfo/>
        </Resource_loader>
      )
    })
   }

    <hr />
    <h2>Current user using data source</h2>
   <Data_Source getData={()=>{return axios.get("http://localhost:9090/current-user")}} resource_name={'user'}>
       <UserInfo/>
   </Data_Source>
    </>
  );
}

export default App;
