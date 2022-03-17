import classes from './Images.module.css';
import ImageItem from "./ImageItem/ImageItem"
import {Droppable} from "react-beautiful-dnd";

const Images = (props) => {
    let idImagesNeedToDisplay = props.state.columns['imagesArea'].ImgIds;
    //debugger;
    let allImages = {...props.state.images['keyWord-0'], ...props.state.images['keyWord-1']};
    let index = 0;
    let imagesElements = idImagesNeedToDisplay.map(elementId => {
        //debugger;
        let image = allImages[elementId];
        return <ImageItem key={image.id} image={image} index={index++}/>
    });

    return (
        <div className={classes.container}>
            <div className={classes.images}>
                <Droppable droppableId='imagesArea' direction='horizontal'>
                    {provided => (
                        <div className={classes.imagesItemsColumn} ref={provided.innerRef}
                             {...provided.droppableProps}>
                            {imagesElements}
                        </div>) }
                </Droppable>
            </div>
        </div>
    )};


export default Images;