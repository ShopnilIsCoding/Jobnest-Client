
const ExpressJSBlog = () => {
  return (
    <div className=" lg:min-h-[90vh] overflow-hidden" style={{backgroundImage: 'url(/register.png)',objectFit:'cover' ,backgroundPosition:'center',backgroundSize:"cover"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 lg:mt-6 rounded-xl   hero-overlay border-accent border-2 p-2 lg:p-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-info font-meri">
            Introduction to Express.js
          </h2>
        </div>
        <div className="mt-10">
          <p className="text-lg  font-serif">
            Express.js is a web application framework for Node.js. It provides
            a robust set of features for building web and mobile applications.
            Express.js simplifies the process of building web servers and APIs
            with Node.js by providing a simple and flexible routing system,
            middleware support, and built-in utilities for handling HTTP requests
            and responses.
          </p>
          <p className="text-lg  font-serif">
            With Express.js, developers can create scalable and maintainable
            web applications with ease. Its minimalist design and modular
            architecture make it easy to add new features and extend existing
            functionality.
          </p>
          <p className="text-lg  font-serif">
            Express.js is widely used in the industry and has a large ecosystem
            of third-party middleware and plugins. It is suitable for building
            a wide range of applications, from small personal projects to large
            enterprise systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpressJSBlog;
