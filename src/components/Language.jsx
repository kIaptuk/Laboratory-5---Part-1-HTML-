function Language() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-10">

      <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-800 dark:text-white dark:bg-slate-700 shadow-lg rounded-xl p-6">
        Languages
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="bg-white text-gray-800 dark:bg-slate-700 dark:text-gray-200 shadow-lg rounded-xl p-6">

          <h3 className="font-semibold mb-2">English</h3>

          <ul className="text-sm space-y-1">
            <li>Listening: C1</li>
            <li>Reading: C2</li>
            <li>Spoken interaction: C1</li>
            <li>Spoken production: C1</li>
            <li>Writing: C1</li>
          </ul>

        </div>

        <div className="bg-white text-gray-800 dark:bg-slate-700 dark:text-gray-200 shadow-lg rounded-xl p-6">

          <h3 className="font-semibold mb-2">Polish</h3>

          <ul className="text-sm space-y-1">
            <li>Listening: A1</li>
            <li>Reading: A2</li>
            <li>Spoken interaction: A2</li>
            <li>Spoken production: A2</li>
            <li>Writing: A1</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default Language;