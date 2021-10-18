const BookBox = (props) => {
    return (
        <div className="block relative m-3 border-b-2 border-gray-100 p-3 pl-8">
            <div className="text-sm">
                <a className="pr-36">{props.genre}</a>
                <a className="pr-24">{props.title}</a>
                <a>{props.memo}</a>
            </div>
        </div>
    )
}
export default BookBox;