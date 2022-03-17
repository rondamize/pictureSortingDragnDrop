import classes from './DroppableButton.module.css';
import {Droppable} from "react-beautiful-dnd";
import SortedImageItem from "./SortedImages/SortedImageItem";

const DroppableButton = (props) => {

    let idImagesNeedToDisplay = props.state.columns[props.droppableid].ImgIds;
    let allImages = {...props.state.images['keyWord-0'], ...props.state.images['keyWord-1']};
    let imagesElements = idImagesNeedToDisplay.map(elementId => {
        //debugger;
        let image = allImages[elementId];
        return <SortedImageItem image={image} />
    });

    let changeSortedPhotosVisibility = () => {
        props.state.displaySortedPhotos = !props.state.displaySortedPhotos;
        props.dispatch({type:'rerender'});
    }

    return (
        <div>
            <Droppable droppableId={props.droppableid} direction='horizontal'>
                {provided => (
                    <div className={classes.droppableButtonArea} ref={provided.innerRef}
                         {...provided.droppableProps}>
                        <button className={classes.droppableButton} onClick={changeSortedPhotosVisibility}>
                            {props.state.columns[props.droppableid].tag}
                        </button>
                    </div>
                )}
            </Droppable>
            <div className={props.state.displaySortedPhotos ? classes.sortedImagesShown : classes.sortedImages}>
                {imagesElements}
            </div>
        </div>

    );
};

export default DroppableButton;