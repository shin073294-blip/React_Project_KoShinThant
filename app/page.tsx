'use client';

import React, { useState } from "react";
import Button from '@/components/button';
import TabBar from '@/components/tab-bar';
import Card from '@/components/card';

const MENU_DATA = [
  { id: 1, name: "Madagascar Vanilla Cold Brew", category: "Brew", description: "24-hour slow-steeped microbatch brew with pure sweet cream.", price: 4.85, isPopular: true, isAvailable: true },
  { id: 2, name: "Smoked Lavender Cappuccino", category: "Espresso", description: "Organic lavender syrup, toasted marshmallow foam dust.", price: 5.25, isPopular: false, isAvailable: true },
  { id: 3, name: "Warm Sea-Salt Caramel Croissant", category: "Bakery", description: "House flaky sourdough layers with hand-harvested flaky French sea salt.", price: 3.95, isPopular: true, isAvailable: true },
  { id: 4, name: "Double Espresso Ristretto", category: "Espresso", description: "Short pull espresso pulling rich dark cocoa and citrus notes.", price: 3.50, isPopular: false, isAvailable: true },
  { id: 5, name: "Sourdough Pistachio Cardamom Bun", category: "Bakery", description: "Fresh oven-pulled dough filled with roasted pistachio cardamom cream.", price: 4.25, isPopular: false, isAvailable: false },
  { id: 6, name: "Nitrogen Infused Cascara Tea", category: "Signature", description: "Effervescent tonic with dried coffee cherry fruit notes.", price: 5.50, isPopular: false, isAvailable: true }
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Brew', 'Espresso', 'Bakery', 'Signature'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_DATA 
    : MENU_DATA.filter(item => item.category === activeCategory);

  return (
    <div style={styles.container}>
      
      {/* HEADER SECTION */}
      <header style={styles.header}>
        <div style={styles.logoBox}>☕</div>
        <div>
          <span style={styles.brandTag}>AURA BREW COUNTER</span>
          <h1 style={styles.mainTitle}>Interactive Brew-Bar Ordering Terminal</h1>
        </div>
      </header>

      {/* FILTER TABS NAVIGATION */}
      <TabBar 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />

      {/* SUBHEADING SUBMETA */}
      <div style={styles.subHeader}>
        <h2 style={styles.sectionTitle}>Fresh Off the Roaster ({filteredItems.length} items found)</h2>
        <span style={styles.hintText}>Click headers above to inspect filter branches.</span>
      </div>

      {/* PRODUCT GRID CONTAINER */}
      <main style={styles.grid}>
        {filteredItems.map(item => (
          <Card key={item.id} item={item} />
        ))}
      </main>

      {/* CLASSROOM TRACEPOINT FOOTER BOX */}
      <footer style={styles.noticeBox}>
        <span style={styles.noticeIcon}>ⓘ</span>
        <p style={styles.noticeText}>
          <strong>Classroom Architecture Tracepoint:</strong> Keep browser DevTools or source files open inside the simulator workspace. The item grid renders custom components, passing details downwards with properties, handling button clicks dynamically, and repainting views instantly when state indices change.
        </p>
      </footer>

    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
    backgroundColor: '#F8FAFC',
    padding: '40px',
    minHeight: '100vh',
    color: '#334155',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    marginBottom: '35px',
  },
  logoBox: {
    backgroundColor: '#C05621',
    borderRadius: '16px',
    width: '56px',
    height: '56px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '26px',
    color: '#FFF'
  },
  brandTag: {
    backgroundColor: '#FEFCBF',
    color: '#B7791F',
    fontWeight: 'bold',
    fontSize: '11px',
    padding: '4px 8px',
    borderRadius: '4px',
    letterSpacing: '0.5px',
  },
  mainTitle: {
    margin: '6px 0 0 0',
    fontSize: '26px',
    fontWeight: '800',
    color: '#0F172A',
  },
  subHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '16px',
    fontWeight: '700',
    color: '#1E293B',
  },
  hintText: {
    fontSize: '13px',
    color: '#94A3B8',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '24px',
    marginBottom: '40px',
  },
  noticeBox: {
    backgroundColor: '#FFFDF5',
    border: '1px solid #FEF3C7',
    borderRadius: '12px',
    padding: '16px 20px',
    display: 'flex',
    gap: '12px',
  },
  noticeIcon: {
    color: '#D97706',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  noticeText: {
    margin: 0,
    fontSize: '13px',
    color: '#92400E',
    lineHeight: '1.5',
  }
};