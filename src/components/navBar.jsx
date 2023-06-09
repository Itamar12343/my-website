import { useRef, useState } from "react";
import style from "../styles/navbar.module.scss";
import { useDispatch } from "react-redux";

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef(null);
    const [prevScroll, setPrevScroll] = useState(0);
    const [Scroll, setScroll] = useState(0);
    const dispatch = useDispatch();

    window.addEventListener("resize",()=>{
        setWidth(window.innerWidth);
    });

    window.addEventListener("scroll",()=>{
        if(isNavbarOpen === true){
            open_close_navbar();
        }
        if(Scroll !== prevScroll){
            setPrevScroll(Scroll);
        }
        setScroll(window.scrollY);
    });


    function open_close_navbar(){
        if(isNavbarOpen === false){
            navbarRef.current.style.opacity = "1";
            navbarRef.current.style.pointerEvents = "all";
            setIsNavbarOpen(true);
        }
        if(isNavbarOpen === true){
            navbarRef.current.style.opacity = "0";
            navbarRef.current.style.pointerEvents = "none";
            setIsNavbarOpen(false);
        }
    }


    function goTo(e){
        let path = e.target.textContent;
        dispatch({type: path, text: true});
    }

    return ( 
        <>
        {width < 536 && 
        <div className={style["nav-btn"]} onClick={open_close_navbar}>
            <div className={isNavbarOpen === false ? style.stick1 : style["stick1-active"]}></div>
            <div className={isNavbarOpen === false ? style.stick2 : style["stick2-active"]}></div>
            <div className={isNavbarOpen === false ? style.stick3 : style["stick3-active"]}></div>
        </div>
        }
        <div style={{top: Scroll > prevScroll ? "-100px" : width > 536 && "0px", backgroundColor: Scroll > 170? "rgb(255,255,255,0.9)": "rgb(255,255,255,0.6)"}} className={style.navbar} ref={navbarRef}>
            <div className={`${style.nav} ${style.home}`} onClick={goTo}>home</div>
            <div className={`${style.nav} ${style.about}`} onClick={goTo}>about</div>
            <div className={`${style.nav} ${style.projects}`} onClick={goTo}>projects</div>
            <div className={`${style.nav} ${style.contact}`} onClick={goTo}>contact</div>
        </div>
        </>
     );
}
 
export default NavBar;