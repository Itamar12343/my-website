import style from "../styles/container.module.scss";
import About from "../components/about";
import Projects from "../components/projects";

const Container = () => {
    return ( 
        <div className={style.container}>
            <About/>
            <Projects/>
        </div>
     );
}
 
export default Container;