import Layout from "../../components/Layout";
// import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export default function Works() {
    return (
        <Layout title="Works(旧ポートフォリオ)">
            <div className="block relative m-5 p-5 bg-white border-2 border-gray-100 rounded">
                <h1 className="text-3xl">旧ポートフォリオ</h1>

                <div className="mt-4 p-5 md:mt-0 md:ml-6">
                    <div className="text-2xl pt-5">
                        <div className="pt-5 text-base">
                            <p className="py-2">使用言語: <a className="text-blue-400 text-opacity-70">HTML, CSS, JavaScript(jQuery)</a></p>
                            <div className="mt-2">
                                <p>大学２年の夏季休暇中に制作しました。</p>
                                <p>スキルが身に付いていなかったことで、内容が未完成となっていたため、この新型ポートフォリオを作成しました。</p>
                                <p>現在のサイトとの相違点は、JavaScript(jQuery)を使用して開発を行なっている点です。</p>
                                <p>また、見た目もカラフルなデザインで、動的なサイトとなっております。</p>
                                <p>
                                    <a
                                        href="https://nyaruo.github.io/portfolio/#top"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        実際のサイトはこちらになります
                                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-blue-400 text-opacity-60" />
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-4">

                    <img className="md:w-56 p-3"
                        src="/works-1.png"
                        width= {550}
                        height= {1500}
                        alt="Works">

                    </img>

                    {/* <Image
                        className="md:w-56 p-3"
                        src="/works-1.png"
                        width={550}
                        height={1500}
                        alt="Avatar"
                    /> */}
                </div>
                <Link href="/">
                    <div className="flex text-center cursor-pointer mt-12 text-gray-400">
                        <svg
                            className="w-6 h-6 mr-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span>Back to page</span>
                    </div>
                </Link>
            </div>
        </Layout>
    )
}