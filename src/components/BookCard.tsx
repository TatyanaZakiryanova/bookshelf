import { MouseEventHandler } from "react";
import { Book } from "./Main";

const BookCard = ({show, item, onClose}: {show:Boolean, item:Book, onClose:MouseEventHandler}) => {
    if(!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}>X</button>
                <div className="inform-box">
                    <img src={thumbnail}/>
                    <div className="info">
                        <h1>Title</h1>
                        <h3>Authors</h3>
                        <h4>Publisher<span>PublishedDate</span></h4><br/>
                        <a href="#"><button>More</button></a>
                    </div>
                </div>
                <h4 className="description">Description</h4>
            </div>
        </div>
        </>
    )
}

export default BookCard