import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center px-8 py-20 bg-gradient-to-r from-white to-blue-100">
      {/* Left Content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          We Build Products <br /> that Work – Fast.
        </h1>
        <p className="mt-4 text-gray-600 max-w-md">
          From startup tools to enterprise systems – Code-X-Novas crafts scalable,
          AI-powered solutions that redefine productivity.
        </p>

        <div className="mt-6 flex space-x-4">
          <button className="bg-gradient-to-r from-blue-500 to-sky-400 text-white px-5 py-3 rounded-md">
            Explore Our Products
          </button>
          <button className="border border-gray-400 px-5 py-3 rounded-md text-gray-700">
            Partner With Us
          </button>
        </div>
      </div>

      {/* Right Content with Animation */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col space-y-6"
      >
        <img
          src="/service1.jpg"
          alt="Service"
          className="rounded-lg shadow-lg w-64"
        />
        <div className="bg-white shadow-md p-3 rounded-md w-fit">
          Website Maintenance
        </div>
        <div className="bg-white shadow-md p-3 rounded-md w-fit">
          Custom Website Development
        </div>
        <div className="bg-white shadow-md p-3 rounded-md w-fit">
          App Development
        </div>
        <div className="bg-white shadow-md p-3 rounded-md w-fit">
          Graphics Designing
        </div>
      </motion.div>
    </section>
  );
}
