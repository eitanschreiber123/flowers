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
                <section style={{display:'flex',flexDirection:'column'}}>
                  <Link href="/shop/red" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1>Rojo</h1>
                    <div style={{display:'flex',width:'100vw',overflow:'scroll'}}>{[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => <div style={{display:'flex',flexDirection:'column'}}>
                      <Image src={`/flowers/red_${i}.jpeg`} height={200} width={200} style={{margin:'20px'}}/>
                      <p>Rojo {i}</p>
                      <p>$5</p>
                      </div>)}</div>
                  </Link>
                  <Link href="/shop/mixed" style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <h1>Mixto</h1>
                    <div style={{display:'flex',width:'100vw',overflow:'scroll'}}>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => <div style={{display:'flex',flexDirection:'column'}}>
                      <Image src={`/flowers/mixed_${i}.jpeg`} height={200} width={200} style={{margin:'20px'}}/>
                      <p>Mixto {i}</p>
                      <p>$5</p>
                      </div>)}</div>
                  </Link>
                </section>
                <Footer />
      </main>
    </div>
  );
}
