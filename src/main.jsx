import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Download,
  Wrench,
  Search,
  Cog,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  FileText,
} from 'lucide-react';

import './styles.css';

const profile = {
  name: 'Carlos Meldaña',
  role: 'Asesor comercial',
  company: 'INFAMEL',
  phoneDisplay: '682 164 175',
  phoneLink: '+34682164175',
  emails: [
    'repuestosinfamel@hotmail.com',
    'tecnicoinfamel@hotmail.com',
  ],
  location: 'Torralba de Calatrava (Ciudad Real)',
  whatsappMessage:
    'Hola Carlos, he visto la web de INFAMEL y quería consultaros sobre maquinaria o repuestos.',
};

// Añade aquí tus PDF en public/docs y crea una entrada por documento.
// Ejemplo:
// {
//   title: 'Catálogo de repuestos',
//   description: 'Gama de repuestos disponibles.',
//   file: '/docs/catalogo-repuestos.pdf',
//   category: 'Catálogo'
// }

const documents = [];

const brands = [
  'CAT',
  'JCB',
  'KOMATSU',
  'CASE',
  'NEW HOLLAND',
  'VOLVO',
  'HITACHI',
  'DOOSAN',
];

const whatsappUrl = `https://wa.me/${profile.phoneLink.replace(
  '+',
  ''
)}?text=${encodeURIComponent(profile.whatsappMessage)}`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  
return (
  <>
    <header className="header">
      <a
        className="brand"
        href="#inicio"
        onClick={closeMenu}
        aria-label="INFAMEL, inicio"
      >
        <span className="brand-mark">
          <img src="/images/logo.png" alt="Logo INFAMEL" />
        </span>

        <span>
          <strong>
            INFA<span>MEL</span>
          </strong>
          <small>REPUESTOS Y REPARACIONES</small>
        </span>
      </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>

          <a href="#sobre-infamel" onClick={closeMenu}>
            Sobre INFAMEL
          </a>

          <a href="#descargas" onClick={closeMenu}>
            Descargas
          </a>

          <a
            className="nav-cta"
            href="#contacto"
            onClick={closeMenu}
          >
            Contactar <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO: ahora utiliza comercial-infamel.png */}
        <section className="hero" id="inicio">
          <div
            className="hero-image"
            style={{
              backgroundImage: "url('/images/tractor-campo.png')",
            }}
          />

          <div className="hero-shade" />

          <div className="hero-content wrap">
            <div className="eyebrow">
              <span />
              MAQUINARIA AGRÍCOLA Y DE OBRA PÚBLICA
            </div>

            <h1>
              La máquina
              <br />
              no puede parar<span>.</span>
            </h1>

            <p>
              Repuestos, reparaciones y búsqueda de maquinaria con
              atención cercana y soluciones prácticas para tu trabajo.
            </p>

            <div className="hero-actions">
              <a
                className="button button-yellow"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                Hablar con Carlos
              </a>

              <a className="button button-outline" href="#servicios">
                Ver servicios <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="hero-note">
              <ShieldCheck size={17} />
              Atención comercial personalizada
            </div>
          </div>

          <div className="hero-index">
            <span>01</span>
            <i />
            SOLUCIONES PARA PROFESIONALES
          </div>
        </section>

        <section className="brand-strip" aria-label="Marcas de maquinaria">
          <div className="wrap brand-strip-inner">
            <span className="brand-label">MARCAS DE REFERENCIA</span>

            <div className="brand-list">
              {brands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section wrap" id="servicios">
          <div className="section-heading">
            <div>
              <span className="eyebrow dark">
                QUÉ PODEMOS HACER POR TI
              </span>

              <h2>
                Soluciones para
                <br />
                seguir trabajando<span>.</span>
              </h2>
            </div>

            <p>
              Te ayudamos a encontrar el repuesto adecuado, resolver
              necesidades técnicas y localizar maquinaria de segunda mano.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">
                <Cog size={27} />
              </div>

              <span className="card-number">01 / REPUESTOS</span>

              <h3>Originales y alternativos</h3>

              <p>
                Orientación para localizar repuestos de maquinaria agrícola
                y de obras públicas.
              </p>

              <a href="#contacto">
                Consultar repuestos <ArrowUpRight size={16} />
              </a>
            </article>

            <article className="service-card service-featured">
              <div className="service-icon">
                <Wrench size={27} />
              </div>

              <span className="card-number">02 / ASISTENCIA</span>

              <h3>Servicio técnico</h3>

              <p>
                Atención a consultas y necesidades de servicio técnico
                para maquinaria.
              </p>

              <a href="#contacto">
                Consultar servicio <ArrowUpRight size={16} />
              </a>
            </article>

            <article className="service-card">
              <div className="service-icon">
                <Search size={27} />
              </div>

              <span className="card-number">03 / OCASIÓN</span>

              <h3>Búsqueda de maquinaria</h3>

              <p>
                ¿Buscas una máquina de segunda mano? Cuéntanos qué necesitas
                y te ayudamos a buscar opciones.
              </p>

              <a href="#contacto">
                Buscar maquinaria <ArrowUpRight size={16} />
              </a>
            </article>
          </div>
        </section>

        {/* SOBRE INFAMEL: conserva tractor-campo.png */}
        <section className="about" id="sobre-infamel">
          <div className="about-photo">
            <img
              src="/images/comercial-infamel.png"
              alt="Tractor agrícola trabajando en el campo"
            />

            <div className="photo-caption">
              <Truck size={18} />
              Maquinaria agrícola y de obras públicas
            </div>
          </div>

          <div className="about-copy">
            <span className="eyebrow dark">
              CERCA DE TU ACTIVIDAD
            </span>

            <h2>
              Trato directo.
              <br />
              Soluciones claras<span>.</span>
            </h2>

            <p>
              INFAMEL ofrece un punto de contacto para profesionales que
              necesitan repuestos, asistencia relacionada con maquinaria
              o ayuda para encontrar equipos de ocasión.
            </p>

            <p>
              El objetivo es sencillo: escuchar lo que necesitas y orientarte
              hacia la solución más adecuada para tu trabajo.
            </p>

            <div className="location-line">
              <MapPin size={19} />

              <span>
                <strong>Desde Torralba de Calatrava</strong>
                <small>Ciudad Real · España</small>
              </span>
            </div>

            <a className="text-link" href="#contacto">
              Conoce a tu contacto comercial <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="downloads section wrap" id="descargas">
          <div className="section-heading">
            <div>
              <span className="eyebrow dark">
                DOCUMENTACIÓN ÚTIL
              </span>

              <h2>
                Catálogos y
                <br />
                descargables<span>.</span>
              </h2>
            </div>

            <p>
              Accede a catálogos, fichas técnicas y documentación comercial
              en PDF. Esta sección se irá ampliando con los archivos
              disponibles.
            </p>
          </div>

          {documents.length ? (
            <div className="documents-grid">
              {documents.map((doc) => (
                <article className="document-card" key={doc.file}>
                  <div className="pdf-icon">
                    <FileText size={24} />
                  </div>

                  <div className="document-info">
                    <span>{doc.category || 'DOCUMENTO PDF'}</span>
                    <h3>{doc.title}</h3>
                    <p>{doc.description}</p>
                  </div>

                  <a
                    className="download-link"
                    href={doc.file}
                    download
                    aria-label={`Descargar ${doc.title}`}
                  >
                    <Download size={19} />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <div className="downloads-empty">
              <div className="empty-icon">
                <Download size={25} />
              </div>

              <div>
                <h3>Próximamente, documentación para descargar</h3>

                <p>
                  Estamos preparando los catálogos y fichas que podremos
                  compartir. Si necesitas un documento concreto, contacta
                  directamente con Carlos.
                </p>
              </div>

              <a
                className="button button-dark"
                href={`mailto:${profile.emails[0]}?subject=${encodeURIComponent(
                  'Solicitud de catálogo o ficha técnica'
                )}`}
              >
                Solicitar documentación <ArrowUpRight size={16} />
              </a>
            </div>
          )}

          <p className="downloads-hint">
            <FileText size={15} />
            Los documentos publicados aquí serán accesibles públicamente.
            Solo se incluirán archivos autorizados para su distribución.
          </p>
        </section>

        <section className="contact" id="contacto">
          <div className="wrap contact-inner">
            <div className="contact-intro">
              <span className="eyebrow">CONTACTO DIRECTO</span>

              <h2>
                ¿Qué necesitas
                <br />
                para tu máquina<span>?</span>
              </h2>

              <p>
                Cuéntanos qué repuesto buscas o qué maquinaria necesitas
                localizar.
              </p>

              <a
                className="button button-yellow"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-person">
                <div className="avatar">CM</div>

                <div>
                  <h3>{profile.name}</h3>
                  <p>
                    {profile.role} · {profile.company}
                  </p>
                </div>
              </div>

              <a
                className="contact-row"
                href={`tel:${profile.phoneLink}`}
              >
                <span className="contact-icon">
                  <Phone size={19} />
                </span>

                <span>
                  <small>LLÁMAME</small>
                  <strong>{profile.phoneDisplay}</strong>
                </span>

                <ArrowUpRight className="row-arrow" size={17} />
              </a>

              <a
                className="contact-row"
                href={`mailto:${profile.emails[0]}`}
              >
                <span className="contact-icon">
                  <Mail size={19} />
                </span>

                <span>
                  <small>REPUESTOS</small>
                  <strong>{profile.emails[0]}</strong>
                </span>

                <ArrowUpRight className="row-arrow" size={17} />
              </a>

              <a
                className="contact-row"
                href={`mailto:${profile.emails[1]}`}
              >
                <span className="contact-icon">
                  <Mail size={19} />
                </span>

                <span>
                  <small>SERVICIO TÉCNICO</small>
                  <strong>{profile.emails[1]}</strong>
                </span>

                <ArrowUpRight className="row-arrow" size={17} />
              </a>

              <div className="contact-row location-row">
                <span className="contact-icon">
                  <MapPin size={19} />
                </span>

                <span>
                  <small>UBICACIÓN</small>
                  <strong>{profile.location}</strong>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark">
              <Wrench size={21} />
            </span>

            <span>
              <strong>
                INFA<span>MEL</span>
              </strong>
              <small>REPUESTOS Y REPARACIONES</small>
            </span>
          </a>

          <p>Repuestos, maquinaria, obras públicas y agrícola.</p>

          <a href="#inicio" className="back-top">
            VOLVER ARRIBA ↑
          </a>
        </div>

        <div className="wrap footer-bottom">
          <span>
            © {new Date().getFullYear()} INFAMEL · Carlos Meldaña
          </span>

          <span>Atención comercial directa</span>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
