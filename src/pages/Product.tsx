
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ArrowRight } from 'lucide-react';
import { getProductBySlug } from '../data/products';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';

const Product: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!slug) {
    return <div>Product not found</div>;
  }

  const product = getProductBySlug(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`${product.shortName} added to cart!`);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <section className="py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-audio-orange transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Go Back
          </button>
        </div>
      </section>

      {/* Product Details */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <img 
                src={product.image.desktop}
                alt={product.name}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6 animate-fade-in">
              {product.new && <p className="overline">New Product</p>}
              <h1 className="max-w-md">{product.name}</h1>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
              <p className="text-h6">{formatPrice(product.price)}</p>
              
              {/* Quantity and Add to Cart */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-audio-gray">
                  <button
                    onClick={decrementQuantity}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="btn-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Features and In the Box */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <div className="lg:col-span-2 space-y-6">
              <h3>Features</h3>
              <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                {product.features}
              </div>
            </div>
            <div className="space-y-6">
              <h3>In the Box</h3>
              <ul className="space-y-2">
                {product.includes.map((item, index) => (
                  <li key={index} className="flex">
                    <span className="text-audio-orange font-bold w-8">{item.quantity}x</span>
                    <span className="text-gray-600">{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            <div className="md:col-span-1">
              <img 
                src={product.gallery.first}
                alt={`${product.name} gallery 1`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-1">
              <img 
                src={product.gallery.second}
                alt={`${product.name} gallery 2`}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-2 lg:col-span-1">
              <img 
                src={product.gallery.third}
                alt={`${product.name} gallery 3`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* You may also like */}
          <div className="text-center">
            <h3 className="mb-12">You may also like</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.others.map((other, index) => (
                <div key={index} className="space-y-6">
                  <img 
                    src={other.image.desktop}
                    alt={other.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <h5>{other.name}</h5>
                  <Link 
                    to={`/product/${other.slug}`}
                    className="btn-primary inline-block"
                  >
                    See Product
                  </Link>
                </div>
              ))}
            </div>
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

export default Product;
