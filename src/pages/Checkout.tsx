
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface CheckoutForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipCode: string;
  city: string;
  country: string;
  paymentMethod: 'e-money' | 'cash';
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { state, getTotalPrice, getShipping, getVAT, getGrandTotal, clearCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderNumber] = useState(() => Math.random().toString(36).substr(2, 9).toUpperCase());

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<CheckoutForm>();

  const paymentMethod = watch('paymentMethod', 'e-money');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const onSubmit = (data: CheckoutForm) => {
    console.log('Order submitted:', data);
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    clearCart();
    setShowConfirmation(false);
    navigate('/');
    toast.success('Order placed successfully!');
  };

  if (state.items.length === 0 && !showConfirmation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-h3 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to continue with checkout</p>
          <button 
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-audio-gray-dark">
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

        {/* Checkout Form */}
        <section className="pb-20">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg p-8">
                  <h1 className="text-h3 mb-8">Checkout</h1>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    {/* Billing Details */}
                    <div>
                      <h3 className="text-subtitle text-audio-orange mb-6">Billing Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold mb-2">Name</label>
                          <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-audio-orange ${
                              errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="Alexei Ward"
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2">Email Address</label>
                          <input
                            type="email"
                            {...register('email', { 
                              required: 'Email is required',
                              pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Invalid email address'
                              }
                            })}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-audio-orange ${
                              errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="alexei@mail.com"
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2">Phone Number</label>
                          <input
                            type="tel"
                            {...register('phone', { required: 'Phone number is required' })}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-audio-orange ${
                              errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="+1 202-555-0136"
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Shipping Info */}
                    <div>
                      <h3 className="text-subtitle text-audio-orange mb-6">Shipping Info</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-bold mb-2">Your Address</label>
                          <input
                            type="text"
                            {...register('address', { required: 'Address is required' })}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-audio-orange ${
                              errors.address ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="1137 Williams Avenue"
                          />
                          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-bold mb-2">ZIP Code</label>
                            <input
                              type="text"
                              {...register('zipCode', { required: 'ZIP code is required' })}
                              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-audio-orange ${
                                errors.zipCode ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="10001"
                            />
                            {errors.zipCode && <p className="text-red-500 text-sm mt-1">{errors.zipCode.message}</p>}
                          </div>
                          <div>
                            <label className="block text-sm font-bold mb-2">City</label>
                            <input
                              type="text"
                              {...register('city', { required: 'City is required' })}
                              className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-audio-orange ${
                                errors.city ? 'border-red-500' : 'border-gray-300'
                              }`}
                              placeholder="New York"
                            />
                            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-bold mb-2">Country</label>
                          <input
                            type="text"
                            {...register('country', { required: 'Country is required' })}
                            className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-audio-orange ${
                              errors.country ? 'border-red-500' : 'border-gray-300'
                            }`}
                            placeholder="United States"
                          />
                          {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                        </div>
                      </div>
                    </div>

                    {/* Payment Details */}
                    <div>
                      <h3 className="text-subtitle text-audio-orange mb-6">Payment Details</h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-bold mb-4">Payment Method</label>
                          <div className="space-y-3">
                            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-audio-orange">
                              <input
                                type="radio"
                                value="e-money"
                                {...register('paymentMethod')}
                                className="mr-3"
                              />
                              <span>e-Money</span>
                            </label>
                            <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:border-audio-orange">
                              <input
                                type="radio"
                                value="cash"
                                {...register('paymentMethod')}
                                className="mr-3"
                              />
                              <span>Cash on Delivery</span>
                            </label>
                          </div>
                        </div>

                        {paymentMethod === 'e-money' && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-bold mb-2">e-Money Number</label>
                              <input
                                type="text"
                                {...register('eMoneyNumber', { 
                                  required: paymentMethod === 'e-money' ? 'e-Money number is required' : false 
                                })}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-audio-orange ${
                                  errors.eMoneyNumber ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="238521993"
                              />
                              {errors.eMoneyNumber && <p className="text-red-500 text-sm mt-1">{errors.eMoneyNumber.message}</p>}
                            </div>
                            <div>
                              <label className="block text-sm font-bold mb-2">e-Money PIN</label>
                              <input
                                type="text"
                                {...register('eMoneyPin', { 
                                  required: paymentMethod === 'e-money' ? 'e-Money PIN is required' : false 
                                })}
                                className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-audio-orange ${
                                  errors.eMoneyPin ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="6891"
                              />
                              {errors.eMoneyPin && <p className="text-red-500 text-sm mt-1">{errors.eMoneyPin.message}</p>}
                            </div>
                          </div>
                        )}

                        {paymentMethod === 'cash' && (
                          <div className="p-6 bg-gray-50 rounded-lg">
                            <p className="text-gray-600">
                              The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives at your residence. 
                              Just make sure your address is correct so that your order will not be cancelled.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg p-8 sticky top-8">
                  <h3 className="text-h6 mb-6">Summary</h3>
                  
                  <div className="space-y-6 mb-8">
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
                        <span className="text-gray-500">x{item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 border-t pt-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total</span>
                      <span className="font-bold">{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-bold">{formatPrice(getShipping())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">VAT (Included)</span>
                      <span className="font-bold">{formatPrice(getVAT())}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold border-t pt-3">
                      <span>Grand Total</span>
                      <span className="text-audio-orange">{formatPrice(getGrandTotal())}</span>
                    </div>
                  </div>

                  <button 
                    onClick={handleSubmit(onSubmit)}
                    className="btn-primary w-full mt-8"
                  >
                    Continue & Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Order Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-8 max-w-md w-full animate-fade-in">
            <div className="text-center space-y-6">
              <CheckCircle size={48} className="text-green-500 mx-auto" />
              <div>
                <h3 className="text-h5 mb-2">Thank you for your order</h3>
                <p className="text-gray-600">Order #{orderNumber}</p>
              </div>
              <div className="text-left">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <img 
                      src={state.items[0]?.product.image.mobile}
                      alt={state.items[0]?.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h5 className="font-bold">{state.items[0]?.product.shortName}</h5>
                      <p className="text-gray-500 text-sm">{formatPrice(state.items[0]?.product.price || 0)}</p>
                    </div>
                    <span className="text-gray-500">x{state.items[0]?.quantity}</span>
                  </div>
                  {state.items.length > 1 && (
                    <div className="border-t pt-4 text-center">
                      <p className="text-gray-500 text-sm">
                        and {state.items.length - 1} other item{state.items.length > 2 ? 's' : ''}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex justify-between font-bold">
                  <span>Grand Total</span>
                  <span>{formatPrice(getGrandTotal())}</span>
                </div>
              </div>
              <button 
                onClick={handleConfirmationClose}
                className="btn-primary w-full"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
