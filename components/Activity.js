export default function Activity() {
    return (
        <div className="block mt-5 ml-3 mr-3 p-4 bg-white border-2 border-gray-100 rounded">
            <h1 className="text-3xl">Activity(活動)</h1>
            <div className="md:flex md:space-x-3 mr-3 ml-3">
                <div className="mt-3">
                    <div className="block m-1 p-5 border-2 border-gray-100 rounded mt-3">
                        <h1 className="text-xl">大学(ゼミ活動・サークル活動)</h1>

                    </div>
                </div>
                <div className="mt-3">
                    <div className="block m-1 p-5 border-2 border-gray-100 rounded mt-3">
                        <h1 className="text-xl">趣味()</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}