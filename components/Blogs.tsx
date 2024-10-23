import React from "react";

const Blogs = () => {
  return (
    <div>
      {/* New Section with Recent Posts and View All */}
      <section className="py-10 bg-purple-200 w-full">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-6">
          {/* Column Titles */}
          <div className="flex justify-between items-center w-full md:col-span-2">
            <h2 className="text-xl md:text-2xl font-bold text-black">
              Recent Post
            </h2>
            <h2 className="text-xl md:text-2xl font-bold text-red-400">
              View All
            </h2>
          </div>

          {/* Left Column - Recent Post (Square div) */}
          <div className="bg-white shadow-lg rounded-lg aspect-w-1 aspect-h-1 p-6 flex flex-col justify-between">
            <h3 className="text-lg md:text-xl font-semibold text-black">
              Making a design system from scratch
            </h3>
            <p className="text-sm text-gray-500">
              12 Feb 2020 | Design, Pattern
            </p>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              facere, pariatur quaerat optio laudantium provident sunt nihil
              error nam, quos, dignissimos atque corporis perspiciatis? Eos ex
              voluptatem quas officiis provident?
            </p>
          </div>

          {/* Right Column - View All (Square div) */}
          <div className="bg-white shadow-lg rounded-lg aspect-w-1 aspect-h-1 p-6 flex flex-col justify-between">
            <h3 className="text-lg md:text-xl font-semibold text-black">
              Making a design system from scratch
            </h3>
            <p className="text-sm text-gray-500">
              12 Feb 2020 | Design, Pattern
            </p>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              accusantium unde, molestias eligendi omnis qui sunt aliquam libero
              maiores minus itaque nam delectus exercitationem, tempore
              blanditiis rem voluptas ducimus et.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
