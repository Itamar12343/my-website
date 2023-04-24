import About from "../components/about";
import Background from "../components/backgtound";
import Bubble from "../components/bubble";
import NavBar from "../components/navBar";
import Projects from "../components/projects";

const HomePage = () => {
    return ( 
        <div>
            <NavBar/>
            <Background/>
            <Bubble/>
            <About/>
            <Projects/>
        </div>
     );
}
 
export default HomePage;