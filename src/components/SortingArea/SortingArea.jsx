import classes from './SortingArea.module.css';
import DroppableArea from "./DroppableArea(Is not used currently)/DroppableArea";
import DroppableButton from "./DroppableButton/DroppableButton";

const SortingArea = (props) => {
    return (
        <div className={classes.sortingArea}>
            <DroppableButton state={props.state} dispatch={props.dispatch} droppableid={'sortingArea0'}/>
            <DroppableButton state={props.state} dispatch={props.dispatch} droppableid={'sortingArea1'}/>
            {/*<DroppableArea(Is not used currently) state={props.state} dispatch={props.dispatch} droppableid={'sortingArea0'}/>*/}
            {/*<DroppableArea(Is not used currently) state={props.state} dispatch={props.dispatch} droppableid={'sortingArea1'}/>*/}
        </div>
    );
};

export default SortingArea;