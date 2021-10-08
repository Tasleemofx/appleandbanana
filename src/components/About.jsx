import Jumbotron from "./Jumbotron"
import Footer from "./Footer"
import "../css/about.css"
const About = () => {
    const [head3, para] = ["We make the journey easier",
    "Everyone can make their UX research fruitful"]
    return ( <>
    <main>
        <section className="jumbotron">
            <Jumbotron 
            head3={head3}
            para={para}
            />
            <div>
            <img src="https://previews.123rf.com/images/wenchiawang/wenchiawang1509/wenchiawang150900190/44978130-fruits-banana-doodle.jpg" alt="doodle"
            className="svg-img"/>
            </div>
        </section>
        <section className="history">
            <div className="flexed">
                <span className="title">Our story</span>
                <div>
                    <p>Founded in 2018, Apple & Banana is a growing UX publicatiion built off 2 principles:</p>
                    <div className="e">
                        <div className="lightblue">
                            <span className="circle">
                                1
                            </span>
                            <p>Make research accessible</p>
                        </div>
                        <div className="lightblue">
                            <span className="circle">
                                2
                            </span>
                            <p>Don't dumb down research</p>
                        </div>
                    </div>
                    <p>
                        Why can't good research content be accesible
                        and smart?
                    </p>
                    <p>
                        That's why we decided to build Apple & Banana: 
                        a place where anyone can do fruitful research.
                    </p>
                </div>
            </div>
            <div className="flexed">
                <span className="title">Our Name</span>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNRc0HicdoFFWRIhGOcnvGB0GhJAquzynChg&usqp=CAU"
                    alt="doodle" className="img-arr"/>
                    <p>Research is packed with complex topics so we wanted 
                        something simple to share via characters. We thought "Maybe use 
                        human characters?" but that felt too restricting. We looked around
                        the room and saw...a bowl of fruit.
                    </p>
                    <p>
                        We asked ourselves: "Why don't we use fruits?"
                    </p>
                    <div className="e">
                        <div className="lightgreen">
                            <span className="circle">
                                1
                            </span>
                            <p>Fruits are recognizable</p>
                        </div>
                        <div className="lightgreen">
                            <span className="circle">
                                2
                            </span>
                            <p>Fruits are very simple</p>
                        </div>
                        <div className="lightgreen">
                            <span className="circle">
                                3
                            </span>
                            <p>Fruits are for everyone</p>
                        </div>
                    </div>
                    <p>Practicing what we write, we decided to test it out.</p>
                    <p>A few quick sketches made us smile and a few visual mock-ups made us laugh.</p>
                    <p>Apple & Banana was born and we havent looked back since.</p>
                </div>
            </div>
        </section>
    </main> 
    <Footer />
    </>);
}
 
export default About;