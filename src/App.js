import logo from './logo.svg';
import './App.css';
import Images from "./components/Images/Images";
import DroppableArea from "./components/DroppableArea/DroppableArea";
import {DragDropContext} from "react-beautiful-dnd";

function App(props) {
    let state = props.store.state;
    let onDragEnd = result => {
        const {destination, source, draggableId} = result;

        //debugger;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            return;
        }
    };

    let onDragStart = start => {
        console.log(start);
    };

  return (
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <div className='app-wrapper'>
                <Images state={props.store.state} dispatch={props.store.dispatch.bind(props.store)}/>
                <DroppableArea />
            </div>
        </DragDropContext>
  );
}

export default App;
