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
    const text = "hey, my name is Itamar and I am 16 years old. I started coding when I was 14 and I learned wb development for 2 years. I am self tought and built a lot of projects, recently I learned react and started doing a litle bit of backend and webSockets but I am more focused at frontend development. I love coding and I have been coding for fun and I built most of the projects for friends and family.";
    const boxRef = useRef(null);
    const textElementRef = useRef(null);
    const imgref = useRef(null);
    const svgsRef = useRef(null);
    let imgAnimationDelay = false;
    const [isIconAnimation,setIsIconAnimation] = useState(false);
    const dispatch = useDispatch();

    const htmlRef = useRef(null);
    const cssRef = useRef(null);
    const sassRef = useRef(null);
    const reactRef = useRef(null);
    const nodejsRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(()=>{
        matchBoxHeightToChildren();
        startObservetion();
        listenToRedux();
        initializeStickyPosition();
    },[]);

    window.addEventListener("resize",()=>{
        matchBoxHeightToChildren();
        initializeStickyPosition();
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

    function initializeStickyPosition(){
        let containerHeight = window.getComputedStyle(containerRef.current).getPropertyValue("height");
        console.log(containerHeight);
        containerRef.current.style.top = `-${containerHeight / 2}`;
    }

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
            startIconAnimation();
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
            endIconAnimation();
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

    function startIconAnimation(){
        htmlRef.current.style.transform = "scale(1)";
        setTimeout(() => {
            cssRef.current.style.transform = "scale(1)";
            setTimeout(() => {
                sassRef.current.style.transform = "scale(1)";
                setTimeout(() => {
                    reactRef.current.style.transform = "scale(1)";
                    setTimeout(() => {
                        nodejsRef.current.style.transform = "scale(1)";
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }

    function endIconAnimation(){
        htmlRef.current.style.transform = "scale(0)";
        setTimeout(() => {
            cssRef.current.style.transform = "scale(0)";
            setTimeout(() => {
                sassRef.current.style.transform = "scale(0)";
                setTimeout(() => {
                    reactRef.current.style.transform = "scale(0)";
                    setTimeout(() => {
                        nodejsRef.current.style.transform = "scale(0)";
                    }, 100);
                }, 100);
            }, 100);
        }, 100);
    }

    return ( 
        <>
        <div className={style.container} ref={containerRef}>
             <div ref={boxRef} className={style.box}>
                   <p ref={textElementRef} className={style.text}>{text}</p>
                   <div className={style.img} ref={imgref}></div>
              </div>
        
               <div className={style["skill-box"]}>
                   <h2 className={style["skill-title"]} style={{transform: isIconAnimation ? "scale(1)" : "scale(0)"}}>skills</h2>
                   <div className={style.svgs} ref={svgsRef}>
                       <img className={style.svg} ref={htmlRef} src={htmlSvg}/>
                       <img className={style.svg} ref={cssRef} src={cssSvg}/>
                       <img className={style.svg} ref={sassRef} src={sassSvg}/>
                       <img className={style.svg} ref={reactRef} src={reactSvg}/>
                       <img className={style.svg} ref={nodejsRef} src={nodejsSvg}/>
                   </div>
                   <button className={style.github} onClick={open_github} style={{transform: isIconAnimation ? "scale(1)" : "scale(0)"}}>my github page</button>
                </div>
            </div>
        </>
     );
}
 
export default About;