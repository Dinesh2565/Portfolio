// const Skills = () => {
//     const arr = ['ReactJs', 'Javascript', 'Java', 'GoLang', 'TailwindCss', 'Html', 'Css', 'NodeJs', 'SpringBoot', 'MongoDb',]
//     return (
//         <div className="min-h-screen "><h1>My Skills</h1>
//             <div className="flex gap-7">
//                 {
//                     arr.map((ele, idx) => {
//                         return (<div key={idx} className="p-3 border border-blue-400 flex">
//                             {ele}
//                         </div>)
//                     })
//                 }
//             </div>

//         </div>
//     )
// }

// export default Skills


const Skills = () => {
    const skills = [
        "ReactJS",
        "JavaScript",
        "Java",
        "GoLang",
        "TailwindCSS",
        "HTML",
        "CSS",
        "NodeJS",
        "Spring Boot",
        "MongoDB",
    ];

    return (


        <div className=" flex flex-col justify-center items-center bg-black text-white px-6">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-400 mb-12">
                My Skills
            </h1>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl">

                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="px-6 py-3 border border-blue-400 rounded-lg hover:bg-blue-400 hover:text-black transition duration-300 text-lg font-medium"
                    >
                        {skill}
                    </div>
                ))}

            </div>

        </div>

    );
};

export default Skills;
