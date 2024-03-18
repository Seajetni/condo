import Layout from "@/components/Layout";
import Collection from "@/components/Collection";
import Popular from "@/components/Popular";
import NewProject from "@/components/NewProject";

export default function Home() {
  return (
    <div className=" bg-slate-100">
      <Layout>
        <div className="  px-80">
          <div>
            <NewProject />
          </div>

          <div>
            <Popular />
          </div>

          <div>
            <Collection />
          </div>
        </div>
      </Layout>
    </div>
  );
}
