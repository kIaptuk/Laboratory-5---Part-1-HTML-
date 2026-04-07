import { useEffect, useState } from "react";

function Footer() {

  const [info, setInfo] = useState({});

  useEffect(() => {

    const data = {
      userAgent: navigator.userAgent,
      platform: navigator.platform
    };

    localStorage.setItem("systemInfo", JSON.stringify(data));

    const saved = JSON.parse(localStorage.getItem("systemInfo"));
    setInfo(saved);

  }, []);

  return (
    <footer className="bg-slate-800 text-white py-10">

      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-2xl font-bold mb-6 border-b border-slate-500 pb-2">
          General Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-6 text-sm">

          <div>
            <h4 className="font-semibold mb-2">Communication</h4>
            <p>Communication skills gained through group projects.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Management</h4>
            <p>Basic management experience from internship teamwork.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Job-related skills</h4>
            <p>Programming knowledge and project management experience.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Computer skills</h4>
            <p>Experience with Microsoft Visual Studio and VS Code.</p>
          </div>

        </div>

        <div className="mt-8 text-sm text-gray-300">
          <p>Browser: {info.userAgent}</p>
          <p>Platform: {info.platform}</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;