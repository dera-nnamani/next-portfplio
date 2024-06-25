import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1>Contact me!</h1>
      <sec6tion className="mt-8 flex gap-4">
        {/* single social link */}
        <div>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 border border-gray-300 p-2 rounded-md w-max hover:bg-blue-500 hover:text-white transition-colors duration-300"
          >
            <FaXTwitter />
            <span>Twitter</span>
          </a>
        </div>
        {/* end of single social link */}
        {/* single social link */}
        <div>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 border border-gray-300 p-2 rounded-md w-max hover:bg-black hover:text-white transition-colors duration-300"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        {/* end of single social link */}
      </sec6tion>
    </div>
  );
};

export default Contact;
