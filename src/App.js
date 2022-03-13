import logo from './logo.svg';
import './App.css';
import Images from "./components/Images/Images";

function App(props) {
  return (

        <div className='app-wrapper'>
            <Images state={props.store.state.mainPage}/>
        </div>
  );
}

export default App;
