import { Button } from "../../atoms/myButton/Button";
import styles from "./aboutView.module.css"

export function AboutView(){
    return(
        <>
            <h1 className={styles.title}>About Me</h1>
            <p className={styles.p1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro minima provident, atque, doloribus fugit quidem a sapiente recusandae, inventore nihil ea repellat quis molestiae laboriosam tenetur reiciendis. Sint, eum modi?</p>
            <Button/>
        </>
    );
}