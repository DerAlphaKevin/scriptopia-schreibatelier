
import React from 'react';

const ProductCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => (
  <div className="group">
    <div className="overflow-hidden rounded-lg aspect-square mb-4 bg-scriptopia-beige relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
    </div>
    <h3 className="text-xl mb-2">{title}</h3>
    <p className="text-sm text-gray-600 font-light">{description}</p>
  </div>
);

export const Products: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-[#faf4e1]">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-4">Was dich erwartet</h2>
        <p className="text-gray-500 font-garamond italic text-lg">Ein kleiner Einblick in meine Kollektion</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <ProductCard 
          title="A5 Travelers Notebook – Natur" 
          description="Echtleder-Hülle in wunderschönem Naturton, die mit der Zeit eine einzigartige Patina entwickelt."
          image="/images/products/a5-natur.jpg"
        />
        <ProductCard 
          title="A5 Travelers Notebook – Design" 
          description="A5-Format mit verspielem, floralen Design aus hochwertigen Baumwollstoffen."
          image="/images/products/a5-design.jpg"
        />
        <ProductCard 
          title="A6 Travelers Notebook" 
          description="Kompaktes Format für unterwegs - alle Qualitätsmerkmale in handlicher Größe für deine täglichen Notizen."
          image="/images/products/a6-standard.jpg"
        />
      </div>
    </section>
  );
};
