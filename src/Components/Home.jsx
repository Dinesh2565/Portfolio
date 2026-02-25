import Education from "./Education";

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 bg-black text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
                Hi I'm Dinesh 😊
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
                Guess What, I'm a{" "}
                <span className="text-blue-400">
                    Software Developer
                </span>
            </h2>


            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                Software developer specializing in modern JavaScript, backend systems,
                and efficient application architecture.
            </p>


        </div>
    );
};

export default Home;


