const BookCard = ({book}) => {
    return(
        <div className="border p-4 rounded-lg shadow-md">
            <img style={{width: "200px"}}
                src={book.image}
                alt={book.name}
                className="w-full h-48 object-cover rounded-md mb-2"
            />
            <p className="text-lg">{book.id}</p>
            <h2 className="text-lg font-bold">{book.name}</h2>
            <p className="text-gray-700">{book.genre}</p>
            <p className="text-gray-700">{book.author}</p>
        </div>
    )
}

export default BookCard