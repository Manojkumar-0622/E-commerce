import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';

const CheckOut = () => {

  const { cart } = useContext(CartContext);

  // Cart items (temporary static data)
  const cartItems = [
    {
      id: 7,
      image: "/src/assets/arrivals/Quilted Crossbody Bag_1.jpg",
      name: "Quilted Crossbody Bag",
      price: 21,
      quantity: 2,
      stock: 0,
      total: 42
    },
    {
      id: 8,
      image: "/src/assets/arrivals/Retro Liner Socks_1.jpg",
      name: "Retro Liner Socks",
      price: 70,
      quantity: 1,
      stock: 23,
      total: 70
    }
  ];

  // Total amount
  const [total, setTotal] = useState(0);

  // User form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "India (IN)",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    notes: ""
  });

  // Calculate total
  useEffect(() => {
    let sum = 0;
    cartItems.forEach(item => {
      sum += item.total;
    });
    setTotal(sum);
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit handler
  const handleSubmit = () => {
    const orderData = {
      customer: formData,
      items: cartItems,
      totalAmount: total
    };

    console.log("ORDER DATA:", orderData);
  };

  return (
    <div>
      <div className='text-center py-6 text-3xl'>haute</div>

      <div className='text-center py-13 bg-gray-300'>
        <div className='text-[30px]'>Checkout</div>
        <div className='text-[19px] font-light'>Home / Checkout</div>
      </div>

      {/* IMPORTANT: items-start fixes auto height */}
      <div className='flex m-8 items-start gap-10'>

        {/* LEFT FORM */}
        <div className='w-[60%]'>

          <div className='flex gap-5'>
            <div>
              <div>First name <span className='text-red-500'>*</span></div>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className='border border-black/50 rounded outline-0 pl-3 mt-2 w-85.5 h-12'
              />
            </div>

            <div>
              <div>Last name <span className='text-red-500'>*</span></div>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className='border border-black/50 rounded outline-0 pl-3 mt-2 w-85 h-12'
              />
            </div>
          </div>

          <div className='mt-5'>
            <div>Company name (optional)</div>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className='border border-black/50 rounded w-[98%] h-12 outline-0 pl-3 mt-3'
            />
          </div>

          <div className='mt-5'>
            <div>Country / Region <span className='text-red-500'>*</span></div>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className='border border-black/50 rounded w-[98%] h-12 outline-0 pl-3 mt-3'
            />
          </div>

          <div className='mt-5'>
            <div>Street Address <span className='text-red-500'>*</span></div>
            <input
              type="text"
              name="street1"
              value={formData.street1}
              onChange={handleChange}
              placeholder="House number and street name"
              className='border border-black/50 rounded w-[98%] h-12 outline-0 pl-3 mt-3'
            />
            <input
              type="text"
              name="street2"
              value={formData.street2}
              onChange={handleChange}
              placeholder="Apartment, suite, unit, etc. (optional)"
              className='border border-black/50 rounded w-[98%] h-12 outline-0 pl-3 mt-3'
            />
          </div>

          <div className='mt-5'>
            <div>Town / City <span className='text-red-500'>*</span></div>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className='border border-black/50 rounded w-[98%] h-12 outline-0 pl-3 mt-3'
            />
          </div>

          <div className='mt-5'>
            <div>State <span className='text-red-500'>*</span></div>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className='border border-black/50 rounded w-[98%] h-12 outline-0 pl-3 mt-3'
            />
          </div>

          <div className='mt-5'>
            <div>ZIP Code <span className='text-red-500'>*</span></div>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className='border border-black/50 rounded w-[98%] h-12 outline-0 pl-3 mt-3'
            />
          </div>

          <div className='mt-5'>
            <div>Phone <span className='text-red-500'>*</span></div>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className='border border-black/50 rounded w-[98%] h-12 outline-0 pl-3 mt-3'
            />
          </div>

          <div className='mt-5'>
            <div>Email address <span className='text-red-500'>*</span></div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='border border-black/50 rounded w-[98%] h-12 outline-0 pl-3 mt-3'
            />
          </div>

          <div className='mt-10'>
            <div className='text-3xl font-semibold'>Additional information</div>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className='resize-none border-black/50 rounded border outline-0 mt-4 p-2 w-[98%] h-35'
            ></textarea>
          </div>

        </div>

        {/* RIGHT SUMMARY (AUTO HEIGHT FIXED) */}
        <div className='border-black/50 bg-gray-200 rounded mt-24 w-[35%] p-10 self-start'>
          <div className='flex font-semibold justify-between'>
            <div>PRODUCT</div>
            <div>SUBTOTAL</div>
          </div>

          <hr className='mt-3'/>

          {cart.map(item => (
            <div key={item.id}>
              <div className='flex justify-between mt-5'>
                <div>{item.name} x {item.quantity}</div>
                <div className='text-orange-600 font-semibold'>${item.total}.00</div>
              </div>
              <hr className='mt-3'/>
            </div>
          ))}

          <div className='flex justify-between mt-5 font-semibold'>
            <div>Subtotal</div>
            <div className='text-orange-600'>${total}.00</div>
          </div>

          <button
            onClick={handleSubmit}
            className='w-full mt-6 bg-black cursor-pointer text-white py-3 rounded'
          >
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default CheckOut;
