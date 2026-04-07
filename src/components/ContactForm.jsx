import { useEffect, useState } from "react";

function ContactForm() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);

  }, []);

  if (!isOpen) return null;

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">

      <div className="bg-white text-gray-800 dark:bg-slate-800 dark:text-gray-200 p-8 rounded-xl w-full max-w-md">

        <h2 className="text-xl font-bold mb-4">
          Contact Me
        </h2>

        <form
          action="https://formspree.io/f/mjgajywl"
          method="POST"
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            className="w-full p-2 border rounded dark:bg-slate-700 dark:text-white"
          />

          <div className="flex justify-between">

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Send
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-gray-400 px-4 py-2 rounded"
            >
              Close
            </button>

          </div>

        </form>

      </div>

    </div>

  );
}

export default ContactForm;