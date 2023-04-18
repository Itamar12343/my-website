import { useEffect, useRef, useState } from "react";
import style from "../styles/about.module.scss";
import store from "../redux/store";
import {useDispatch} from "react-redux";

import htmlSvg from "../media/html.svg";
import cssSvg from "../media/css.svg";
import sassSvg from "../media/sass.svg";
import reactSvg from "../media/react.svg";
import nodejsSvg from "../media/nodejs.svg";

const About = () => {
    const text = "hey, my name is Itamar and I am 16 years old. I started when I was 14 and I learned wb development for 2 years. I am self tought and built a lot of projects, recently I learned react and started doing a litle bit of backend and webSockets but I am more focused at frontend development. I love coding and I have been doing it for fun and I built most of the projects for friends and family"
    const boxRef = useRef(null);
    const textElementRef = useRef(null);
    const imgref = useRef(null);
    const svgsRef = useRef(null);
    let imgAnimationDelay = false;
    const [isIconAnimation,setIsIconAnimation] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        matchBoxHeightToChildren();
        startObservetion();
        listenToRedux();
    },[]);

    window.addEventListener("resize",()=>{
        matchBoxHeightToChildren();
    });

    const imgObserver = new IntersectionObserver((entries)=>{
        const last = entries[0];
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                scrollAnimation(last.target);
                imgAnimationDelay = true;
                setTimeout(() => {
                    imgAnimationDelay = false;
                }, 500);
            }else{
                if(imgAnimationDelay === false){
                endScrollAnimation(last.target);
                }
            }
        });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    });


    
    const textObserver = new IntersectionObserver((entries)=>{
        const last = entries[0];
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                scrollAnimation(last.target);
            }else{
                endScrollAnimation(last.target);
            }
        });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: window.innerWidth > 938 ? 0.5 : 0.1
    });


    function startObservetion(){
        setTimeout(() => {        
            imgObserver.observe(imgref.current);
            textObserver.observe(textElementRef.current);
            imgObserver.observe(svgsRef.current);
        }, 1000);
    }

    function matchBoxHeightToChildren(){
        if(window.innerWidth < 938){
            boxRef.current.style.height = `${textElementRef.current.offsetHeight + 480}px`;
            }else{
                boxRef.current.style.height = `${textElementRef.current.offsetHeight + 100}px`;
            }
    }

    function scrollAnimation(element){
        if(element.className.includes("img")){
            if(window.innerWidth > 938){
                element.style.transform = "scale(1)";
            }else{
                element.style.transform = "translate(-50%,0) scale(1)";
            }

        }else if(element.className.includes("text")){
            element.style.opacity = "1";
        }else{
            setIsIconAnimation(true);
        }
    }

    function endScrollAnimation(element){
        if(element.className.includes("img")){
            if(window.innerWidth > 938){
                element.style.transform = "scale(0)";
            }else{
                element.style.transform = "translate(-50%,0) scale(0)";
            }

        }else if(element.className.includes("text")){
            element.style.opacity = "0";
        }else{
            setIsIconAnimation(false);
        }
    }

    
    function listenToRedux(){
        const unsubsctibe = store.subscribe(()=>{
            let navbarStatus = store.getState().navbar;
            if(navbarStatus.home === true){
                dispatch({type: "home", text: false});
                window.scrollTo({behavior: "smooth", top:0})
            }
            if(navbarStatus.about === true){
                dispatch({type: "about", text: false});
                imgref.current.scrollIntoView({behavior: "smooth", block: "center"});
            }
            if(navbarStatus.contact === true){
                dispatch({type: "contact", text: false});
            }
            if(navbarStatus.projects === true){
                dispatch({type: "projects", text: false});
            }
        });
    }

    function open_github(){
        window.open("https://github.com/Itamar12343");
    }

    return ( 
        <>
        <div className={style.container}>
             <div ref={boxRef} className={style.box}>
                   <p ref={textElementRef} className={style.text}>{text}</p>
                   <div className={style.img} ref={imgref}></div>
              </div>
        
               <div className={style["skill-box"]}>
                   <h2 className={style["skill-title"]} style={{transform: isIconAnimation ? "scale(1)" : "scale(0)"}}>skills</h2>
                   <div className={style.svgs} ref={svgsRef}>
                       <img style={{transform: isIconAnimation ? "scale(1)" : "scale(0)"}} className={style.svg} src={htmlSvg}/>
                       <img style={{transform: isIconAnimation ? "scale(1)" : "scale(0)"}} className={style.svg} src={cssSvg}/>
                       <img style={{transform: isIconAnimation ? "scale(1)" : "scale(0)"}} className={style.svg} src={sassSvg}/>
                       <img style={{transform: isIconAnimation ? "scale(1)" : "scale(0)"}} className={style.svg} src={reactSvg}/>
                       <img style={{transform: isIconAnimation ? "scale(1)" : "scale(0)"}} className={style.svg} src={nodejsSvg}/>
                   </div>
                   <button className={style.github} onClick={open_github}>my github page</button>
                </div>
            </div>
        </>
     );
}
 
export default About;