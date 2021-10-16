import Layout from "../components/Layout";
import Profile from "../components/Profile"
import Skill from "../components/Skill"
import Work from "../components/Work";

export default function Home() {
  return (
    <Layout title="TANIKAWA's Portfolio">

      <div className="md:space-x-4  md:pt-5">
        
        <Profile />

        <div className="md:flex md:space-x-8 md:p-1">
          <Skill />
          <Work />
        </div>

        {/* Blog */}
        <div className="block m-5 p-5 bg-white border-2 border-gray-100 rounded">
          <h1 className="text-3xl">Profile(プロフィール)</h1>
        </div>
        {/* Book */}

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
