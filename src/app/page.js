import Image from "next/image";
import styles from "./page.module.css";
import getData from "../../sanity/sanity-utils";
import Link from "next/link";
import Header from "@/components/newHeader";
import Footer from "@/components/footer";

export const revalidate = 0;

export default async function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <div style={{width:'100vw',height:'80vh',backgroundImage:'url(/intro.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start'}}>
          <h1 style={{color:'white',fontSize:'50px',lineHeight:'58px',color:'#99806c',fontWeight: 600,paddingLeft:'15px'}}>Bienvenido a Flores de Guayaquil</h1>
          <Link href="/about" style={{padding: '12px 20px 12px 20px',color:'white',backgroundColor:'blue',borderRadius:'20px',border:'none',textDecoration:'none',marginLeft:'15px'}}>Contacto</Link>
        </div>
        <section>
          <h1 style={{textAlign:'center',fontSize: '40px',lineHeight: 1.5}}>Categorias</h1>
          <div style={{display:'flex',justifyContent:'space-evenly',width:'100vw',margin:'20px 0'}} className={styles.cat}>
          <Link href="/shop/red" style={{display:'flex',flexDirection:'column',margin:'20px 0'}}>
            <div className={styles.card}>
      <Image src="/flowers/red_1.jpeg"alt="Sample"fill className={styles.image}/>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Button */}
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>Leer Mas</button>
      </div>
    </div>
            <p style={{fontSize:'1.2em'}} className={styles.change}>Rojo</p>
          </Link>
          <Link href="/shop/mixed" style={{display:'flex',flexDirection:'column',margin:'20px 0'}}>
            <div className={styles.card}>
      <Image src="/flowers/mixed_1.jpeg"alt="Sample"fill className={styles.image}/>

      {/* Overlay */}
      <div className={styles.overlay}></div>

      {/* Button */}
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>Leer Mas</button>
      </div>
    </div>
    
            <p style={{fontSize:'1.2em'}} className={styles.change}>Mixto</p>
          </Link>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
