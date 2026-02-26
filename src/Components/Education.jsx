import { useState } from "react";

const Education = () => {
    const [active, setActive] = useState("college");

    return (
        <section className="min-h-screen bg-black text-white px-6 md:px-20 py-20">

            {/* Section Title */}
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                    Work and Education
                </h1>
                <p className="text-gray-400">
                    Summary of professional experience and academic background.
                </p>
            </div>

            {/* Layout */}
            <div className="flex flex-col md:flex-row gap-12">

                {/* Left Menu */}
                <div className="relative md:w-1/4">

                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-4 top-0 h-30 w-px bg-gray-600"></div>

                    <div className="flex md:flex-col gap-6 md:gap-8">

                        {/* <button
                            onClick={() => setActive("work")}
                            className={`pl-10 text-left ${active === "work"
                                ? "text-white-400 font-semibold"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            Work
                        </button> */}

                        <button
                            onClick={() => setActive("college")}
                            className={`pl-10 text-left ${active === "college"
                                ? " text-white px-4 py-2 rounded-md"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            College
                        </button>

                        <button
                            onClick={() => setActive("school")}
                            className={`pl-10 text-left ${active === "school"
                                ? "text-blue-400 font-semibold"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            School
                        </button>

                    </div>
                </div>

                {/* Right Content */}
                <div className="md:w-3/4">

                    {active === "college" && (
                        <div>
                            <h2 className="text-3xl font-semibold mb-2">
                                BCA(Bachelor of Computer Applications)
                            </h2>
                            <p className="text-gray-400 mb-4">2019 - 2022</p>
                            <span className="text-blue-400">Sri Krishna Adithya college of Arts and Science</span>
                            <p className="text-gray-400 mb-4">Coimbatore, Tamil Nadu</p>

                            <ul className="space-y-2 text-gray-300">
                                <li>• C Programming, C++,Python,Data Structures & Algorithms,Object-Oriented Programming (OOP),Software Engineering,Web Development (HTML, CSS, JavaScript)</li>
                                <li>• Final year project –  Malware Detection in a peer to peer Network</li>
                            </ul>
                        </div>
                    )}

                    {/* {active === "work" && (
                        <div>
                            <h2 className="text-3xl font-semibold mb-2">
                                Software Developer Intern
                            </h2>
                            <p className="text-gray-400 mb-4">Company Name</p>
                            <ul className="space-y-2 text-gray-300">
                                <li>• Built REST APIs</li>
                                <li>• Improved application performance</li>
                            </ul>
                        </div>
                    )} */}

                    {active === "school" && (
                        <div>
                            <h2 className="text-3xl font-semibold mb-2">
                                Higher Secondary Education
                            </h2>
                            <p className="text-gray-400 mb-4">2017-2019</p>
                            <p className="text-blue-400 ">Ashram Higher Secondary School</p>
                            <p className="text-gray-400 mb-4">Karur, Tamil Nadu</p>
                            <p className="text-gray-400 mb-4">Completed my Higher Secondary Education with <span className="text-blue-300 text-3xl font-bold    ">First class</span></p>

                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default Education;
