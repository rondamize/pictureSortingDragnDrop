import classes from '.././Images.module.css'
import {Draggable} from "react-beautiful-dnd";

const ImageItem = (props) => {
    //debugger;
    return (
        <Draggable draggableId={props.image.id} index={props.index}>
            {provided => (
                    <img className={classes.imageItem}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                         ref={provided.innerRef}
                         src={props.image.source} />
            )}
        </Draggable>
    );
};

export default ImageItem;
