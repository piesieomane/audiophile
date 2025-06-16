
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { 
    state, 
    closeCart, 
    updateQuantity, 
    removeItem, 
    clearCart,
    getTotalItems,
    getTotalPrice 
  } = useCart();

  if (!state.isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={closeCart}
      />
      
      {/* Cart Panel */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 animate-slide-in shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-h5">Cart ({getTotalItems()})</h2>
            <button
              onClick={closeCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Your cart is empty</p>
                <Link 
                  to="/"
                  onClick={closeCart}
                  className="btn-primary inline-block"
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Clear All Button */}
                <div className="flex justify-between items-center">
                  <button
                    onClick={clearCart}
                    className="text-sm text-gray-500 hover:text-audio-orange underline transition-colors"
                  >
                    Remove all
                  </button>
                </div>

                {/* Items List */}
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex items-center space-x-4">
                    <img 
                      src={item.product.image.mobile}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold">{item.product.shortName}</h4>
                      <p className="text-gray-500">{formatPrice(item.product.price)}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {state.items.length > 0 && (
            <div className="p-6 border-t space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-h6">Total</span>
                <span className="text-h6">{formatPrice(getTotalPrice())}</span>
              </div>
              <Link
                to="/checkout"
                onClick={closeCart}
                className="btn-primary w-full block text-center"
              >
                Checkout
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
