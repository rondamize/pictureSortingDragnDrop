import classes from './SearchArea.module.css';
import {DownloadImages} from "../../redux/Store";

const SearchArea = (props) => {

    let testImageDownload = async () => {
        console.log('clicked');
        debugger;
        let photos = await DownloadImages();
        debugger;

        for (let i = 0; i < photos.length; i++) {
            let route = 'https://live.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_'
                + photos[i].secret + '.jpg';
            props.state.images['photo-' + i].source = route;
        }
        console.log(props.state.images);
        props.dispatch({type:'rerender'});
    };

    return (
            <div className={classes.searchArea}>
                <div className={classes.form}>
                    <input type="text" placeholder="Search here..." />
                    <button type="submit" onClick={testImageDownload}></button>
                </div>
            </div>
    )};


export default SearchArea;