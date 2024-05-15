
const NotFoundPage = () => {
    return (
        <div className="container mx-auto flex flex-col items-center justify-center h-screen">
            <h1
                data-aos="zoom-in"
                data-aos-duration="500"
                className="text-6xl font-bold text-center"
            >
                <img src='/4.png' alt="" className="inline-block size-20 lg:size-40" />
                <img src='/o.png' alt="" className="inline-block size-20 lg:size-40" />
                <img src='/4.png' alt="" className="inline-block size-20 lg:size-40" />
            </h1>
            <p
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
                className="text-xl text-center mt-4"
            >
                Oops! Looks like you're lost.
            </p>
            <div
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
                className="mt-8"
            >
                <a href='/'>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go back to Home
                    </button>
                </a>
            </div>
        </div>
    );
};

export default NotFoundPage;
