import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function Activity() {
    return (
        <div className="block mt-5 ml-3 mr-3 pt-4 pl-4 pb-6 bg-white border-2 border-gray-100 rounded">
            <h1 className="text-3xl p-2">Activity(活動)</h1>
            <div className="md:flex md:space-x-3 mr-3 ml-3">
                <div className="mt-3">
                    <div className="block m-1 p-5 border-2 border-gray-100 rounded mt-3">
                        <h1 className="text-xl">研究室(ラシキア研究室)</h1>
                        <div className="text-base m-2">
                            <p>毎週木曜日2限〜20時頃まで活動を行なっています。
                                <a href="http://150.42.11.224/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80" />
                                </a></p>
                            <p>開発分野は幅広く、それぞれが異なる分野を学習しています。</p>
                            <p>毎週、開発に関するプレゼンテーションやレクチャーを行なう事で、</p>
                            <p>技術、ITニュースの共有、個人開発、共同開発を行なっています。</p>
                        </div>
                        <div className="md:flex md:space-x-3 mt-2 pb-2">
                            <img className="pt-3"
                                src="/semi-activity1.jpg"
                                width={300}
                                height={240}
                                alt="Works">
                            </img>
                            <img className="pt-3"
                                src="/semi-activity2.jpg"
                                width={300}
                                height={240}
                                alt="Works">

                            </img>
                        </div>

                    </div>
                </div>
                <div className="mt-3">
                    <div className="block m-1 p-5 border-2 border-gray-100 rounded mt-3 pr-3">
                        <h1 className="text-xl">趣味</h1>
                        <div className="text-base m-2">
                            <p>趣味はギターで、好きな食べ物は焼肉です。</p>
                            <p>・　コロナ自粛期間に特技を身につけようと、ギターの練習を始めました。</p>
                            <p>・　焼肉が大好きで、2年以上焼肉屋でアルバイトをしています。</p>
                            <div className="md:flex md:space-x-3 mt-2">
                                <img className="md:w-56 pt-3"
                                    src="/hobby-activity1.jpg"
                                    width={250}
                                    height={200}
                                    alt="Works">
                                </img>
                                <img className="md:w-56 pt-3"
                                    src="/hobby-activity2.jpg"
                                    width={250}
                                    height={200}
                                    alt="Works">

                                </img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}