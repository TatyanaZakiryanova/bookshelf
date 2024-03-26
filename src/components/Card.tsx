import { useState } from "react";
import BookCard from "./BookCard";
import { Book } from "./Main";

const Card = ({ book }: { book: Book[] }) => {

  const [show, setShow] = useState<boolean>(false)
  const [bookItem, setBookItem] = useState<Book>(Object)

  return (
    <>
      {book.map((item: Book) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        let author = item.volumeInfo && item.volumeInfo.authors;
        if(thumbnail!= undefined && amount !=undefined) {
            
        return (
        <>
          <div className="card" onClick={()=>{setShow(true); setBookItem(item)}}>
            <img src={thumbnail} />
            <div className="inform">
              <h3 className="title">{item.volumeInfo.title}</h3>
              <h4 className="author">{author}</h4>
              <h4 className="amount">{amount} &#8381;</h4>
            </div>
          </div>
          <BookCard show={show} item={bookItem} onClose={()=>setShow(false)} />
          </>
        );
        }
      })}
    </>
  );
};

export default Card;
