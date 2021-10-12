import Layout from "../components/Layout";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  return (
    <Layout title="TANIKAWA's Portfolio">

      {/* <div className="md:flex md:justify-center md:space-x-4 md:p-5"> */}
      <div className="md:space-x-4 md:pt-5">
        {/* Profile */}
        <div className="block m-5 p-5 bg-white border-2 border-gray-100 rounded">
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
                    <p>私は現在、Web技術を学んでおり、個人開発ではモバイルアプリ、システムトレードアプリ開発を行なっています。　　　　　　　　</p>
                    <p>また、普段は趣味で、焼肉屋巡りをしたり、本を読んだり、ギターを弾いたりしています。</p>
                    <p>よろしくお願い致します。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* Profile End*/}


        <div className="md:flex md:space-x-2 md:p-1">
          {/* Skill */}
          <div className="block p-5 bg-white border-2 border-gray-100 rounded">
            <h1 className="text-3xl">Skill(スキル)</h1>
            <div className="block relative m-5 p-5 border-2 border-gray-100 rounded">
              <div className="text-lg">大学講義</div>
              <div className="m-2">
                <div className="text-base">
                  <p>基礎文法、アルゴリズムの学習、簡単なアプリケーションを作成しました。</p>
                  <p className="m-2 text-lg text-blue-500 text-opacity-60"> C, C++, Python, Java, HTML, CSS</p>
                </div>
              </div>
            </div>

            <div className="block relative m-5 p-5 border-2 border-gray-100 rounded">
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
          </div>
          {/* Skill End */}

          {/* Development Product */}
          <div className="block p-5 bg-white border-2 border-gray-100 rounded">
            <h1 className="text-3xl md:flex md:space-x-4">Works(開発物)</h1>
            <div className="block relative m-5 p-5 border-2 border-gray-100 rounded">
              <div className="text-lg">大学講義</div>
              <a className="text-base md:flex md:space-x-4 md:p-1 hover:opacity-80">aa</a>
              <a className="text-base md:flex md:space-x-4 md:p-1 hover:opacity-80">aa</a>
              <a className="text-base md:flex md:space-x-4 md:p-1 hover:opacity-80">aa</a>
              <a className="text-base md:flex md:space-x-4 md:p-1 hover:opacity-80">aa</a>
              <a className="text-base md:flex md:space-x-4 md:p-1 hover:opacity-80">aa</a>
              <a className="text-base md:flex md:space-x-4 md:p-1 hover:opacity-80">aa</a>
            </div>

            <div className="block relative m-5 p-5 border-2 border-gray-100 rounded">
              <div className="text-lg">個人開発</div>
              <div className="m-2">
                <div className="text-base text-gray-600 md:p-1">(Web開発)</div>
                <Link href="/Works/portfolio_former">
                  <a className="text-base md:flex md:space-x-4 md:p-1 hover:opacity-80">
                    　　旧Portfolio<a className="text-blue-500 text-opacity-60">(html,css,javascript)</a>　　<FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80"/>
                  </a>
                </Link>
              </div>
              <div className="m-2">
                <Link href="/Works/portfolio_new">
                  <a className="text-base md:flex md:space-x-4 md:p-1 hover:opacity-80 border-b-2 border-gray-100">
                    　　新Portfolio<a className="text-blue-500 text-opacity-60">(html,css,javascript)</a>　　<FontAwesomeIcon icon={faExternalLinkAlt} className="text-gray-500 text-opacity-80"/>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          {/* Development Product End */}
        </div>

        {/* Books */}
        <div className="block m-5 p-5 bg-white border-2 border-gray-100 rounded">
          <h1 className="text-3xl">Profile(プロフィール)</h1>
        </div>
        <div className="block relative m-5 p-5 bg-white border-2 border-gray-100 rounded">
          <h1 className="text-3xl md:flex md:space-x-4">Books(読書)<p className="text-gray-600 text-opacity-70"> 0</p> 冊</h1>
          <div className="block relative m-5 p-5 border-2 border-gray-100 rounded">
            <div className="text-sm"></div>
            <div className="m-2">
            </div>
          </div>
        </div>
      </div>


    </Layout>
  );
}
