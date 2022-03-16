import classes from '../../../Images/Images.module.css'

const SortedImageItem = (props) => {
    //debugger;
    return (
            <img className={classes.imageItem} src={props.image.source} />
    )
};



export default SortedImageItem;

//src='https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'