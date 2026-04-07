function Header() {
  return (
    <header className="bg-slate-800 text-white py-10">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-3xl font-bold mb-6 border-b border-slate-500 pb-3">
          Personal Information
        </h1>

        <div className="grid md:grid-cols-2 gap-4 text-sm">

          <p><span className="font-semibold">Name:</span> Denis Razoronov</p>
          <p><span className="font-semibold">Phone:</span> +380 685 860 589</p>

          <p className="md:col-span-2">
            <span className="font-semibold">Address:</span> Volodymyra Velykoho Street 61, 253, Lviv, Ukraine
          </p>

          <p><span className="font-semibold">Email:</span> klaptuk@gmail.com</p>

          <p>
            <span className="font-semibold">Work site:</span>
            <a href="https://vns.lpnu.ua/my/" className="text-blue-300 hover:underline ml-1">
              vns.lpnu.ua
            </a>
          </p>

          <p className="md:col-span-2">
            <span className="font-semibold">Sex:</span> Male |
            <span className="ml-2 font-semibold">Date of birth:</span> 09/09/2006 |
            <span className="ml-2 font-semibold">Nationality:</span> Ukrainian
          </p>

        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">

          <div className="bg-orange-500 text-black p-4 rounded-lg">
            <p className="font-semibold">Job applied for</p>
            IT Business Analyst
          </div>

          <div className="bg-orange-500 text-black p-4 rounded-lg">
            <p className="font-semibold">Preferred job</p>
            Junior IT specialist
          </div>

          <div className="bg-orange-500 text-black p-4 rounded-lg">
            <p className="font-semibold">Studies applied for</p>
            Applied Coding and CyberSecurity
          </div>

        </div>

      </div>
    </header>
  );
}

export default Header;