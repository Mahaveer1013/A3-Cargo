const                  Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-800 border-t border-gray-200 p-5 text-center">
        <p className="text-gray-600">Follow us:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-500">
            Facebook
          </a>
          <a href="#" className="hover:text-blue-500">
            Twitter
          </a>
          <a href="#" className="hover:text-blue-500">
            LinkedIn
          </a>
          <a href="#" className="hover:text-blue-500">
            Instagram
          </a>
        </div>
        <p className="mt-4 text-gray-500">
          &copy; 2024 A3 Express Cargo. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
