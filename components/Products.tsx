
import React from 'react';

const ProductCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
  <div className="group">
    <div className="overflow-hidden rounded-3xl aspect-square mb-6 bg-[#d5c5b5] relative shadow-md w-4/5 mx-auto">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-multiply"
      />
    </div>
    <h3 className="text-2xl font-serif mb-3">{title}</h3>
    <p className="text-gray-600 font-light leading-relaxed">{description}</p>
  </div>
);

export const Products: React.FC = () => {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#e8dcc0' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4 font-serif">Meine Produkte</h2>
        <div className="w-16 h-1 bg-black/10 rounded-full mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductCard 
          title="Journal Cover (A5)" 
          description="Perfekt für intensive Gedanken, Ideen und kreative Projekte. Mit mehr Platz für detaillierte Skizzen, längere Texte und umfangreiche Sammlungen. Ideal für deine großen Abenteuer."
          image="/images/products/a5-natur.png"
        />
        <ProductCard 
          title="Journal Cover (A6)" 
          description="Praktisch und kompakt für den Alltag. Die handliche Größe passt in jede Tasche und ist perfekt für kurze Notizen, schnelle Gedanken und spontane Momente unterwegs."
          image="/images/products/a6-standard.png"
        />
      </div>
      </div>
    </section>
  );
};

