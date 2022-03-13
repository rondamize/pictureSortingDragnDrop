import classes from './Images.module.css';
import ImageItem from "./ImageItem/ImageItem";
import {DownloadImages} from "../../redux/Store";

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

    let imagesElements = props.state.images.map(i => <ImageItem source={i.source} />);

    let source = 'https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'
    return (
        <div className={classes.container}>
            <div className={classes.images}>
                <div className={classes.imagesItemsColumn}>
                    {imagesElements}
                </div>
                <div className={classes.imagesItemsColumn}>
                    {imagesElements}
                </div>
            </div>
            <button onClick={testImageDownload}>Download Images</button>
        </div>
    );
};

export default Images;