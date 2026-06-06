"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/newHeader";
import Footer from "@/components/footer";
import { useState } from "react";

export default async function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <section style={{width:'100vw',minHeight:'90vh', display:'flex',flexDirection:'column',alignItems:'center'}}>
                <section style={{width:'100%',height:'40vh',display:'flex',alignItems:'center',backgroundImage:'url(/intro.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
                  <h1 style={{color:'white',fontSize:'50px',lineHeight:'58px',color:'#99806c',fontWeight: 600,paddingLeft:'15px'}}>Contacto</h1>
                </section>
                <h1 style={{fontSize:'1.5em',fontWeight:'bold'}}>Contactanos</h1>
                <p style={{textAlign:'center',width:'70vw'}}>¿Tienes alguna duda, quieres hacer un pedido especial o necesitas ayuda para elegir un arreglo?
Escríbenos y con gusto te asesoramos.</p>
<form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Correo"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border rounded p-3"
        />

        <textarea
          placeholder="Mensaje"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border rounded p-3"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white px-6 py-3 rounded"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

                </section>
                <Footer />
      </main>
    </div>
  );
}
