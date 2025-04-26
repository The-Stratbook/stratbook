import React from 'react';
import Layout from '../../layouts/Layout';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>
          At The Stratbook, we value your privacy. This policy outlines how we collect, use, and protect your data:
        </p>
        <ul className="list-disc list-inside my-4">
          <li>We do not collect personal data unless explicitly provided by you.</li>
          <li>We may use third-party services like Microsoft Clarity for analytics purposes.</li>
          <li>Cookies may be used to enhance your browsing experience.</li>
        </ul>
        <p>
          For questions or concerns, please contact us at <a href="https://discord.gg/vBt738jk" target="_blank" rel="noopener noreferrer"  className="link link-primary">Discord</a>.
        </p>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;