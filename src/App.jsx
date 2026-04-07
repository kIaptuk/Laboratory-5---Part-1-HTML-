import { useEffect, useState } from "react";

import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Language from "./components/Language";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {

    const hour = new Date().getHours();

    if (hour >= 7 && hour <= 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }

  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (

    <div className={theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"}>

      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Toggle Theme
      </button>

      <Header />
      <Experience />
      <Education />
      <Language />
      <Reviews />
      <Footer />
      <ContactForm />

    </div>

  );
}

export default App;