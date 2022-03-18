import classes from '../../../Images/Images.module.css'

const SortedImageItem = (props) => {
    return (
            <img className={classes.imageItem} src={props.image.source} />
    )
};



export default SortedImageItem;
