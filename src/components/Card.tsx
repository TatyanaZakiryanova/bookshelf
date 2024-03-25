const Card = ({ book }: { book: any }) => {
  console.log(book);
  return (
    <>
      {book.map((item: any) => {
        let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

        return (
        <>
          <div className="card">
            <img src={thumbnail} />
            <div className="inform">
              <h3 className="title">{item.volumeInfo.title}</h3>
              <h4 className="amount">{amount} &#8381;</h4>
            </div>
          </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
