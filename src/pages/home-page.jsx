import Background from "../components/backgtound";
import Bubble from "../components/bubble";
import Container from "../components/container";
import NavBar from "../components/navBar";

const HomePage = () => {
    return ( 
        <div>
            <NavBar/>
            <Background/>
            <Bubble/>
            <Container/>
        </div>
     );
}
 
export default HomePage;