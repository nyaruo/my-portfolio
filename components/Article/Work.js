import WorkItemLec from "./Work/WorkItemLec";
import WorkItemDev from "./Work/WorkItemDev";


export default function Work() {
    return (
        <div className="block p-4 pr-8 bg-white border-2 border-gray-100 rounded ">
            <h1 className="text-3xl p-2 md:flex md:space-x-4">Works(開発物)</h1>
            <div className="block relative m-3 p-5 border-2 border-gray-100 rounded mt-6">
                <div className="text-lg">大学講義</div>
                <div className="mt-2 ml-4 pr-72">
                    <WorkItemLec
                        link={'https://github.com/nyaruo/train_timetable_C'}
                        title={'電車時刻表アプリ'}
                        language={'(C)'}
                    />
                </div>
                <div className="mt-2 ml-4">
                    <WorkItemLec
                        link={'https://github.com/nyaruo/todolist_C_plus'}
                        title={'タスク管理アプリ'}
                        language={'(C++)'}
                    />
                </div>
                <div className="mt-2 ml-4">
                    <WorkItemLec
                        link={'https://github.com/nyaruo/todolist_Java'}
                        title={'タスク管理GUIアプリ'}
                        language={'(Java)'}
                    />
                </div>
            </div>

            <div className="block relative m-3 p-5 border-2 border-gray-100 rounded">
                <div className="text-lg">個人開発</div>
                <div className="mt-1 text-base text-gray-600 md:p-1 ml-1">(Web開発)</div>
                <WorkItemDev
                    link={'/Works/portfolio_former'}
                    title={'旧Portfolio'}
                    language={'(html,css,jQuery)'}
                />
                <WorkItemDev
                    link={'/Works/portfolio_new'}
                    title={'新Portfolio'}
                    language={'(jsx, tailwindcss)'}
                />
                <div className="mt-2 text-base text-gray-600 md:p-1 ml-1">(スマホアプリ開発)</div>
            </div>
            <div className="block relative m-3 p-5 border-2 border-gray-100 rounded">
                <div className="text-lg">共同開発</div>
            </div>
        </div>
    )
}