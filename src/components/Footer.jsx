const Footer = () => {
  return (
    <footer className="bg-white text-gray-600 border-t items-center p-4 flex flex-col sm:flex-row justify-around">
      <aside className="flex items-center gap-2">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="fill-current"
        >
          <path d="M22.672 15.226l-2.432.811..." /> 
        </svg>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>

      <nav className="flex gap-4 items-center justify-center mt-4 sm:mt-0">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abubakar308"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-current"
          >
            <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 
            2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM8 
            19H5v-10h3v10zM6.5 7.732c-.966 0-1.75-.79-1.75-1.764S5.534 
            4.204 6.5 4.204s1.75.79 1.75 1.764-.784 1.764-1.75 
            1.764zM20 19h-3v-5.604c0-3.368-4-3.115-4 
            0V19h-3v-10h3v1.548C14.396 8.962 20 8.771 20 14.024V19z" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/abubakar308"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-current"
          >
            <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.292 
            9.384 7.862 10.9.575.107.786-.25.786-.556 
            0-.275-.01-1.007-.015-1.976-3.2.695-3.878-1.54-3.878-1.54-.523-1.326-1.276-1.68-1.276-1.68-1.043-.714.08-.699.08-.699 
            1.15.08 1.755 1.182 1.755 1.182 1.026 1.755 2.69 
            1.248 3.344.955.105-.743.402-1.248.732-1.535-2.55-.29-5.236-1.275-5.236-5.67 
            0-1.252.448-2.275 1.182-3.075-.12-.29-.513-1.45.113-3.02 
            0 0 .96-.307 3.144 1.172A10.87 10.87 0 0112 6.79c.975.004 
            1.95.132 2.863.39 2.182-1.48 3.14-1.172 
            3.14-1.172.628 1.57.234 2.73.114 3.02.737.8 
            1.18 1.823 1.18 3.075 0 4.41-2.69 5.375-5.25 
            5.66.412.36.79 1.08.79 2.18 0 1.572-.015 
            2.838-.015 3.222 0 .31.208.67.79.556C20.21 
            21.38 23.5 17.084 23.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/mdabubakar308"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="fill-current"
          >
            <path d="M22.676 0H1.326C.593 0 0 .593 0 
            1.326v21.348C0 23.407.593 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 
            1.893-4.788 4.659-4.788 1.325 0 2.464.099 
            2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 
            1.763v2.313h3.59l-.467 3.622h-3.123V24h6.116C23.407 
            24 24 23.407 24 22.674V1.326C24 
            .593 23.407 0 22.676 0z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
