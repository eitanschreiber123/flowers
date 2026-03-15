import Image from "next/image";
import getData from "../../../../../sanity/sanity-utils";
import Link from "next/link";
import Header from "@/components/newHeader";
import Footer from "@/components/footer";
import styles from "../../page.module.css";

export const revalidate = 0;

export default async function Home({params}) {
    const { product } = await params;
  const {arriba} = await getData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
                <section style={{display:'flex',width:'100vw',justifyContent:'space-evenly'}} className={styles.oneProduct}>
                    <Image src={`/flowers/red_${product}.jpeg`} height={500} width={500} className={styles.oneImage}/>
                    <div>
                        <h1>Rojo {product}</h1>
                        <p>$5</p>
                        <p>Muy bonita</p>
                        <Link href={`https://wa.me/593979212069?text=Hola%20,%20me%20interesa%20este%20producto:%20https%3A%2F%2Fflores-de-guayaquil.vercel.app%2Fshop%2Fred%2F${product}`} style={{backgroundColor:'blue',padding:'2px 19px',color:'white',borderRadius:'10px',margin:'10px',alignSelf:'center'}}>Compra</Link>
                    </div>
                </section>
                <Footer />
      </main>
    </div>
  );
}
