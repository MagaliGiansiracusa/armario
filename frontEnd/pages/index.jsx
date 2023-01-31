import styles from "./index.module.scss";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Mi armario</title>
            </Head>
            <div className={styles["home"]}>
                <h1>Fiesta del jardín</h1>
                <h3>Alicia en el país de las maravillas</h3>
                
            </div>
        </>
    );
};

export default Home;
