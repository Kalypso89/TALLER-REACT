import styles from "./button.module.css";
export function Button(){
    return(
        <button className={styles.buttonXl} onClick={()=> {
            console.log("The button is working");
        }}>
            Click to know more
        </button>
    );
}