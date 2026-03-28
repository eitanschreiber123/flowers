import Image from "next/image";
import getData from "../../../../../sanity/sanity-utils";
import Link from "next/link";
import Header from "@/components/newHeader";
import Footer from "@/components/footer";
import styles from "../../page.module.css";
import ImageZoom from "@/components/zoom"
import PayPalButton from "@/components/paypal";

export const revalidate = 0;

export default async function Home({params}) {
    const { product } = await params;
  const {Rojo_precios, Rojo_nombres} = await getData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <div style={{display:'flex',margin:'10px'}}>
          <p>Inicio</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 309.143 309.143">
  <path fill="#231F20" d="M240.481,149.268L93.41,2.197c-2.929-2.929-7.678-2.929-10.606,0L68.661,16.34  
    c-1.407,1.406-2.197,3.314-2.197,5.303c0,1.989,0.79,3.897,2.197,5.303l127.626,127.625L68.661,282.197  
    c-1.407,1.406-2.197,3.314-2.197,5.303c0,1.989,0.79,3.897,2.197,5.303l14.143,14.143c1.464,1.464,3.384,2.197,5.303,2.197  
    c1.919,0,3.839-0.732,5.303-2.197l147.071-147.071C243.411,156.946,243.411,152.197,240.481,149.268z"/>
</svg>
<p>Tienda</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 309.143 309.143">
  <path fill="#231F20" d="M240.481,149.268L93.41,2.197c-2.929-2.929-7.678-2.929-10.606,0L68.661,16.34  
    c-1.407,1.406-2.197,3.314-2.197,5.303c0,1.989,0.79,3.897,2.197,5.303l127.626,127.625L68.661,282.197  
    c-1.407,1.406-2.197,3.314-2.197,5.303c0,1.989,0.79,3.897,2.197,5.303l14.143,14.143c1.464,1.464,3.384,2.197,5.303,2.197  
    c1.919,0,3.839-0.732,5.303-2.197l147.071-147.071C243.411,156.946,243.411,152.197,240.481,149.268z"/>
</svg>
<p>Rojo</p>
</div>
                <section style={{display:'flex',width:'100vw',justifyContent:'space-evenly'}} className={styles.oneProduct}>
                    <ImageZoom src={`/flowers/red_${product}.jpeg`} c={styles.oneImage}/>
                    <div style={{display: 'flex', flexDirection: 'column', width: '40%', alignItems: 'center'}}>
                        <h1>{Rojo_nombres?.[`field${product}`]}</h1>
                        <p>{Rojo_precios?.[`field${product}`]}</p>
                        <p>Muy bonita</p>
                        <PayPalButton />
                    </div>
                </section>
                <section style={{display:'flex',flexDirection:'column'}}>
                  <h1 style={{alignSelf:'center'}}>En Este Categoria</h1>
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
                  
                                        <p>{Rojo_nombres?.[`field${i}`]}</p>
                      <p>{Rojo_precios?.[`field${i}`]}</p>
                                        </Link>)}</div>
                </section>
                <Footer />
      </main>
    </div>
  );
}
