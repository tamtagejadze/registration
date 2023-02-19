import {motion} from "framer-motion"
import AnimationEngine from "../AnimationEngine/AnimationEngine";
import success from '../../image/success.png'

const dropIn ={
    hidden  : {
        y : "-100vh", 
        opacity : 0,

    },
    visible : {
        y : "0",
        opacity :1
    },
    exit : {
        y : "100vh",
        opacity : 0,
    },
}
const NotificationVisual =({handleClose,text}) => {
    return(
        <AnimationEngine onClick={handleClose}>
            <motion.div
            className="animation-div"
            variants={dropIn} 
            initial = "hidden"
            animate = "visible"
            exit = "exit">
                <div className="notification-seccess">
                    <img src={success} className="success-img"/>
                    <span>Success</span>
                </div>
                <p className="notification-text">{text}</p> 
                <button  className="close-Btn" onClick={handleClose}>Close</button>
            </motion.div>
        </AnimationEngine>
    )}
export default NotificationVisual