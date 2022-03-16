import './App.css';
import Images from "./components/Images/Images";
import {DragDropContext} from "react-beautiful-dnd";
import SearchArea from "./components/SearchArea/SearchArea";
import SortingArea from "./components/SortingArea/SortingArea";

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

        debugger;
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

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='app-wrapper'>
                <SearchArea state={props.store.state} dispatch={props.store.dispatch.bind(props.store)}
                            searchText={props.store.state.searchText}/>
                <Images state={props.store.state} dispatch={props.store.dispatch.bind(props.store)} />
                <SortingArea state={props.store.state} dispatch={props.store.dispatch.bind(props.store)} />
            </div>
        </DragDropContext>
  );
}

export default App;
