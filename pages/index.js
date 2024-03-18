import Layout from "@/components/Layout";
import Collection from "@/components/Collection";
import Popular from "@/components/Popular";
import NewProject from "@/components/NewProject";
import Nav from "@/components/Nav";
import Search from "@/components/Search";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" bg-slate-100">

      <Nav/>

      <div>
        <Search/>
      </div>

      <Layout>
        <div className="">

        <div className="mx-20">
            <Popular />
          </div>


          <div className="mx-20">
            <NewProject  />
          </div>

    

          <div>
            <Collection />
          </div>
        </div>
        
        <Footer/>
      </Layout>
    </div>
  );
}
