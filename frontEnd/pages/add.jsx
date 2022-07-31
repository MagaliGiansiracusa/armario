import styles from "./add.module.scss";
import Head from "next/head";

const Add = () => {
    return (
        <>
            <Head>
                <title>Agregar prenda</title>
            </Head>
            <div className={[styles["add"], styles["pepito"]].join(" ")}>
                <h1>Add</h1>
            </div>
        </>
    );
};

export default Add;
