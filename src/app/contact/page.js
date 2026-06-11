"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "@/components/newHeader";
import Footer from "@/components/footer";
import { useState } from "react";

export default async function Home() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);

    // Send to API route here
    // await fetch('/api/contact', {...})
  };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <section style={{width:'100vw',minHeight:'90vh', display:'flex',flexDirection:'column',alignItems:'center'}}>
                <section style={{width:'100%',height:'40vh',display:'flex',alignItems:'center',backgroundImage:'url(/intro.png)',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
                  <h1 style={{color:'white',fontSize:'50px',lineHeight:'58px',color:'#99806c',fontWeight: 600,paddingLeft:'15px'}}>Contacto</h1>
                </section>
                <h1 style={{fontSize:'1.7em',fontWeight:'bold'}}>Contactanos</h1>
                <p style={{textAlign:'center',width:'70vw',fontSize:'1.2em',margin:'10px 0',lineHeight:'1.7em'}}>¿Tienes alguna duda, quieres hacer un pedido especial o necesitas ayuda para elegir un arreglo?
Escríbenos y con gusto te asesoramos.</p>
<form onSubmit={handleSubmit} style={{width:'70%',marginBottom:'10px'}}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Tu Nombre*"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black hover:border-black" style={{padding:'11px 16px',borderRadius:'15px'}}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Tu Email*"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black hover:border-black" style={{padding:'11px 16px',borderRadius:'15px'}}
          />
        </div>
        <div className="md:col-span-2">
          <input
            type="text"
            name="subject"
            placeholder="Asunto"
            value={form.subject}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black hover:border-black" style={{padding:'11px 16px',borderRadius:'15px'}}
          />
        </div>
        <div className="md:col-span-2">
          <textarea
            name="message"
            placeholder="Tu Mensaje*"
            required
            rows={8}
            value={form.message}
            onChange={handleChange}
            className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black hover:border-black" style={{padding:'11px 16px',borderRadius:'15px'}}
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="rounded-md bg-black px-8 py-3 text-white transition hover:opacity-90" style={{padding:'11px 16px',borderRadius:'15px'}}
          >
            Enviar mensaje
          </button>
        </div>
      </div>
    </form>

                </section>
                <Footer />
      </main>
    </div>
  );
}
