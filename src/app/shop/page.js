import Image from "next/image";
import styles from "./page.module.css";
import getData from "../../../sanity/sanity-utils";
import Link from "next/link";
import Header from "@/components/newHeader";
import Footer from "@/components/footer";

export const revalidate = 0;

export default async function Home() {
  const {Rojo_precios, Rojo_nombres, Mixto_precios, Mixto_nombres} = await getData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
                <section style={{display:'flex',flexDirection:'column'}}>
                  <section style={{width:'100%',height:'40vh',display:'flex',alignItems:'center',backgroundImage:'url(/intro.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
                  <h1 style={{color:'white',fontSize:'50px',lineHeight:'58px',color:'#99806c',fontWeight: 600,paddingLeft:'15px'}}>Tienda</h1>
                </section>
                  <Link href="/shop/red" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1 style={{textAlign:'center',fontSize: '40px',lineHeight: 1.5}}>Rojo</h1>
                    <div style={{display:'flex',width:'100vw',overflow:'scroll'}}>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <Link href={`/shop/red/${i}`} style={{display:'flex',flexDirection:'column',margin:'20px'}}>
                      <div className={styles.card}>
                            <Image src={`/flowers/red_${i}.jpeg`}alt="Sample"fill className={styles.image}/>
                      
                            {/* Overlay */}
                            <div className={styles.overlay}></div>
                      
                            {/* Button */}
                            <div className={styles.buttonWrapper}>
                              <button className={styles.button}>Compra</button>
                            </div>
                          </div>

                      <p>{Rojo_nombres[`field${i}`]}</p>
                      <p>{Rojo_precios[`field${i}`]}</p>
                      </Link>)}</div>
                  </Link>
                  <Link href="/shop/mixed" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1 style={{textAlign:'center',fontSize: '40px',lineHeight: 1.5}}>Mixto</h1>
                    <div style={{display:'flex',width:'100vw',overflow:'scroll'}}>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => <Link href={`/shop/mixed/${i}`} style={{display:'flex',flexDirection:'column',margin:'20px'}}>
                      <div className={styles.card}>
                            <Image src={`/flowers/mixed_${i}.jpeg`}alt="Sample"fill className={styles.image}/>
                      
                            {/* Overlay */}
                            <div className={styles.overlay}></div>
                      
                            {/* Button */}
                            <div className={styles.buttonWrapper}>
                              <button className={styles.button}>Compra</button>
                            </div>
                          </div>
                      <p>{Mixto_nombres[`field${i}`]}</p>
                      <p>{Mixto_precios[`field${i}`]}</p>
                      </Link>)}</div>
                  </Link>
                </section>
                <Footer />
      </main>
    </div>
  );
}
