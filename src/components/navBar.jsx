import { useRef, useState } from "react";
import style from "../styles/navbar.module.scss";

const NavBar = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const navbarRef = useRef(null);
    const [prevScroll, setPrevScroll] = useState(0);
    const [Scroll, setScroll] = useState(0);

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

    function nav_btn_clicked(e){
       open_close_navbar();
    }

    function open_close_navbar(){
        if(isNavbarOpen === false){
            navbarRef.current.style.opacity = "1";
            setIsNavbarOpen(true);
        }
        if(isNavbarOpen === true){
            navbarRef.current.style.opacity = "0";
            setIsNavbarOpen(false);
        }
    }


    return ( 
        <>
        {width < 536 && 
        <div className={style["nav-btn"]} onClick={nav_btn_clicked}>
            <div className={isNavbarOpen === false ? style.stick1 : style["stick1-active"]}></div>
            <div className={isNavbarOpen === false ? style.stick2 : style["stick2-active"]}></div>
            <div className={isNavbarOpen === false ? style.stick3 : style["stick3-active"]}></div>
        </div>
        }
        <div style={{top: Scroll > prevScroll ? "-100px" : width > 536 && "0px"}} className={style.navbar} ref={navbarRef}>
            <div className={`${style.nav} ${style.home}`}>home</div>
            <div className={`${style.nav} ${style.about}`}>about</div>
            <div className={`${style.nav} ${style.contact}`}>contact</div>
            <div className={`${style.nav} ${style.projects}`}>projects</div>
        </div>
        </>
     );
}
 
export default NavBar;