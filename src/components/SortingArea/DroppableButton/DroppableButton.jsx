import classes from './DroppableButton.module.css';
import {Droppable} from "react-beautiful-dnd";
import SortedImageItem from "./SortedImages/SortedImageItem";

const DroppableButton = (props) => {

    let idImagesNeedToDisplay = props.state.columns[props.droppableid].ImgIds;
    let allImages = props.state.images['keyWord-' + props.areaId];
    let imagesElements = idImagesNeedToDisplay.map(elementId => {
        let image = allImages[elementId];
        return <SortedImageItem image={image} />
    });


    let changeSortedPhotosVisibility = () => {
        let displayId = 'displaySortedPhotos' + props.areaId;
        props.state.displaySortedPhotos[displayId] = !props.state.displaySortedPhotos[displayId];
        props.dispatch({type:'rerender'});
    }

    return (
        <div>
            <div className={classes.droppableButtonArea}>
                <Droppable droppableId={props.droppableid} direction='horizontal'>
                    {provided => (
                            <button className={classes.droppableButton} onClick={changeSortedPhotosVisibility}
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}>
                                {props.state.columns[props.droppableid].tag}
                            </button>
                    )}
                </Droppable>
            </div>
            <div className={props.state.displaySortedPhotos['displaySortedPhotos' + props.areaId] ? classes.sortedImagesShown : classes.sortedImages}>
                {imagesElements}
            </div>
        </div>

    );
};

export default DroppableButton;