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

        let start = state.columns[source.droppableId];
        let end = state.columns[destination.droppableId];

        let newImagesAreaArray = Array.from(start.ImgIds);
        newImagesAreaArray.splice(source.index, 1);

        let newDroppableAreaArray = Array.from(end.ImgIds);
        newDroppableAreaArray.push(draggableId);

        //debugger;

        const newStartColumn = {
            ...start,
            ImgIds: newImagesAreaArray
        };

        const newEndColumn = {
            ...end,
            ImgIds: newDroppableAreaArray
        };

        state.columns[source.droppableId] = newStartColumn;
        state.columns[destination.droppableId] = newEndColumn;
        //debugger;
        props.dispatch({type:'rerender'});
    };

    let onDragStart = start => {
        //console.log("START: " + start);
        //debugger;
    };

  return (
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <div className='app-wrapper'>
                <Images state={props.store.state} dispatch={props.store.dispatch.bind(props.store)} />
                <DroppableArea state={props.store.state} dispatch={props.store.dispatch.bind(props.store)} />
            </div>
        </DragDropContext>
  );
}

export default App;
