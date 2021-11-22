import React, { useState } from 'react';
import Jumbotron from "./Jumbotron";
import { AiFillFolder, AiOutlineQq } from "react-icons/ai";
import { FcCollaboration } from "react-icons/fc";
import details from "../data/homedata";
import Footer from "./Footer";
import "../css/home.css"
const Home = () => {
    const [article, setArticle] = useState(details)
    const [head3, para] = ["If you do UX research, you have a place here",
    "Learn fruitful ways to maximize your research"]
    const setAllArticles=()=>{
        setArticle(
            details.filter(detail=> detail)
        )
    }
    const setApplications=()=>{
        setArticle(
            details.filter(detail=> detail.type==="Application")
        )
    }
    const setPerspectives=()=>{
        setArticle(
            details.filter(detail=> detail.type==="Perspectives")
        )
    }
    const setCollaboration=()=>{
        setArticle(
            details.filter(detail=> detail.type==="Collaboration")
        )
    }
    return (<>
    <main>
        <section className="jumbotron">
            <Jumbotron 
            head3={head3}
            para={para}
            />
            <div>
                <img 
                src="https://image.freepik.com/free-vector/round-frame-fresh-juicy-fruits-healthy-diet-vegetarianism-veganism_1003-105.jpg" 
                alt="search" 
                className="svg-img"
                />
                <img 
                src="./images/undraw_Thought_process_re_om58.svg"
                 alt="banana"
                 className="svg-img"/>
                <img 
                src="https://miro.medium.com/max/1400/0*XLeoYbOa9fjeCjiO"
                alt="apple" 
                 className="svg-img" />
                 </div>
        </section>
        <section className="list-all">
            <button
            onClick={setAllArticles}
            >All Articles</button>
            <button
            onClick={setApplications}
            >
                <AiFillFolder />
                <p>Applications (3)</p>
            </button>
            <button
            onClick={setPerspectives}
            >
                <AiOutlineQq />
                <p> Perspectives(4)</p>
            </button>
            <button
            onClick={setCollaboration}
            >
                <FcCollaboration />
                <p> Collaborations(5)</p>
            </button>
           
        </section>
        <section className="home-grid">
            {article.map(({heading, para,type,index=30, img})=>{
                return(<article
                 key={Math.random()*index}
                 className="description">
                    <img src={img} alt="doodle p-d" className="img-arr"/>
                    <div>
                        <button className="grid-btn">{type==="Application"?
                        <AiFillFolder />
                         :(type==="Collaboration"?
                         <FcCollaboration/>
                         : <AiOutlineQq/>)
                         } {type}</button>
                        <h3>{heading}</h3>
                        <p>{para}</p>
                    </div>
                </article>)
            })}
        </section>
        <section className="below">
            <div>
            <img 
            className="Yacht"
            src="./images/undraw_Yacht_re_kkai.svg" alt="yacht"/>
            </div>
            <div>
                <h3>Learn how to make your UX research fruitful</h3>
                <p>Dive deeper into research with our upcoming handbook, full
                    of practical advice and actionable guides.
                </p>
                <form>
                <input
                placeholder="Email"
                type="email"
                />
                <button>Read 15 pages now</button>
                <p>No spam, unsubscribe anytime</p>
                </form>

            </div>
        </section>
    </main>
    <Footer/>
    </>);
}
 
export default Home;