import BookBox from "./Book/BookBox"

export default function Book() {
    return (
        <div className="block relative m-5 p-5 bg-white border-2 border-gray-100 rounded">
            <div className="flex-col">
                <a className="text-3xl md:flex">Book(読書)<a className="text-gray-600 text-opacity-70"> 18</a> 冊</a>
            </div>
            <div className="block relative m-3 mt-4 bg-gray-100 border-2 border-gray-100 p-3 pl-8">
                <div className="text-sm"><a className="pr-28">ジャンル</a><a className="pr-96">タイトル</a><a>リンク</a></div>
            </div>
            <BookBox 
                genre={'技術'}
                title={'React.js & Next.js 超入門　第二版'}
            />
        </div>
    )
}
