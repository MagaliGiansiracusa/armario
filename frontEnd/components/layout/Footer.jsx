import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles["footer"]}>
            <h2>Footer</h2>
            <div className={styles["container"]}>
                <ul className={styles["navbar"]}>
                    <li>Final Pastelería superior</li>
                    <li>Magali Giansiracusa</li>
                    <li>Profesional Gastronómico</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
