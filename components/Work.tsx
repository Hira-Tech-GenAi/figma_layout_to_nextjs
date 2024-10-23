"use client";

export default function Work() {
  return (
    <section className="py-10 bg-lightYellow">
      <div className="container mx-auto px-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-rose text-black">Featured Work</h2>
        </div>

        {/* Featured Work Items */}
        <div className="space-y-10">
          {/* Work 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <img
                src="/work1.jpg"
                alt="Work 1"
                className="w-full h-48 object-cover rounded shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">
                Designing Dashboards
              </h3>
              <p className="text-sm text-gray-500">
                <span className="inline-block px-4 py-1 rounded-full bg-red-400 text-white">
                  2020
                </span>{" "}
                | Dashboard
              </p>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                quae reiciendis mollitia ratione obcaecati nihil fugit, debitis
                recusandae iure magnam laudantium odit sint reprehenderit? Qui
                animi dicta sunt debitis quidem!
              </p>
            </div>
          </div>

          {/* Work 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <img
                src="/work2.jpg"
                alt="Work 2"
                className="w-full h-48 object-cover rounded shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">
                Designing Dashboards
              </h3>
              <p className="text-sm text-gray-500">
                <span className="inline-block px-4 py-1 rounded-full bg-red-400 text-white">
                  2020
                </span>
                | Dashboard
              </p>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                est porro in tenetur esse nisi ratione quia quam commodi
                quaerat. Itaque maiores obcaecati impedit natus, iure veniam
                consequatur officia voluptas.
              </p>
            </div>
          </div>

          {/* Work 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <img
                src="/work3.jpg"
                alt="Work 3"
                className="w-full h-48 object-cover rounded shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">
                Designing Dashboards
              </h3>
              <p className="text-sm text-gray-500">
                <span className="inline-block px-4 py-1 rounded-full bg-red-400 text-white">
                  2020
                </span>{" "}
                | Dashboard
              </p>
              <p className="mt-2 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                sequi amet ullam sint dolore quos natus cupiditate velit
                voluptatum? Voluptate, delectus quod. A illum facilis molestiae,
                qui adipisci consequatur nisi?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
