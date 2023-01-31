import styles from "./Header.module.scss";
import Link from "next/link";
import React from 'react'
import { FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <div className={styles["header"]}>
                        <div className={styles["respmenu"]} >
                                            
                        
                            <nav className={styles["navbar"]}>
                            <input type="checkbox" className ={styles["checkbox"]}/>
                            <FaBars className={styles["burger"]}/>
                                <ul className={styles["links"]}>
                                    <li>
                                        <Link href={"/historia"}>Historia</Link>
                                    </li>
                                    <li>
                                        <Link href={"/recetas"} >Recetas</Link>
                                    </li>
                                    <li>
                                        <Link href={"/"} >Home</Link>
                                    </li>
            
                                </ul>
                            </nav>
                            </div>
                        
                    </div>
        
    );
};

export default Header;
