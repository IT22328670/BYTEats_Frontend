// app/page.tsx
import Link from 'next/link';
import './globals.css'; 

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <h1 className="title">Ready to order from BYTEats?</h1>
        <h3 className="subtitle">Your favorite food delivery service</h3>
        
        <div className="cta-box">
          <p className="cta-text">Proceed to checkout to place your order and make payment.</p>
          
          <Link href="/payment/checkout" className="btn">
            Go to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}