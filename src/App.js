import './App.css';
import { SplitScreen } from './Split_screen';

const LeftSideComp = ({title})=>{
  return(
    <h2 style={{background:'red'}}>{title}</h2>
  )
}

const RightSideComp = ({title})=>{
  return(
    <h2 style={{background:'blue'}}>{title}</h2>
  )
}

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftSideComp title='Left side component'/>
      <RightSideComp title='Right side component'/>
    </SplitScreen>
  );
}

export default App;
