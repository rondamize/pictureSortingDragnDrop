import React from "react";
import classes from './SearchArea.module.css';
import {DownloadImages} from "../../redux/Store";

const SearchArea = (props) => {

    let testImageDownload = async () => {

        //сделать проверку, что максимум 2 слова введено
        let searchTextArray = props.searchText.split(' ');
        for (let i = 0; i < searchTextArray.length; i++) {
            //let photosContainer = props.state.images['keyWord-' + i];
            let photos = await DownloadImages(searchTextArray[i]);
            //debugger;
            for (let j = 0; j < photos.length; j++) {
                let route = 'https://live.staticflickr.com/' + photos[j].server + '/' + photos[j].id + '_'
                    + photos[j].secret + '.jpg';
                props.state.images['keyWord-' + i]['k-' + i + '-photo-' + j].source = route;
                props.state.images['keyWord-' + i]['k-' + i + '-photo-' + j].tag = searchTextArray[i];
            }
        }
        //debugger;
        // let photos = await DownloadImages(props.searchText);
        //
        // for (let i = 0; i < photos.length; i++) {
        //     let route = 'https://live.staticflickr.com/' + photos[i].server + '/' + photos[i].id + '_'
        //         + photos[i].secret + '.jpg';
        //     props.state.images['photo-' + i].source = route;
        // }
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