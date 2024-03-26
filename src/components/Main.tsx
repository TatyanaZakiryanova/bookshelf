import { useState } from "react"
import Card from "./Card"
import axios from "axios"

export interface Book {

    volumeInfo: {
        title: string;
        authors: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        }
    }
    saleInfo: {
        listPrice: {
            amount: string;
        }
    }
}

const Main = () => {

    const [search, setSearch] = useState<string>("")

    const [bookData, setBookData] = useState<[]>([])

    const fetchBooks = () => {

    axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyBizhpaUV-cAKj2BG2pZSJxEGViDGAYQFI'+'&maxResults=30')
    .then(res=>setBookData(res.data.items))
    .catch(err=>console.log(err))

    }

    const searchBook = (event: KeyboardEvent) => {
        if(event.key==="Enter") {
            fetchBooks()
        }
    }

    return (
        <>
        <div className="header">
            <div className="titleRow">
                <h1>BOOKSHELF</h1>
                <h2>Search book</h2>
            </div>
            <div className="search">
                <input type="text" placeholder="Enter book name..."
                value={search} onChange={e => setSearch(e.target.value)}
                onKeyPress={searchBook} />
                <button onClick={fetchBooks}>Search</button>
            </div>
        </div>

        <div className="container"> {
            <Card book={bookData}/>
        }
        </div>
        </>
    )
}

export default Main