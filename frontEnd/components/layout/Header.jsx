import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <div className={styles["header"]}>
            <nav className={styles["navbar"]}>
                <h2>Wardrobe</h2>
                <ul>
                    <li>
                        <Link href="/">Mi armario</Link>
                    </li>
                    <li>
                        <Link href="/add">Nueva Prenda</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
