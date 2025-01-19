export default function Contact() {
    
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            rows="4"
            className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-md shadow-md hover:bg-gray-100 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
