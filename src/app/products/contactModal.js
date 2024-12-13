const { faTimes } = require("@fortawesome/free-solid-svg-icons");
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const ContactModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <FontAwesomeIcon
          icon={faTimes}
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        />
        <h2 className="text-2xl font-bold mb-4">Contact Seller</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
);
  
export default ContactModal