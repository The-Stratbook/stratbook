import React from 'react';
import Layout from '../../layouts/Layout';

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p>
          This website uses cookies to improve your experience. By using our website, you agree to the use of cookies as outlined below:
        </p>
        <ul className="list-disc list-inside my-4">
          <li>Cookies are used for analytics (e.g., Microsoft Clarity).</li>
          <li>Cookies may be used for personalized ads or affiliate links.</li>
          <li>You can disable cookies in your browser settings if you prefer.</li>
        </ul>
        <p>
          For more details, please contact us at <a href="https://discord.gg/vBt738jk" target="_blank" rel="noopener noreferrer"  className="link link-primary">Discord</a>
        </p>
      </div>
    </Layout>
  );
};

export default CookiePolicy;