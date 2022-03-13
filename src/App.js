import logo from './logo.svg';
import './App.css';
import Images from "./components/Images/Images";

function App(props) {
  return (

        <div className='app-wrapper'>
            <Images state={props.store.state.mainPage} dispatch={props.store.dispatch.bind(props.store)}/>
        </div>
  );
}

export default App;
