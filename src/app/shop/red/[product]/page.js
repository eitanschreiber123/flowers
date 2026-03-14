import Image from "next/image";
import getData from "../../../../../sanity/sanity-utils";
import Link from "next/link";
import Header from "@/components/newHeader";
import Footer from "@/components/footer";
import styles from "../../page.module.css";

export const revalidate = 0;

export default async function Home({params}) {
    const { product } = params;
  const {arriba} = await getData();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
                <section style={{display:'flex'}}>
                    <Image src={`/flowers/red_${product}.jpeg`} height={300} width={300}/>
                    <div>
                        <h1>Rojo {product}</h1>
                        <p>$5</p>
                        <p>Muy bonita</p>
                    </div>
                </section>
                <Footer />
      </main>
    </div>
  );
}
