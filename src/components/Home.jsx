import Jumbotron from "./Jumbotron";

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
    </main>);
}
 
export default Home;