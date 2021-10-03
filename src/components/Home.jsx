import Jumbotron from "./Jumbotron";
import { AiFillFolder, AiOutlineQq } from "react-icons/ai";
import { FcCollaboration } from "react-icons/fc";
import details from "../data/details";
const Home = () => {
    const [head3, para] = ["If you do UX research, you have a place here",
    "Learn fruitful ways to maximize your research"]
    return (
    <main>
        <section className="jumbotron">
            <Jumbotron 
            head3={head3}
            para={para}
            />
            <div>
                <img 
                src="./images/undraw_Co-working_re_w93t.svg" 
                alt="" 
                className="svg-img green"
                />
                <img 
                src="./images/undraw_Thought_process_re_om58.svg"
                 alt=""
                 className="svg-img pink"/>
                <img 
                src="./images/undraw_Through_the_desert_re_1q2x.svg"
                 alt="" 
                 className="svg-img blue" />
                 </div>
        </section>
        <section>
            <button>All Articles</button>
            <header>
                <AiFillFolder />
                <p>Applications (3)</p>
            </header>
            <header>
                <AiOutlineQq />
                <p> Perspectives(4)</p>
            </header>
            <header>
                <FcCollaboration />
                <p> Collaborations(5)</p>
            </header>
           
        </section>
        <section>
            {details.map(({heading, para,type,index=30})=>{
                return(<article key={Math.random()*index}>
                    <header>{type}</header>
                <h3>{heading}</h3>
                <p>{para}</p>
                </article>)
            })}
        </section>
    </main>);
}
 
export default Home;