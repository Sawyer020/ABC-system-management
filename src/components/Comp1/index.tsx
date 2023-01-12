//import "./comp1.scss" 
//⬆ It's a global import, which affects other tsx file within different folders

//modular import
import styles from "./comp1.module.scss"

//function Comp(){
const Comp = () => {
    return(
        <div className = {styles.box}>
            <p>This is Comp1</p>
        </div>
    )
}

export default Comp