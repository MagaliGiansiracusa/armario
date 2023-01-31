import styles from "./recetario.module.scss";
import Head from "next/head";
import { useState } from "react"
import { library } from "@fortawesome/fontawesome-svg-core";

const Recetario = (props) => {
    const [flipped, setFlipped] = useState(false);
    return (
        <div className={styles["pizarroncontenedor"]}>
            <div className={styles["pizarron"]} >
                <div className = {[styles["flipcard"], flipped ? styles["flipped"] : null].join(" ")}>
                    <div className={styles["adelante"]}>
                        <h3>{props.name}</h3>
                    </div>
                    <div className={styles["atras"]}>
                        <h3>{props.name}</h3>
                        <div className={styles["container"]}>
                            <div className={styles["izquierda"]}>
                                <h4>Ingredientes</h4>
                                <ul className={styles["ingredientes"]}>
                                    {props.ingredientes.map((ingrediente) => (
                                        <li>{ingrediente}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles["derecha"]}>
                                <h4>Preparación</h4>
                                <p>{props.preparacion}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recetario;
