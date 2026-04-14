'use client';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppButton.module.css';

export default function WhatsAppButton() {
  const phoneNumber = "628111234567"; // Placeholder, replace with actual
  const message = "Hello PT Polaris, I would like to request a quote for chemical raw materials.";
  
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.waButton}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className={styles.icon} />
    </a>
  );
}
