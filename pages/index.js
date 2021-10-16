import Layout from "../components/Layout";
import Profile from "../components/Profile"
import Skill from "../components/Skill"
import Work from "../components/Work";
import Activity from "../components/Activity";

export default function Home() {
  return (
    <Layout title="TANIKAWA's Portfolio">


      <div className="md:space-x-4  md:pt-5">
        <Profile />


        <div className="md:flex md:space-x-3 mr-3 ml-3">
          <div className="mt-3">
            <Skill />
          </div>
          <div className="mt-3">
            <Work />
          </div>
        </div>

        {/* Activity */}
        
       <Activity />
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
