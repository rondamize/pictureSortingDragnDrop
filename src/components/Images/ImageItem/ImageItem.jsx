import classes from '../Images.module.css'
const ImageItem = (props) => {
    return (
        <div className={classes.imageItem}>
           <img src={props.source} />
        </div>
    );
};

export default ImageItem;

//src='https://avatars.yandex.net/get-music-content/193823/cf763a3c.a.8560627-1/m1000x1000?webp=false'