

const NestJSBlog = () => {
  return (
    <div className=" lg:min-h-[90vh] overflow-hidden" style={{backgroundImage: 'url("https://miro.medium.com/v2/resize:fit:1358/1*HaR3PoAfMXVhe4aM4ieSmw.png")',objectFit:'cover' ,backgroundPosition:'center',backgroundSize:"cover"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 lg:mt-6 rounded-xl glass   border-accent border-2 p-2 lg:p-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-red-400 font-meri">
            Exploring NestJS
          </h2>
        </div>
        <div className="mt-10">
          <p className="text-lg font-serif text-white">
            NestJS is a progressive Node.js framework for building efficient,
            reliable, and scalable server-side applications. It uses modern
            JavaScript features and design patterns to provide developers with
            a powerful and flexible toolkit for building backend applications.
          </p>
          <p className="text-lg font-serif text-white">
            NestJS is built on top of Express.js and heavily inspired by Angular.
            It leverages TypeScript's strong typing system to enhance developer
            productivity and code maintainability. NestJS provides built-in
            support for features such as dependency injection, middleware,
            routing, and more.
          </p>
          <p className="text-lg font-serif text-white">
            With NestJS, developers can create clean, modular, and testable
            codebases that are easy to understand and maintain. Its modular
            architecture allows developers to organize their code into reusable
            modules and components, making it easy to scale and extend
            applications as they grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NestJSBlog;
