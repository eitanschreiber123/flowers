"use client"
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section className="header">

      {/* Desktop Links */}
      <div className="links">
        <Link href="/" style={{padding:'10px',color:'#99806c',fontWeight: 600,fontSize: '16px'}}>Inicio</Link>

        <div ref={dropdownRef} style={{position: "relative",display: "inline-block",padding:'10px'}}>
          <div style={{display: "flex",alignItems: "center",gap: "6px",cursor: "pointer"}}>
            <Link href="/shop" style={{color:'#99806c',fontWeight: 600,fontSize: '16px'}}>Tienda</Link>
            <span onClick={e=>{
              e.stopPropagation();
              setIsOpen((prev) => !prev);
            }} style={{fontSize: "12px",userSelect: "none",color:'#99806c'}}>▼</span>
          </div>

          {isOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                background: "#fff",
                border: "1px solid #ccc",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "4px",
                minWidth: "120px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                zIndex: 1000,
              }}
            >
              <div><Link style={{color:'#99806c',fontWeight: 600,fontSize: '16px'}} href="/shop/red">Rojo</Link></div>
              <div><Link style={{color:'#99806c',fontWeight: 600,fontSize: '16px'}} href="/shop/mixed">Mixto</Link></div>
            </div>
          )}
        </div>

        <Link href="/about" style={{padding:'10px',color:'#99806c',fontWeight: 600,fontSize: '16px'}}>Quienes somos</Link>
        <Link href="/contact" style={{padding:'10px',color:'#99806c',fontWeight: 600,fontSize: '16px'}}>Contacto</Link>
      </div>


      {/* Hamburger */}
      <span
        onClick={() => setMenuOpen(!menuOpen)}
        style={{position:'absolute',top:'5px',left:'5px',fontSize:'2em',cursor:'pointer'}}
        className="ham"
      >
        ☰
      </span>


      <h1 className="title" style={{color:'#99806c'}}>Flores de Guayaquil</h1>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobileMenu">
          <Link href="/">Inicio</Link>
          <Link href="/shop">Tienda</Link>
          <Link href="/shop/red">Rojo</Link>
          <Link href="/shop/mixed">Mixto</Link>
          <Link href="/about">Quienes somos</Link>
          <Link href="/contact">Contacto</Link>
        </div>
      )}


      <style>{`
        .header {
          width:100vw;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          background-color:#f9f3f0;
          height:85px;
        }

        .links {
          grid-column: 1;
          display:flex;
          padding-left:15px;
        }

        .title {
          grid-column: 2;
          justify-self: center;
        }

        .ham {
          display:none;
        }

        .mobileMenu {
          position:absolute;
          top:60px;
          left:0;
          width:100%;
          background:white;
          display:flex;
          flex-direction:column;
          padding:15px;
          gap:10px;
          border-top:1px solid #ddd;
        }

        @media (max-width: 800px) {
          .header {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .title {
            grid-column: 1;
            grid-row: 1;
            justify-self: center;
          }

          .links {
            grid-column: 1;
            grid-row: 2;
            justify-self: center;
          }
        }

        @media (max-width: 500px) {
          .links {
            display:none;
          }

          .ham {
            display:flex;
          }
        }
      `}</style>
    </section>
  );
}