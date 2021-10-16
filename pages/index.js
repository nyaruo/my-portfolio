import Layout from "../components/Layout";
import { Profile, Skill, Work, Activity, Book } from "../components/Article";

export default function Home() {
  return (
    <Layout title="TANIKAWA's Portfolio">

      <div className="md:space-x-4 md:pt-5 items-center ">
        <Profile />
        <div className="md:flex md:space-x-3 mr-3 ml-3">
          <div className="mt-3">
            <Skill />
          </div>
          <div className="mt-3 pl-4">
            <Work />
          </div>
        </div>
        <Activity />
        <Book />
      </div>


    </Layout>
  );
}
