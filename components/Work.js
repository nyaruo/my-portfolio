import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


export default function Work() {
    return (
        <div className="block p-4 pr-10 bg-white border-2 border-gray-100 rounded ">
            <h1 className="text-3xl p-2 md:flex md:space-x-4">Works(開発物)</h1>
            <div className="block relative m-3 p-5 border-2 border-gray-100 rounded mt-6">
                <div className="text-lg">大学講義</div>
                <div className="mt-2 ml-2">
                    <a href="https://github.com/nyaruo/train_timetable_C" target="_blank" rel="noopener noreferrer">
                        <a className="text-base md:flex hover:opacity-80 ">
                            電車時刻表アプリ<a className="text-blue-500 text-opacity-60">(C)</a>　　<FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80" />
                        </a>
                    </a>
                </div>
                <div className="mt-2 ml-2">
                    <a href="https://github.com/nyaruo/todolist_C_plus" target="_blank" rel="noopener noreferrer">
                        <a className="text-base md:flex hover:opacity-80 ">
                            タスク管理アプリ<a className="text-blue-500 text-opacity-60">(C++)</a>　　<FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80" />
                        </a>
                    </a>
                </div>
                <div className="mt-2 ml-2">
                    <a href="https://github.com/nyaruo/todolist_Java" target="_blank" rel="noopener noreferrer">
                        <a className="text-base md:flex  hover:opacity-80 ">
                            タスク管理GUIアプリ<a className="text-blue-500 text-opacity-60">(Java)</a>　　<FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80" />
                        </a>
                    </a>
                </div>
            </div>

            <div className="block relative m-3 p-5 border-2 border-gray-100 rounded">
                <div className="text-lg">個人開発</div>
                    <div className="mt-1 text-base text-gray-600 md:p-1">(Web開発)</div>
                    <div className="flex-col">
                    <Link href="/Works/portfolio_former">
                        <a className="text-base md:flex md:p-1 hover:opacity-80">
                            旧Portfolio<a className="text-blue-500 text-opacity-60">(html,css,jQuery)</a>　　<FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80" />　　
                        </a>
                    </Link>
                    </div>
                    <div className="flex-col">
                    <Link href="/Works/portfolio_new">
                        <a className="text-base md:flex md:p-1 hover:opacity-80 border-b-2 border-gray-100">
                            新Portfolio<a className="text-blue-500 text-opacity-60">(jsx, tailwindcss)</a>　　<FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80" />　　　　　　　
                        </a>
                    </Link>
                    </div>
                    <div className="mt-2 text-base text-gray-600 md:p-1">(スマホアプリ開発)</div>
            </div>
            <div className="block relative m-3 p-5 border-2 border-gray-100 rounded">
                <div className="text-lg">共同開発</div>
            </div>
        </div>
    )
}