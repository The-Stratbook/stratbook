import React from 'react';
import Layout from '../../components/templates/Layout';

const TermsOfService = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p>
          Welcome to R6 Tips & Tricks! By using our website, you agree to the following terms and conditions:
        </p>
        <ul className="list-disc list-inside my-4">
          <li>You may not use this website for any unlawful purposes.</li>
          <li>All content is provided "as-is" without any guarantees of accuracy.</li>
          <li>We reserve the right to modify or terminate the service at any time.</li>
        </ul>
        <p>
          For more information, please contact us at <a href="https://discord.gg/CmyzpXV6m2" target="_blank" rel="noopener noreferrer"  className="link link-primary">Discord</a>.
        </p>
      </div>
    </Layout>
  );
};

export default TermsOfService;