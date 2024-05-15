

const AccessTokensBlog = () => {
  return (
    <div className=" lg:min-h-[90vh] overflow-hidden" style={{backgroundImage: 'url("https://www.descope.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fxqb1f63q68s1%2F5KRSBrWiRfJRaFicCsU5zB%2F4e44750024de8867c7f553e6baa09d3e%2FHow_access_tokens_work_image.png&w=3840&q=75")',objectFit:'cover' ,backgroundPosition:'center',backgroundSize:"cover"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 lg:mt-6 rounded-xl    border-accent border-2 p-2 lg:p-4 glass">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-meri text-info">
            Understanding Access Tokens and Refresh Tokens
          </h2>
        </div>
        <div className="mt-10">
          <p className="text-lg  font-serif text-white ">
            An access token is a credential used by an application to access
            an API. It represents the authorization of a specific application
            to access specific parts of a user’s data.
          </p>
          <p className="text-lg  font-serif text-white ">
            A refresh token is a special kind of token that can be used to
            obtain a new access token. It is used to refresh an expired access
            token without requiring the user to re-authenticate.
          </p>
          <p className="text-lg  font-serif text-white ">
            Access tokens are typically short-lived and expire after a certain
            period of time. When an access token expires, the application can
            use the refresh token to obtain a new access token without requiring
            the user to log in again.
          </p>
          <p className="text-lg  font-serif text-white">
            Access tokens and refresh tokens should be stored securely on the
            client side. They can be stored in memory, local storage, or cookies,
            depending on the security requirements of the application.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccessTokensBlog;
