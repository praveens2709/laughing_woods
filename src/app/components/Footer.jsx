'use client';

import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '@styles/_footer.scss';
import { Container } from 'react-bootstrap';
import Button from './Button';

export default function Footer() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className='footer'>
      <Container>
        <div className='footerGrid pb-2'>
          <div className='brand'>
            <h2 className='company-name'>Laughing Wood Interiors</h2>
            <p>Experience fashion redefined. Your style, our curated collections. Shop now!</p>
            <p>We extend our heartfelt gratitude for choosing us. Thank you!</p>
          </div>

          <div className='footerLinks'>
            <h3>Menu</h3>
            <ul>
              <li onClick={scrollUp}><Link href="/">Home</Link></li>
              <li onClick={scrollUp}><Link href="/about">About</Link></li>
              <li onClick={scrollUp}><Link href="/portfolio">Portfolio</Link></li>
              <li onClick={scrollUp}><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className='contact'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <div className='iconWrapper'><FaPhoneAlt /></div>
                <span>+1 234 567 890</span>
              </li>
              <li>
                <div className='iconWrapper'><FaEnvelope /></div>
                <span>support@dopeshop.com</span>
              </li>
              <li>
                <div className='iconWrapper'><FaMapMarkerAlt /></div>
                <span>123 Fashion St, NY, USA</span>
              </li>
            </ul>
          </div>

          <div className='newsletter'>
            <h3>Newsletter</h3>
            <p>Be the first to know about new arrivals, lookbooks, sales & exclusive offers!</p>
            <form className='newsletterForm'>
              <input type="email" placeholder="Your Email" />
              <Button text="Subscribe" variant="primary" animate={true} />
            </form>
          </div>
        </div>

        <div className='socialIcons'>
          <div className='iconWrapper'><FaTwitter /></div>
          <div className='iconWrapper'><FaFacebookF /></div>
          <div className='iconWrapper'><FaInstagram /></div>
        </div>

        <div className='copyright'>
          <p>© 2024 DopeShope. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
