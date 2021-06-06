import './Main.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function Main() {
    return (
        <div className="main">
            <div className="paragraph">
                <p>New Collection</p>
                <p>2021</p>
            </div>
            <div className="heroText">
                <h1>Summer</h1>
                <h1 style={{marginLeft:135}}>Dreams</h1>
            </div>
            <div className="collectionButton">
                <h3>Discover the collection</h3>
            <ArrowForwardIcon/>
            </div>
            <div className="otherProducts">
                <img className="image1" width={170} height={170} src="https://cdn.pixabay.com/photo/2016/12/17/18/51/lilacs-1914124_960_720.jpg"/>
                <img className="image2" width={170} height={170} src="https://media.istockphoto.com/photos/fresh-lavender-flowers-and-candle-picture-id1150873673?s=612x612"/>
            </div>

        </div>
    )
}

export default Main
