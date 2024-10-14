import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4">
          At [Your Website Name], we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing our website or using our services, you agree to the collection and use of information in accordance with this policy.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">1. Information We Collect</h2>
        <p className="mb-4">
          We collect the following personal information from you when you place an order on our website:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Shipping Address</li>
          <li>Postal Code</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 mt-6">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect from you for the following purposes:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>To process and deliver your orders.</li>
          <li>To contact you regarding your order or any issues related to delivery.</li>
          <li>To improve our services and customer experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 mt-6">3. Storing Your Information</h2>
        <p className="mb-4">
          Your personal information is securely stored in our database hosted on Firestore, a cloud-based platform provided by Google. Firestore uses advanced security measures to protect your data, including encryption and secure access controls.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">4. Sharing Your Information</h2>
        <p className="mb-4">
          We do not share your personal information with third parties except in the following cases:
        </p>
        <ul className="list-disc pl-8 mb-4">
          <li>When required by law or to comply with legal obligations.</li>
          <li>To protect our rights or property.</li>
          <li>To facilitate the delivery of your order through our delivery partners.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3 mt-6">5. Data Retention</h2>
        <p className="mb-4">
          We retain your personal information only as long as it is necessary for the purposes set out in this Privacy Policy, or as required by law. Once your information is no longer required, we securely delete it from our systems.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">6. Security of Your Information</h2>
        <p className="mb-4">
          We take the security of your personal information seriously. We use a variety of security technologies and procedures to help protect your personal information from unauthorized access, use, or disclosure. While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">7. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete the personal information we have about you. If you would like to make any changes to your information or have any concerns regarding your data, please contact us at ayush.xyz1625@gmail.com.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">8. Changes to This Privacy Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website.
        </p>

        <h2 className="text-2xl font-semibold mb-3 mt-6">9. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at ayush.xyz1625@gmail.com.
        </p>

        <p className="mt-8">
          Last updated: 14 Oct, 2024
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
