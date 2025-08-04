import {
  FaGithub,
  FaKaggle,
  FaLinkedin,
  FaOrcid,
  FaTwitter,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex space-x-6">
      <a
        href="https://github.com/xiconovo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub
          size={25}
          className="text-white hover:text-blue-200 transition"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/francisco-novo-471741293/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin
          size={25}
          className="text-white hover:text-blue-200 transition"
        />
      </a>
    </div>
  );
}
