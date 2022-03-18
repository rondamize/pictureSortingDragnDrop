import './App.css';
import Images from "./components/Images/Images";
import {DragDropContext} from "react-beautiful-dnd";
import SearchArea from "./components/SearchArea/SearchArea";
import SortingArea from "./components/SortingArea/SortingArea";

function App(props) {
    let state = props.store.state;
    let onDragStart = start => {
        state.needToShuffleImages = false;
    };

    let onDragEnd = result => {
        const {destination, source, draggableId} = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId) {
            return;
        }

        let allImages = {...state.images['keyWord-0'], ...state.images['keyWord-1']};
        let start = state.columns[source.droppableId];
        let end = state.columns[destination.droppableId];

        if (end.tag !== allImages[draggableId].tag) {
            return;
        }

        let newImagesAreaArray = Array.from(start.ImgIds);
        newImagesAreaArray.splice(source.index, 1);

        let newDroppableAreaArray = Array.from(end.ImgIds);
        newDroppableAreaArray.push(draggableId);

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

        if (state.columns[source.droppableId].ImgIds.length === 0) {
            state.userMessage = "Congratulations! U have successfully sorted all images.";
        }

        props.dispatch({type:'rerender'});
    };

    return (
        <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <div className='app-wrapper'>
                <SearchArea state={props.store.state} dispatch={props.store.dispatch.bind(props.store)}
                            searchText={props.store.state.searchText} userMessage={props.store.state.userMessage}/>
                <Images state={props.store.state} dispatch={props.store.dispatch.bind(props.store)} />
                <SortingArea state={props.store.state} dispatch={props.store.dispatch.bind(props.store)} />
            </div>
        </DragDropContext>
  );
}

export default App;
