import React from "react";
import classes from './SearchArea.module.css';
import {DownloadImages} from "../../redux/Store";

const SearchArea = (props) => {

    let testImageDownload = async () => {
        props.dispatch({type:'CLEAR_PAGE'});
        //debugger;
        let searchTextArray = props.searchText.split(' ');
        if (searchTextArray.length > 2) {
            props.state.userMessage = "Please, enter no more than 2 key words!";
            //props.dispatch({type:'CLEAR_PAGE'});
        }

        for (let i = 0; i < searchTextArray.length; i++) {
            //let photosContainer = props.state.images['keyWord-' + i];
            let photos = await DownloadImages(searchTextArray[i]);
            //debugger;
            props.state.columns['sortingArea' + i].tag = searchTextArray[i];
            for (let j = 0; j < photos.length; j++) {
                let route = 'https://live.staticflickr.com/' + photos[j].server + '/' + photos[j].id + '_'
                    + photos[j].secret + '.jpg';
                props.state.images['keyWord-' + i]['k-' + i + '-photo-' + j].source = route;
                props.state.images['keyWord-' + i]['k-' + i + '-photo-' + j].tag = searchTextArray[i];
            }
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
                    <textarea className={classes.searchInput} placeholder="Search here..." onChange={onSearchChange} ref={searchLine} value={props.searchText}></textarea>
                    <button className={classes.searchButton} type="submit" onClick={testImageDownload}></button>
                </div>
                <p className={classes.userMessage}>{props.state.userMessage}</p>
            </div>
    )};


export default SearchArea;