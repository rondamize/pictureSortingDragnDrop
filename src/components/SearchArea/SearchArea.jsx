import React from "react";
import classes from './SearchArea.module.css';
import {DownloadImages} from "../../redux/Store";

const SearchArea = (props) => {

    let testImageDownload = async () => {
        console.log('clicked');
        debugger;
        let photos = await DownloadImages(props.searchText);
        debugger;

        for (let i = 0; i < photos.length; i++) {
            let route = 'https://live.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_'
                + photos[i].secret + '.jpg';
            props.state.images['photo-' + i].source = route;
        }
        console.log(props.state.images);
        props.dispatch({type:'rerender'});
    };

    let searchLine= React.createRef();

    let onSearchChange = () => {
        let text = searchLine.current.value;
        props.dispatch({type:'UPDATE_SEARCH_TEXT', newText: text});
    };

    return (
            <div className={classes.searchArea}>
                <div className={classes.form}>
                    <textarea placeholder="Search here..." onChange={onSearchChange} ref={searchLine} value={props.searchText}></textarea>
                    <button type="submit" onClick={testImageDownload}></button>
                </div>
            </div>
    )};


export default SearchArea;