import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';

const BlogsPage = () => {
  const [serverCopiedCode, setCopiedCode] = useState(false);
  const [clientCopiedCode, setClientCopiedCode] = useState(false);

  const handleCopyServerCode = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000); 
  };
  const handleCopyClientCode = () => {
    setClientCopiedCode(true);
    setTimeout(() => setClientCopiedCode(false), 2000); 
  };

  return (
    <div>
      <div className="bg-base-100  py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-info sm:text-4xl" data-aos="zoom-in-down">
            Welcome to Our Blog
          </h2>
          <p className="mt-2 text-xl font-serif" data-aos="zoom-in-down">
            Here you'll find informative articles and insights.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
         
          <Link to={'/blogs/access-tokens'} className="bg-white overflow-hidden shadow rounded-lg hover:scale-105 hover:transition-all ease-in hover:bg-violet-200" data-aos="fade-up">
            <img src="https://www.descope.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxqb1f63q68s1%2F5KRSBrWiRfJRaFicCsU5zB%2F4e44750024de8867c7f553e6baa09d3e%2FHow_access_tokens_work_image.png&w=3840&q=75" alt="Blog Image 1" className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-info  cmb-2">
              Understanding Access Tokens and Refresh Tokens

              </h3>
              <p className="text-gray-600">
              Learn about access tokens and refresh tokens, how they work, and
                where to store them on the client side.

              </p>
            </div>
          </Link>
          <Link to={'/blogs/express-js'} className="bg-white overflow-hidden shadow rounded-lg hover:scale-105 hover:transition-all ease-in hover:bg-violet-200" data-aos="fade-up">
            <img src="https://media.licdn.com/dms/image/D4E12AQEBg943ptCYpg/article-cover_image-shrink_720_1280/0/1686391647921?e=2147483647&v=beta&t=sTfwUvcIfW7Fuby7hMluDfuRJK3HfYMMWc2SyZR7-GA" alt="Blog Image 1" className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-info  cmb-2">
              Introduction to Express.js


              </h3>
              <p className="text-gray-600">
              Discover what Express.js is and how it simplifies building web
                applications with Node.js.


              </p>
            </div>
          </Link>
          <Link to={'/blogs/nest-js'} className="bg-white overflow-hidden shadow rounded-lg hover:scale-105 hover:transition-all ease-in hover:bg-violet-200" data-aos="fade-up">
            <img src="https://miro.medium.com/v2/resize:fit:1358/1*HaR3PoAfMXVhe4aM4ieSmw.png" alt="Blog Image 1" className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-info  cmb-2">
              Exploring NestJS

              </h3>
              <p className="text-gray-600">
              NestJS is a progressive Node.js framework that enhances
                developer productivity. Learn more about it here.

              </p>
            </div>
          </Link>
         
        </div>
      </div>
    </div>
    {/* JWT code and explanation section */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-info sm:text-4xl" data-aos="zoom-in-down">
          JWT Code and Explanation
        </h2>
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {/* Server-side code */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Server-side JWT Code</h3>
          <p className="text-gray-600 mb-4">This is the server-side code for generating JWT tokens.</p>
          <code className="block bg-gray-800 text-white rounded-lg p-4 text-sm overflow-x-auto">
            {`app.post("/jwt", logger, async (req, res) => {
  const user = req.body;
  console.log("user for token", user);
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.cookie("token", token, cookieOptions).send({ success: true });
});`}
          </code>
          <CopyToClipboard text={`app.post("/jwt", logger, async (req, res) => {
  const user = req.body;
  console.log("user for token", user);
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);

  res.cookie("token", token, cookieOptions).send({ success: true });
});`} onCopy={handleCopyServerCode}>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {serverCopiedCode ? 'Copied!' : 'Copy code'}
            </button>
          </CopyToClipboard>
          <ul className="text-gray-600 mt-4 ml-4 list-disc">
            <li>Defines an endpoint `/jwt` for generating JWT tokens.</li>
            <li>Expects a POST request with user data in the request body.</li>
            <li>Generates a JWT token using user data and signs it.</li>
            <li>Sets the generated token as a cookie named "token".</li>
          </ul>
        </div>
        {/* Client-side code */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Client-side JWT Code</h3>
          <p className="text-gray-600 mb-4">This is the client-side code for using JWT tokens.</p>
          <code className="block bg-gray-800 text-white rounded-lg p-4 text-sm overflow-x-auto">
            {`const makeAuthenticatedRequest = async () => {
  const token = 'your_access_token_here';

  try {
    const response = await axios.post('/api/protected-route', {
      // Your request data here
    }, {
      headers: {
        'Authorization': \`Bearer \${token}\`
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error making authenticated request:', error);
  }
};

makeAuthenticatedRequest();`}
          </code>
          <CopyToClipboard text={`const makeAuthenticatedRequest = async () => {
  const token = 'your_access_token_here';

  try {
    const response = await axios.post('/api/protected-route', {
      // Your request data here
    }, {
      headers: {
        'Authorization': \`Bearer \${token}\`
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error('Error making authenticated request:', error);
  }
};

makeAuthenticatedRequest();`} onCopy={handleCopyClientCode}>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {clientCopiedCode ? 'Copied!' : 'Copy code'}
            </button>
          </CopyToClipboard>
          <ul className="text-gray-600 mt-4 ml-4 list-disc">
            <li>Makes an authenticated request to a protected route on the server using a JWT.</li>
            <li>Uses Axios to make the HTTP request.</li>
            <li>Includes the access token in the request headers as an authorization bearer token.</li>
            <li>Logs the response data if the request is successful.</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BlogsPage;
