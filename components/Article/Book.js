import BookBox from "./Book/BookBox"

export default function Book() {
    return (
        <div className="block relative m-5 p-5 bg-white border-2 border-gray-100 rounded">
            <div className="flex-col">
                <a className="text-3xl md:flex">Book(読書)<a className="text-gray-600 text-opacity-70"> 10</a> 冊</a>
            </div>
            <div className="block relative m-3 mt-4 bg-gray-100 border-2 border-gray-100 p-3 pl-8">
                <div className="text-sm"><a className="pr-28">ジャンル</a><a className="pr-96">タイトル</a><a>メモ</a></div>
            </div>
            <BookBox 
                number={'1'}
                genre={'技術　　 　　　'}
                title={'React.js & Next.js 超入門　第二版　　　　　　　　　　　　　　　　　　　　　'}
                memo={'React.jsの入門者向け書籍。JavaScriptを知らなくても学習を始めやすい内容。'}
            />
            <BookBox 
                number={'2'}
                genre={'技術　　　 　　'}
                title={'Electronで始めるデスクトップアプリケーション開発　　　　　　'}
                memo={'Electronについては、この本が一番最新でわかりやすい内容であった。'}
            />
            <BookBox 
                number={'3'}
                genre={'技術　　　 　　'}
                title={'基礎から学ぶFlutter　　　　　　　　  　　　　　　　　　　　　　　 　　　　　　　　　　　　　　　　　　　　　　'}
                memo={'基礎はチュートリアルやYoutubeで学んで、辞書代わりにこの書籍を用いるのがおすすめ。'}
            />
            <BookBox 
                number={'4'}
                genre={'技術　　　 　　'}
                title={'SwiftUI iPhoneアプリ開発入門ノート2020　　　　　　　　　　　　　　　'}
                memo={'シンプルなサンプルコードが複数掲載されているため、実践的に学習が進められる。'}
            />
            <BookBox 
                number={'5'}
                genre={'技術　　 　　　'}
                title={'たった2日でマスターできる iPhoneアプリ開発集中講座'}
                memo={'上記同様実践的な内容。ただし、2日で終わる内容量ではない。'}
            />
            <BookBox 
                number={'6'}
                genre={'ビジネス '}
                title={'シュガーマンのマーケティング30の法則　　　　　　　　　　　　　　　　　　　　　　　　　'}
                memo={'とてもおすすめ。読めば読むほど魅了される本。時間があれば何度も読んでおきたい。'}
            />
            <BookBox 
                number={'7'}
                genre={'自己啓発'}
                title={'20代を無難に生きるな　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　'}
                memo={'失敗をしても許される20代のうちにとりあえずやってみる勇気を与えてくれる。'}
            />
            <BookBox
                number={'8'} 
                genre={'ビジネス '}
                title={'人は話し方が9割　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　'}
                memo={'話す力、アイスブレイク的なことではなくて、聞く力を鍛えることで相手に良い印象を与える。'}
            />
            <BookBox 
                number={'9'}
                genre={'経済　　 　　　'}
                title={'FACTFULNESS(ファクトフルネス)　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　'}
                memo={'数字の見方、データの見方を学ぶことで、謝った先入観を無くし事実を知ることができる。'}
            />
            <BookBox
                number={'10'} 
                genre={'ビジネス '}
                title={'エッセンシャル思考 最少の時間で成果を最大にする　　　　　　　'}
                memo={'日本人特有の考え方をしている人は見た方が良い。時間の使い方を変えることができる。'}
            />
        </div>
    )
}
