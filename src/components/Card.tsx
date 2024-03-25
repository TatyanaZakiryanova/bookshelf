const Card = ({ book }: { book: any }) => {
  console.log(book);
  return (
    <>
      {book.map((item: any) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        return (
        <>
          <div className="card">
            <img src={thumbnail} />
            <div className="inform">
              <h3 className="title">Book 1</h3>
              <h4 className="amount">20</h4>
            </div>
          </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
