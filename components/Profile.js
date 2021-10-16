import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Works() {
    return (
        <div className="block m-3 p-5 bg-white border-2 border-gray-100 rounded">
            <h1 className="text-3xl">Profile(プロフィール)</h1>
            <div className="md:flex md:space-x-4 md:p-5">
                <div className="mt-4 ">
                    <img className="rounded-lg md:w-56"
                        src="/avatar.jpg"
                        width="430"
                        height="280"
                        alt="Avatar">

                    </img>

                    {/* Contact */}
                    <div className="mt-3 flex justify-around md:text-sm">
                        {/* Twitter */}
                        <div>
                            <a
                                href="https://twitter.com/nyarufoy"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faTwitter} size="2x" color="#55acee" className="hover:opacity-80" />
                            </a>
                        </div>
                        {/* Github */}
                        <div>
                            <a
                                href="https://github.com/nyaruo"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} size="2x" color="gray" className="hover:opacity-80" />
                            </a>
                        </div>
                        {/* Gmail */}
                        <div>
                            <a
                                href="mailto:nyarufoy@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="2x" color="#f5955d" className="hover:opacity-80" />
                            </a>
                        </div>
                    </div>
                    {/* Contact End */}

                </div>
                <div className="mt-4 p-5 md:mt-0 md:ml-6">
                    <div className="text-2xl pt-5">
                        <p className="border-b-2 border-gray-100">　　name　   <ruby>谷川<rt>たにかわ</rt></ruby> <ruby>彩華<rt className="text-center">あやか</rt></ruby></p>
                        <div className="pt-5 text-base">
                            <p className="py-2">中京大学3年　工学部情報工学科(2021/8)</p>
                            <div className="mt-2">
                                <p>はじめまして。</p>
                                <p>私は現在、Web技術を学んでおり、個人開発ではモバイルアプリ、システムトレードアプリ開発を行なっています。</p>
                                <p>また、普段は趣味で、焼肉屋巡りをしたり、本を読んだり、ギターを弾いたりしています。</p>
                                <p>よろしくお願い致します。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}