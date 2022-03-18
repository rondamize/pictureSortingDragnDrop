import classes from './SortingArea.module.css';
import DroppableArea from "./DroppableArea(Is not used currently)/DroppableArea";
import DroppableButton from "./DroppableButton/DroppableButton";

const SortingArea = (props) => {
    return (
        <div className={classes.sortingArea}>
            <DroppableButton state={props.state} dispatch={props.dispatch} droppableid={'sortingArea0'} areaId={'0'}/>
            <DroppableButton state={props.state} dispatch={props.dispatch} droppableid={'sortingArea1'} areaId={'1'}/>
        </div>
    );
};

export default SortingArea;