import Image from "next/image";
import styles from "./page.module.css";
import getData from "../../../sanity/sanity-utils";
import Link from "next/link";
import Header from "@/components/newHeader";
import Footer from "@/components/footer";

export const revalidate = 0;

export default async function Home() {
  const {arriba} = await getData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <section style={{width:'100vw',height:'90vh'}}>
                <section style={{width:'100%',height:'40vh',display:'flex',alignItems:'center',backgroundImage:'url(/intro.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
                  <h1 style={{color:'white',fontSize:'50px',lineHeight:'58px',color:'#99806c',fontWeight: 600,paddingLeft:'15px'}}>Una tienda de Flores</h1>
                </section>
                </section>
                <Footer />
      </main>
    </div>
  );
}
