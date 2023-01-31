import styles from "./historia.module.scss";
import Head from "next/head";
import Footer from "../components/layout/Footer";

const Historia = () => {
    return (
        <>
            <Head>
                <title>Historia</title>
            </Head>
            <div className={styles["historia"]}>
                <h1>Una merienda de locos</h1>
                <div className={styles["container"]}>
                    <p>
                        Inspirado en la novela de Lewis Carroll, este proyecto
                        busca recrear la escencia del país de las maravillas,
                        lugar donde sobresalen los colores, las texturas y la
                        imaginación. Una merienda de locos, se denomina el
                        capítulo donde Alicia toma el té con el sombrerero en un
                        jardín lleno de flores cantantes. Si bien la
                        protagonista no fue capaz de probar nada esa tarde, yo
                        quise incorporar mis sabores favoritos a la hora de la
                        merienda para elaborar esta torta, y recrear una pequeña
                        parte de ese jardín tan hermoso.
                    </p>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default Historia;
