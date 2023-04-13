import { useEffect, useRef } from "react";
import style from "../styles/about.module.scss";

const About = () => {
    const text = "hey, my name is Itamar and I am 16 years old. I started when I was 14 and I learned wb development for 2 years. I am self tought and built a lot of projects, recently I learned react and started doing a litle bit of backend and webSockets but I am more focused at frontend development. I love coding and I have been doing it for fun and I built most of the projects for friends and family"
    const boxRef = useRef(null);
    const textElementRef = useRef(null);
    const imgref = useRef(null);

    useEffect(()=>{
        matchBoxHeightToChildren();
        startObservetion();
    });

    window.addEventListener("resize",()=>{
        matchBoxHeightToChildren();
    });

    const imgObserver = new IntersectionObserver((entries)=>{
        const last = entries[0];
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                scrollAnimation(last.target);
                //observer.unobserve(last.target);
            }else{
                endScrollAnimation(last.target);
            }
        });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6
    });


    
    const textObserver = new IntersectionObserver((entries)=>{
        const last = entries[0];
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                scrollAnimation(last.target);
                //observer.unobserve(last.target);
            }else{
                endScrollAnimation(last.target);
            }
        });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.6
    });


    function startObservetion(){
        setTimeout(() => {        
            imgObserver.observe(imgref.current);
            textObserver.observe(textElementRef.current);
        }, 1000);
    }

    function matchBoxHeightToChildren(){
        if(window.innerWidth < 938){
            boxRef.current.style.height = `${textElementRef.current.offsetHeight + 580}px`;
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

        }else{
            element.style.opacity = "1";
        }
    }

    function endScrollAnimation(element){
        if(element.className.includes("img")){
            if(window.innerWidth > 938){
                element.style.transform = "scale(0)";
            }else{
                element.style.transform = "translate(-50%,0) scale(0)";
            }

        }else{
            element.style.opacity = "0";
        }
    }

    return ( 
        <div ref={boxRef} className={style.box}>
            <p ref={textElementRef} className={style.text}>{text}</p>
            <div className={style.img} ref={imgref}></div>
        </div>
     );
}
 
export default About;