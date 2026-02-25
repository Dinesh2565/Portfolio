import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-400 mb-8 text-center">
                Want to be in touch?
            </h1>
            <p className="max-w-2xl text-center text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed">
                Wanna chat? Just shoot me a DM with a straight question on LinkedIn and
                I’ll respond whenever I can. 👽
            </p>
            {/* urls */}
            <div className="flex flex-col gap-6 text-xl">
                <a
                    href="https://www.linkedin.com/in/dineshsoundhirarajan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-blue-400 transition duration-300"
                >
                    <FontAwesomeIcon icon={faSquareLinkedin} size="lg" />
                    LinkedIn
                </a>

                <div className="flex items-center gap-3 hover:text-blue-400 transition duration-300">
                    <FontAwesomeIcon icon={faEnvelope} size="lg" />
                    dineshsoundhirarajan@example.com
                </div>

                <div className="flex items-center gap-3 hover:text-blue-400 transition duration-300">
                    <FontAwesomeIcon icon={faPhone} size="lg" />
                    +91 8778185093
                </div>
            </div>
        </div>
    );
};

export default Contact;
