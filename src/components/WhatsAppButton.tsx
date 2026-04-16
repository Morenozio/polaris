'use client';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const phoneNumber = "6281277335701";
  const message = "Hello Ary, I would like to request a quote for chemical raw materials from PT Polaris.";
  
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.waButton}
      aria-label="Chat on WhatsApp"
    >
      <img src="/whatsapp-white.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
    </a>
  );
}
