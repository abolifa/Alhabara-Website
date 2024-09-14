const Values = () => {
  return (
    <div>
      {/* Values Section */}
      <section className="py-32 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-extrabold text-blue-900 mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Integrity */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src={"gmo.png"} />
              <h3 className="text-xl font-bold text-gray-800">Integrity</h3>
              <p className="mt-2 text-gray-600">
                We believe in honesty, trust, and transparency in everything we
                do.
              </p>
            </div>

            {/* Innovation */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src={"cow.png"} />
              <h3 className="text-xl font-bold text-gray-800">Innovation</h3>
              <p className="mt-2 text-gray-600">
                We continuously strive to improve through new ideas and
                technology.
              </p>
            </div>

            {/* Sustainability */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src={"leaf.png"} />
              <h3 className="text-xl font-bold text-gray-800">
                Sustainability
              </h3>
              <p className="mt-2 text-gray-600">
                Our goal is to positively impact the environment for future
                generations.
              </p>
            </div>

            {/* Excellence */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <img src={"drop.png"} />
              <h3 className="text-xl font-bold text-gray-800">Excellence</h3>
              <p className="mt-2 text-gray-600">
                We are committed to delivering the best products and services to
                our customers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;
