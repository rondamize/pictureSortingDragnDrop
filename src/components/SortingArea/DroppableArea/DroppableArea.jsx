import classes from './DroppableArea.module.css';
import {Droppable} from "react-beautiful-dnd";
import ImageItem from "../../Images/ImageItem/ImageItem";

const DroppableArea = (props) => {
    // let idImagesNeedToDisplay = props.state.columns[props.droppableid].ImgIds;
    // let allImages = props.state.images;
    // let index = 0;
    // let imagesElements = idImagesNeedToDisplay.map(elementId => {
    //     let image = allImages[elementId];
    //     debugger;
    //     return <ImageItem key={image.id} image={image} index={index++}/>
    // });
    let idImagesNeedToDisplay = props.state.columns[props.droppableid].ImgIds;
    //debugger;
    let allImages = {...props.state.images['keyWord-0'], ...props.state.images['keyWord-1']};
    let index = 0;
    let imagesElements = idImagesNeedToDisplay.map(elementId => {
        //debugger;
        let image = allImages[elementId];
        return <ImageItem key={image.id} image={image} index={index++}/>
    });

    return (
        <div>
            <h3>{props.state.columns[props.droppableid].tag}</h3>
            <Droppable droppableId={props.droppableid} direction='horizontal'>
                {provided => (
                    <div className={classes.droppableArea} ref={provided.innerRef}
                         {...provided.droppableProps}>
                        {imagesElements}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>



    );
};

export default DroppableArea;