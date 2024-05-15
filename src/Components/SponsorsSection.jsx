import Marquee from "react-fast-marquee";

const SponsorsSection = () => {
  return (
    <div className="">
        <hr className=" mx-auto border-dashed mt-3 lg:mt-6 border-accent border-2" />
        <div className="mt-6 lg:mt-12 mb-3 lg:mb-6  text-center mx-auto space-y-2">
            <h1 className="font-meri text-2xl font-bold">Our Partnered Opportunities</h1>
            <p className=" font-serif max-w-lg mx-auto">Discover career opportunities from leading Bangladeshi companies and global organizations partnering with us. Explore diverse roles in telecommunications, healthcare, finance, technology, and more. </p>

        </div>
        <Marquee pauseOnHover >
           
            <img className="size-40 rounded-full ml-8 glass p-2  " src="https://press.careerbuilder.com/image/CB_Newsroom_Tiles_Logo_2021-SkyBlue.jpg" alt="" />
            <img className="size-40 rounded-full ml-8 glass p-2  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fcdsIUPUgmbvGaP-RC4RbHYdVtoN_fM8aya_8gOXI2BRtClESO-0_jgWTtKtIVmOQKs&usqp=CAU" alt="" />
            <img className="size-40 rounded-full ml-8 glass p-2  " src="https://tfe-bd.sgp1.digitaloceanspaces.com/posts/38789/aci900.jpg" alt="" />
            <img className="size-40 rounded-full ml-8 glass p-2  " src="https://www.kalerkantho.com/_next/image?url=https%3A%2F%2Fecdn.kalerkantho.com%2Fpublic%2Fnews_images%2F2023%2F02%2F23%2F1677136992-1eb0bdb67ceb924acccc863051c6fe34.jpg&w=1920&q=100" alt="" />
            <img className="size-40 rounded-full ml-8 glass p-2  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ75Q9EvClA_AXpsxkvrXrLRQS6iLAI-Y_MV9FKjZDSEw&s" alt="" />
            <img className="size-40 rounded-full ml-8 glass p-2  " src="https://yt3.googleusercontent.com/trvTsFBmg36XQ4y55jb2eqewRBwAZI4a9AdC6KRoml1OO0nq2Vt6oZn6HukLBIq5yElIoAWDAg=s900-c-k-c0x00ffffff-no-rj" alt="" />
            <img className="size-40 rounded-full ml-8 glass p-2  " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1QqfME4ayj20Psq172TQcYEzKazbciKDjr24Y6cfGQ&s" alt="" />
            <img className="size-40 rounded-full ml-8 glass p-2  " src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" alt="" />
           
        </Marquee>
        <hr className=" mx-auto border-dashed mt-3 lg:mt-6 border-2 border-accent" />
    </div>
  );
};

export default SponsorsSection;
