import classes from '../Images.module.css'
import {Draggable} from "react-beautiful-dnd";

const ImageItem = (props) => {
    //debugger;
    return (
        <Draggable draggableId={props.image.id} index={props.index}>
            {provided => (
                // <div className={classes.imageItem}
                //     {...provided.draggableProps}
                //     {...provided.dragHandleProps}
                //     ref={provided.innerRef}
                // >
                    <img className={classes.imageItem}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                         ref={provided.innerRef}
                         src={props.image.source} />
                // </div>
            )}
        </Draggable>
    );
};

export default ImageItem;

//src='https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'