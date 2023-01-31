import styles from "./recetas.module.scss";
import Head from "next/head";
import Recetario from "../components/layout/recetario";

const Recetas = () => {
    return (
        <>
            <Head>
                <title>recetas</title>
            </Head>
            <div className={styles["historia"]}>
                <h1>Preparaciones</h1>
             
                <Recetario name = "Sablee de cacao y almedras" preparacion= "cremar manteca con azucar, agregar los huevos de a uno y por último incorporar los secos tamizados hasta integrar. Dejar reposar masa por 2hs y fonzar en tartas individuales. hornear a blanco por 10 min y luego 5 min mas a 180 grados" ingredientes = {["150 gr harina 0000","50gr harina de almendras","100gr cacao","50gr huevo","250 gr manteca"] }/>
                <Recetario name = "genoisse de matcha" preparacion= " gfdigjoeidjfsodifjsoi joifjofisjofijsdf iofjosdjf oiejfosijfos jfsoijfosi jgoisjfoisjfosidjfosi jf" ingredientes = {["coca","hola"] }/>
                <Recetario name = "Ganache de chocolate y café" preparacion= "Calentar crema con café hasta los 65 grados, colocar sobre el chocolate y mixear. Para finalizar, colocar la manteca pomada y volver a mixear" ingredientes = {["200gr chocolate amargo","150ml crema de leche","50 ml café"] }/>
                <Recetario name = "Curd de frutos rojos" preparacion= "mezclar todos los ingredientes excepto la manteca, colocar a baño maría hasta espesar. Colocar gelatina en la preparación, diluída 5 veces su peso en agua. Reposar hasta bajar la temperatura. Por último, colocar la manteca y batir hasta incorporar" ingredientes = {["200gr huevos","200ml pulpa frutos rojos","200 gr azucar","100gr manteca"] }/>
                <Recetario name = "Crema diplomata de yogurt" preparacion= "mezclar todos los ingredientes excepto la manteca, colocar a baño maría hasta espesar. Colocar gelatina en la preparación, diluída 5 veces su peso en agua. Reposar hasta bajar la temperatura. Por último, colocar la manteca y batir hasta incorporar" ingredientes = {["200gr chocolate amargo","150ml crema de leche","50 ml café"] }/>

            </div>
            <div>
                
            </div>
        </>
    );
};

export default Recetas;
