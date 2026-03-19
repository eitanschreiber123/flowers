import Image from "next/image";
import styles from "../page.module.css";
import getData from "../../../../sanity/sanity-utils";
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
                <section style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <section style={{width:'100%',height:'40vh',display:'flex',alignItems:'center',backgroundImage:'url(/intro.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
                  <h1 style={{color:'white',fontSize:'50px',lineHeight:'58px',color:'#99806c',fontWeight: 600,paddingLeft:'15px'}}>Rojo</h1>
                </section>
                  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, 200px)',gap:'20px',width:'100vw',justifyContent:'space-evenly'}}>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <Link href={`/shop/red/${i}`} style={{display:'flex',flexDirection:'column',margin:'20px'}}>
                    <div className={styles.card}>
                            <Image src={`/flowers/red_${i}.jpeg`}alt="Sample"fill className={styles.image}/>
                      
                            {/* Overlay */}
                            <div className={styles.overlay}></div>
                      
                            {/* Button */}
                            <div className={styles.buttonWrapper}>
                              <button className={styles.button}>Compra</button>
                            </div>
                          </div>
                    <p>Rojo {i}</p>
                      <p>$5</p>
                    </Link>)}</div>
                </section>
                <Footer />
      </main>
    </div>
  );
}
