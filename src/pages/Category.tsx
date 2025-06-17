
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getProductsByCategory } from '../data/products';

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  
  if (!category) {
    return <div>Category not found</div>;
  }

  const categoryProducts = getProductsByCategory(category);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-audio-dark text-white py-20">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-white capitalize">{category}</h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {categoryProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={product.categoryImage.desktop}
                      alt={product.name}
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    {product.new && <p className="overline">New Product</p>}
                    <h2 className="max-w-md">{product.name}</h2>
                    <p className="text-gray-600 leading-relaxed max-w-lg">
                      {product.description}
                    </p>
                    <div className="space-y-4">
                      <p className="text-h6">{formatPrice(product.price)}</p>
                      <Link 
                        to={`/product/${product.slug}`}
                        className="btn-primary inline-block"
                      >
                        See Product
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-20 bg-audio-gray-dark">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Headphones */}
            <div className="group text-center">
              <div className="bg-white rounded-lg p-8 mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
                  alt="Headphones"
                  className="w-40 h-40 object-cover mx-auto mb-6 rounded-full"
                />
                <h3 className="text-h6 mb-4">Headphones</h3>
                <Link 
                  to="/category/headphones"
                  className="inline-flex items-center text-audio-orange hover:text-audio-orange-light font-bold uppercase text-sm tracking-wider group"
                >
                  Shop <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Speakers */}
            <div className="group text-center">
              <div className="bg-white rounded-lg p-8 mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80"
                  alt="Speakers"
                  className="w-40 h-40 object-cover mx-auto mb-6 rounded-full"
                />
                <h3 className="text-h6 mb-4">Speakers</h3>
                <Link 
                  to="/category/speakers"
                  className="inline-flex items-center text-audio-orange hover:text-audio-orange-light font-bold uppercase text-sm tracking-wider group"
                >
                  Shop <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Earphones */}
            <div className="group text-center">
              <div className="bg-white rounded-lg p-8 mb-6 group-hover:shadow-lg transition-shadow duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80"
                  alt="Earphones"
                  className="w-40 h-40 object-cover mx-auto mb-6 rounded-full"
                />
                <h3 className="text-h6 mb-4">Earphones</h3>
                <Link 
                  to="/category/earphones"
                  className="inline-flex items-center text-audio-orange hover:text-audio-orange-light font-bold uppercase text-sm tracking-wider group"
                >
                  Shop <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;
