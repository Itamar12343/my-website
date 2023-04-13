import Background from "../components/backgtound";
import style from "../styles/errPage.module.scss";
import {useNavigate} from "react-router-dom";

const ErrPage = () => {
    const navigate = useNavigate();

    function goBack(){
        navigate("/");
    }

    return ( 
        <>
        <Background/>
        <h1 className={style.title}>error 404 page not found</h1>
        <button className={style.btn} onClick={goBack}>go back</button>
        </>
     );
}
 
export default ErrPage;