import React from "react";

const ShippingPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Shipping Policy</h1>

        <p className="mb-4">
          At Tradezy, we are dedicated to providing you with a seamless shopping experience. Please review our shipping policy to understand how we handle your orders.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">1. Shipping Locations</h2>
        <p className="mb-4">
          We currently only ship to addresses within India. Unfortunately, we do not offer international shipping at this time.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">2. Shipping Timeline</h2>
        <p className="mb-4">
          All orders are processed within 1-2 business days. After processing, your order will be shipped within a minimum of <strong>3 days</strong> and a maximum of <strong>10 days</strong> from the date of order confirmation.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">3. Shipping Charges</h2>
        <p className="mb-4">
          We are pleased to inform you that we do not charge any shipping fees for orders shipped within India. The total cost you see at checkout will be the final amount you pay.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">4. Order Tracking</h2>
        <p className="mb-4">
          Once your order is shipped, you will receive a confirmation email with tracking information so you can follow your order's journey.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">5. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our shipping policy or your order, please feel free to reach out to us:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Email: ayush.xyz1625@gmail.com</li>
          <li>Phone: +91 8076925810</li>
          <li>Address: WZ-587b ring road, naraina, New Delhi</li>
        </ul>

        <p className="mt-8">
          Last updated: 14 Oct, 2024
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
