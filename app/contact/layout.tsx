import './styles/globals.css';
import type { ReactNode } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-softBlack py-12">
      <Header />
      <main className="min-h-[60vh]">{children}</main>
      <Footer />
    </div>
  );
}
