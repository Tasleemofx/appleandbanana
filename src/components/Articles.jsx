import Jumbotron from "./Jumbotron";
import details from "../data/aboutdata"
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import Footer from "./Footer";
import "../css/articles.css";

const Articles = () => {
     const [head3, para] = ["Press",
    "Where we've been around the internet"]
    return ( <>
    <main>
        <section className="jumbotron">
        <Jumbotron
        head3={head3}
        para={para}
        />
        <img src="https://th.bing.com/th/id/OIP.R3uoLR5uWCMmhlSoTOXOEQHaGy?pid=ImgDet&rs=1"
        alt="apple" className="svg-img"/>
        </section>
        <section className="grid">
            {details.map(({img,head,tag, index=50})=>{
                return(<div 
                className="maps"
                 key={Math.random()*index}>
                    <img 
                    src={img}
                    alt="description"
                     className="showcase"
                    />
                    <div>
                    <span>{tag}</span>
                    <h3>{head}</h3>
                    </div>
                </div>)
            })}
        </section>
        <section className="below about">
            <p>Follow us to see where we go next</p>
            <div>
                <button>
                    <AiOutlineTwitter/>
                </button>
                <button>
                    <AiOutlineLinkedin/>
                </button>
            </div>
        </section>
    </main>
    <Footer />
    </>  );
}
 
export default Articles;