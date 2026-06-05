import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-[90vw] bg-[#F9F3F0] px-6 py-12 text-[1.2em]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">

        {/* Menu */}
        <div className="space-y-4">
          <h2 className="text-[1.2em] font-semibold">Menu</h2>
          <div className="flex flex-col gap-2 text-[1.2em] text-gray-700">
            <Link href="/">Inicio</Link>
            <Link href="/shop">Tienda</Link>
            <Link href="/about">Quiénes somos</Link>
            <Link href="/contact">Contacto</Link>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-5" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <h2 className="text-[1.2em] font-semibold">Florinda Floreria</h2>

          <div className="flex items-start gap-3 text-[1.2em] text-gray-700" style={{display:'flex',alignItems:'center'}}>
            <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor">
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
            </svg>
            <p>Guayaquil, Ecuador</p>
          </div>

          <div className="flex items-start gap-3 text-[1.2em] text-gray-700"style={{display:'flex',alignItems:'center'}}>
            <svg width="20" height="20" viewBox="0 0 512 512" fill="currentColor">
              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
            </svg>
            <p>Siempre</p>
          </div>

          <div className="flex items-start gap-3 text-[1.2em] text-gray-700"style={{display:'flex',alignItems:'center'}}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L15.117 4.05321" />
            </svg>
            <p>+593 98 805 3010</p>
          </div>

          <div className="flex items-start gap-3 text-[1.2em] text-gray-700" style={{display:'flex',alignItems:'center'}}>
            <svg width={20}height={20}viewBox="0 0 24 24"fill="none">
  <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"stroke="currentColor"strokeWidth={2}strokeLinecap="round"strokeLinejoin="round"/>
  <rect x="3"y="5"width="18"height="14"rx="2"stroke="currentColor"strokeWidth={2}strokeLinecap="round"/>
</svg>
            <p>florindafloreria@gmail.com</p>
          </div>

          {/* Social Icons */}
          <div style={{display:'flex'}}>
						<Link href="https://www.instagram.com/florindafloreria?igsh=MXE5dXgwMGJrcjM4cg%3D%3D"><svg style={{width:'50px',height:'50px'}} viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></Link>
						<Link href="https://www.facebook.com/profile.php?id=61550930751193&rdid=qqMWc05dsFZPGmXf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18L9TBbDMA%2F#"><svg width="50px"
     height="50px"
     viewBox="-5 0 20 20">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-385.000000, -7399.000000)" fill="#000000">
            <g transform="translate(56.000000, 160.000000)">
                <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"/>
            </g>
        </g>
    </g>
</svg></Link>
            </div>
        </div>

        {/* Legal */}
        <div className="space-y-4">
          <h2 className="text-[1.2em] font-semibold">Nosotros</h2>
          <div className="flex flex-col gap-2 text-[1.2em] text-gray-700">
            <p>Preguntas Frecuentes</p>
            <p>Políticas de Privacidad</p>
            <p>Términos y Condiciones</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Flores de Guayaquil. Todos los derechos reservados.
      </div>
    </footer>
  );
}
