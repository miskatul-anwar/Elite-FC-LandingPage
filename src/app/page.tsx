'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './page.css';
import { ArrowRight, Trophy, Users, Calendar, Home as HomeIcon, Info, Mail, Map, CalendarDays } from 'lucide-react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const InstagramIcon = ({ size = 24, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FootballField3D = dynamic(() => import('@/components/FootballField3D'), { 
  ssr: false, 
  loading: () => <div className="tactics-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Loading Tactics...</div> 
});

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/elite-fc-logo.webp" alt="Elite FC Logo" width={40} height={40} style={{ objectFit: 'contain' }} />
            <div><span className="text-gradient">ELITE</span> FC</div>
          </div>
          <div className="nav-links">
            <a href="#home" className="nav-link" title="Home"><HomeIcon size={24} /></a>
            <a href="#about" className="nav-link" title="About"><Info size={24} /></a>
            <a href="#squad" className="nav-link" title="Squad"><Users size={24} /></a>
            <a href="#tactics" className="nav-link" title="Tactics"><Map size={24} /></a>
            <a href="#contact" className="nav-link" title="Contact"><Mail size={24} /></a>
            <a href="https://www.instagram.com/_elite_fc26?igsh=eTFzNGl4ejV4Y2hm" target="_blank" rel="noopener noreferrer" className="nav-link" title="Instagram"><InstagramIcon size={24} /></a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-bg">
          <Image 
            src="/hero-bg.jpg" 
            alt="Elite FC Stadium" 
            fill
            priority
            style={{ objectFit: 'cover', filter: 'brightness(0.3) contrast(1.2)' }}
          />
        </div>
        <div className="hero-content container">
          <h1 className="hero-title">Forge Your <span className="text-gradient">Legacy</span></h1>
          <p className="hero-subtitle">Experience the passion and glory of the world's most elite football club.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn-primary" style={{ textDecoration: 'none' }}>
              Join the Club <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </a>
            <a href="#fixtures" className="btn-secondary" style={{ textDecoration: 'none' }}>
              View Fixtures
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">More Than a <span className="text-gradient">Club</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Built on a foundation of excellence, we strive for greatness on and off the pitch. Our history is written in gold.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', marginTop: '40px' }}>
            <div className="glass" style={{ padding: '40px', borderRadius: '12px', textAlign: 'center', flex: '1', minWidth: '250px' }}>
              <Trophy size={48} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>50+ Trophies</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>A legacy of winning and dominating top-flight football.</p>
            </div>
            <div className="glass" style={{ padding: '40px', borderRadius: '12px', textAlign: 'center', flex: '1', minWidth: '250px' }}>
              <Users size={48} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Elite Academy</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Developing the next generation of world-class talent.</p>
            </div>
            <div className="glass" style={{ padding: '40px', borderRadius: '12px', textAlign: 'center', flex: '1', minWidth: '250px' }}>
              <Calendar size={48} color="var(--color-primary)" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Regional Tours</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>Bringing the beautiful game to our fans across the region.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="squad" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">The <span className="text-gradient">First Team</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Meet the warriors who defend our badge every single matchday.
            </p>
          </div>
          <div className="squad-grid">
            {[
              { name: "Tawsin", role: "Striker", image: "/tawsin-st.jpg" },
              { name: "Wasi", role: "Right Winger", image: "/wasi-rw.jpg" },
              { name: "Arif", role: "Central Midfielder", image: "/arif-cm.jpg" },
              { name: "Ridwan", role: "Central Midfielder", image: "/ridwan-cm.jpg" },
              { name: "Ibrahim", role: "Center Back", image: "/ibrahim-cb.jpg" },
              { name: "Rowdro", role: "Center Back", image: "/rowdro-cb.jpg" },
              { name: "Sameer", role: "Center Back", image: "/sameer-cb.jpg" },
              { name: "Fatin", role: "Goalkeeper", image: "/fatin-gk.jpg" },
              { name: "Taheem", role: "Goalkeeper", image: "/taheem-gk.jpg" }
            ].map((player, index) => (
              <motion.div 
                key={index} 
                className="player-card glass"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02, boxShadow: "0 20px 40px rgba(204, 255, 0, 0.15)" }}
              >
                <div className="player-img-wrapper">
                  <Image 
                    src={player.image} 
                    alt={player.name} 
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
                <div className="player-info">
                  <div className="player-name">{player.name}</div>
                  <div style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {player.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="fixtures" className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Upcoming <span className="text-gradient">Fixtures</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Catch Elite FC in action in our upcoming regional clashes.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { opponent: "Neon United", date: "Oct 12", time: "20:00", location: "Aurum Arena (Home)", competition: "Regional League" },
              { opponent: "Cyber City FC", date: "Oct 18", time: "18:30", location: "Cyber Stadium (Away)", competition: "Regional League" },
              { opponent: "Quantum Athletics", date: "Oct 25", time: "21:00", location: "Aurum Arena (Home)", competition: "Regional Cup" }
            ].map((fixture, i) => (
              <motion.div 
                key={i}
                className="fixture-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div>
                  <div style={{ color: 'var(--color-primary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>{fixture.competition}</div>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Elite FC <span style={{ color: 'var(--color-text-muted)', margin: '0 10px' }}>vs</span> {fixture.opponent}</h3>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{fixture.date} • {fixture.time}</div>
                  <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>{fixture.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="tactics" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Matchday <span className="text-gradient">Tactics</span></h2>
            <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Explore our standard formation. Hover over the players to see their positions on the pitch.
            </p>
          </div>
          <FootballField3D />
        </div>
      </section>

      <section id="contact" className="section" style={{ background: 'linear-gradient(to top, var(--color-surface) 0%, transparent 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Get in <span className="text-gradient">Touch</span></h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '40px' }}>Have questions about the club? We'd love to hear from you.</p>
          <div style={{ padding: '20px', borderRadius: '12px', display: 'inline-block', border: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.02)' }}>
            <p style={{ color: 'var(--color-text-muted)', margin: 0, marginBottom: '15px' }}>For official inquiries, sponsorships, or direct contact:</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <a href="mailto:rowdroex1sts@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-primary)', textDecoration: 'none' }}>
                <Mail size={24} /> rowdroex1sts@gmail.com
              </a>
              <a href="https://www.instagram.com/_elite_fc26?igsh=eTFzNGl4ejV4Y2hm" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-accent)', textDecoration: 'none' }}>
                <InstagramIcon size={24} /> @_elite_fc26
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <div className="nav-logo" style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src="/elite-fc-logo.webp" alt="Elite FC Logo" width={30} height={30} style={{ objectFit: 'contain' }} />
            <div><span className="text-gradient">ELITE</span> FC</div>
          </div>
          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Elite Football Club. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
