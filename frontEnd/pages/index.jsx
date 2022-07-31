import styles from "./index.module.scss";
import Head from "next/head";

const Home = () => {
    return (
        <>
            <Head>
                <title>Mi armario</title>
            </Head>
            <div className={styles["home"]}>
                <h1>HOME</h1>
            </div>
        </>
    );
};

export default Home;
