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
                    <Image src={`/flowers/mixed_${product}.jpeg`} height={500} width={500} className={styles.oneImage}/>
                    <div>
                        <h1>Mixto {product}</h1>
                        <p>$5</p>
                        <p>Muy bonita</p>
                    </div>
                </section>
                <Footer />
      </main>
    </div>
  );
}
