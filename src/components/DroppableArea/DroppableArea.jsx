import classes from './DroppableArea.module.css';
import {Droppable} from "react-beautiful-dnd";

const DroppableArea = (props) => {
    return (
        <Droppable droppableId='sortingArea'>
            {provided => (
                <div className={classes.droppableArea} ref={provided.innerRef}
                     {...provided.droppableProps}>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>


    );
};

export default DroppableArea;