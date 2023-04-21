import { useRef } from "react";
import style from"../styles/bubble.module.scss";
const Bubble = () => {

  const titleRef = useRef(null);

  window.onscroll = ()=>{
    checkTitleVisibility()
  }

  window.onload = ()=>{
    if(window.scrollY >= 174){
      titleRef.current.style.opacity = "0";
    }else{
      setTimeout(() => {
        titleRef.current.style.opacity = "1";
      }, 1000);
    }
  }
  
  function checkTitleVisibility(){
    if(window.scrollY >= 174){
      titleRef.current.style.opacity = "0";
    }else{
      titleRef.current.style.opacity = "1";
    }
  }


    return ( 
       <div className={style.bubble}>
         <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor: "rgb(194, 229, 156)"}}></stop>
      <stop offset="100%" style={{stopColor: "rgb(100, 179, 244)"}}></stop>
    </linearGradient>
  </defs>
  <path fill="url(#gradient)">
    <animate 
    attributeName="d"
    dur="10s"
    repeatCount="indefinite"

    values="
    M407,325Q337,400,234.5,427.5Q132,455,94,352.5Q56,250,104,165.5Q152,81,238.5,100Q325,119,401,184.5Q477,250,407,325Z;
    M389.1283,355.63719Q371.72215,461.27439,258.49913,446.90356Q145.27612,432.53273,109.3186,341.26636Q73.36108,250,105.53186,152.22388Q137.70264,54.44777,250.75488,54.04421Q363.80711,53.64065,385.17078,151.82033Q406.53446,250,389.1283,355.63719Z;
    M372.5,326.5Q338,403,243.5,414Q149,425,76.5,337.5Q4,250,77,163.5Q150,77,250.5,75.5Q351,74,379,162Q407,250,372.5,326.5Z;
    M409.5,326.5Q338,403,238,423Q138,443,88,346.5Q38,250,103.5,180Q169,110,257.5,97Q346,84,413.5,167Q481,250,409.5,326.5Z;
    M417,337.5Q351,425,255,416.5Q159,408,104,329Q49,250,95,155.5Q141,61,236.5,84.5Q332,108,407.5,179Q483,250,417,337.5Z;
    M387.5,346Q361,442,262,421.5Q163,401,85,325.5Q7,250,76,159Q145,68,240.5,84Q336,100,375,175Q414,250,387.5,346Z;
    M407,325Q337,400,234.5,427.5Q132,455,94,352.5Q56,250,104,165.5Q152,81,238.5,100Q325,119,401,184.5Q477,250,407,325Z;
    "
    ></animate>
  </path>
</svg>
        <h1 className={style.title} ref={titleRef}>welcome</h1>
       </div>
     );
}
 
export default Bubble;