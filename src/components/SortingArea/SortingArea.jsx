import classes from './SortingArea.module.css';
import DroppableArea from "./DroppableArea/DroppableArea";

const SortingArea = (props) => {
    return (
        <div className={classes.sortingArea}>
            <DroppableArea state={props.state} dispatch={props.dispatch} droppableid={'sortingArea0'}/>
            <DroppableArea state={props.state} dispatch={props.dispatch} droppableid={'sortingArea1'}/>
        </div>
    );
};

export default SortingArea;