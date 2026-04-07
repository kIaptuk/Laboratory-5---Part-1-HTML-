import { useEffect, useState } from "react";

function Reviews() {

  const [comments, setComments] = useState([]);

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts/14/comments")
      .then(res => res.json())
      .then(data => setComments(data));

  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">

      <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-gray-800 dark:text-white dark:bg-slate-700 shadow-lg rounded-xl p-6">
        Reviews
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        {comments.map(comment => (
          <div
            key={comment.id}
            className="bg-white text-gray-800 dark:bg-slate-700 dark:text-gray-200 shadow-lg rounded-xl p-6"
          >
            <p className="font-semibold">{comment.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">{comment.email}</p>
            <p className="mt-2 text-sm">{comment.body}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Reviews;