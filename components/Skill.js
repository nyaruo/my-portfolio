export default function Skill() {
    return (
        <div className="block p-4 bg-white border-2 border-gray-100 rounded">
            <h1 className="p-2 text-3xl">Skill(スキル)</h1>
            <div className="block relative m-3 p-5 border-2 border-gray-100 rounded">
                <div className="text-lg">大学講義</div>
                <div className="m-2">
                    <div className="text-base">
                        <p>基礎文法、アルゴリズムの学習、簡単なアプリケーションを作成しました。</p>
                        <p className="m-2 text-lg text-blue-500 text-opacity-60"> C, C++, Python, Java, HTML, CSS</p>
                    </div>
                </div>
            </div>

            <div className="block relative m-3 p-5 border-2 border-gray-100 rounded">
                <div className="text-lg">個人開発</div>
                <div className="m-2">
                    <div className="text-base md:flex md:space-x-4 md:p-3">
                        <p>DiscordBot, システムトレード開発</p>
                        <p className="text-blue-500 text-opacity-60"> Python</p>
                    </div>
                    <div className="text-base md:flex md:space-x-4 md:px-3">
                        <p>タスク管理アプリ開発</p>
                        <p className="text-blue-500 text-opacity-60"> Swift(SwiftUI), Dart(Flutter)</p>
                    </div>
                </div>
            </div>

            <div className="block relative m-3 p-5 border-2 border-gray-100 rounded">
                <div className="text-lg">その他</div>
                <div className="m-2">
                    <div className="text-base">
                        <p>開発、ゼミなどで使用経験のあるツール等です。</p>
                        <p className="m-2 text-lg text-blue-500 text-opacity-60"> Git, Docker, Slack, Discord, Teams</p>
                    </div>
                </div>
            </div>
        </div>
    )
}