import classes from './Images.module.css';
import ImageItem from "./ImageItem/ImageItem";
import {DownloadImages} from "../../redux/Store";
import {Droppable} from "react-beautiful-dnd";

const Images = (props) => {
    let testImageDownload = async () => {
        let photos = await DownloadImages();
        //debugger;
        console.log("PHOTOS: " + photos);

        for (let i = 0; i < photos.length; i++) {
            let route = 'https://live.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_'
                + photos[i].secret + '.jpg';
            props.state.images[i].source = route;
        }
        console.log(props.state.images);
        props.dispatch({type:'rerender'});
    };

    let imagesElements = props.state.images.map((i, index) => <ImageItem image={i} index={index}/>);

    return (
            <div className={classes.container}>
                <div className={classes.images}>
                    <Droppable droppableId='imagesArea'>
                        {provided => (
                                <div className={classes.imagesItemsColumn} ref={provided.innerRef}
                                     {...provided.droppableProps}>
                                    {/*<p>Hello</p>*/}
                                     {imagesElements}
                                     {provided.placeholder}
                                </div>) }
                    </Droppable>
                    <div className={classes.imagesItemsColumn}>
                    </div>
                </div>
                <button onClick={testImageDownload}>Download Images</button>
            </div>
    )};


export default Images;