"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Colori brand
  const mattone = '#800020';
  const panna = '#ffefcc';

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false); // Nasconde se scorri giù
        } else {
          setIsVisible(true); // Mostra se scorri su
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';

    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '90px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          zIndex: 1000,
          transition: 'transform 0.4s ease-in-out',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{ width: '92%', maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* LOGO */}
          <Link href="/">
            <Image src="/logo.png" alt="Il Tulipano" width={140} height={50} priority style={{ objectFit: 'contain' }} />
          </Link>

          {/* NAVBAR DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
            <Link href="/" className="hover:text-[#E5B54F] transition text-[#333333]">Home</Link>
            <Link href="/informazioni" className="hover:text-[#E5B54F] transition text-[#333333]">Informazioni</Link>
            
            {/* Dropdown Menù */}
            <div className="relative group" onMouseEnter={() => setActiveDropdown('menu')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="flex items-center gap-1 hover:text-[#E5B54F] transition uppercase outline-none text-[#333333]">
                Menù <ChevronDown size={12} />
              </button>
              {activeDropdown === 'menu' && (
                <div className="absolute top-full left-0 pt-4 w-48 transition-all">
                  <div className="bg-white shadow-xl border-t-4 border-[#800020] py-2 rounded-sm">
                    <Link href="/menu" className="block px-6 py-3 hover:bg-gray-50 text-[13px] normal-case text-[#333333]">Menù Completo</Link>
                    <Link href="/pizza-del-mese" className="block px-6 py-3 hover:bg-gray-50 text-[13px] normal-case text-[#333333]">Pizza del Mese</Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/galleria" className="hover:text-[#E5B54F] transition text-[#333333]">Galleria</Link>

            <Link href="/contatti" className="hover:text-[#E5B54F] transition text-[#333333]">Contatti</Link>

            <Link href="tel:0599110390">
              <button style={{ backgroundColor: mattone, color: '#fff', padding: '10px 20px', fontSize: '10px', letterSpacing: '2px' }} className="hover:bg-[#600018] transition shadow-md">
                PRENOTA
              </button>
            </Link>
          </nav>

          {/* HAMBURGER (MOBILE) */}
          <button className="lg:hidden" onClick={() => setIsMenuOpen(true)}>
            <Menu size={32} color={mattone} />
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: mattone,
        zIndex: 2000,
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.5s ease',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 5%' }}>
          <Image src="/logo.png" alt="Logo" width={120} height={40} style={{ filter: 'brightness(0) invert(1)' }} />
          <button onClick={() => setIsMenuOpen(false)}><X size={40} color="#fff" /></button>
        </div>
        <nav style={{ padding: '40px 10%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-serif italic">Home</Link>
          <Link href="/menu" onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-serif italic">Il Menù</Link>
          <Link href="/prenota-un-tavolo" onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-serif italic">Prenota</Link>
          <Link href="tel:0599110390" style={{ border: '1px solid #fff', color: '#fff', textAlign: 'center', padding: '15px', borderRadius: '50px' }}>
            Chiama Ora
          </Link>
        </nav>
      </div>
    </>
  );
}