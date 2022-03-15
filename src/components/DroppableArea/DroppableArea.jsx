import classes from './DroppableArea.module.css';
import {Droppable} from "react-beautiful-dnd";
import ImageItem from "../Images/ImageItem/ImageItem";

const DroppableArea = (props) => {
    let idImagesNeedToDisplay = props.state.columns['sortingArea'].ImgIds;
    let allImages = props.state.images;
    let index = 0;
    let imagesElements = idImagesNeedToDisplay.map(elementId => {
        let image = allImages[elementId];
        return <ImageItem key={image.id} image={image} index={index++}/>
    });

    return (
        <Droppable droppableId='sortingArea' direction='horizontal'>
            {provided => (
                <div className={classes.droppableArea} ref={provided.innerRef}
                     {...provided.droppableProps}>
                    {imagesElements}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>


    );
};

export default DroppableArea;