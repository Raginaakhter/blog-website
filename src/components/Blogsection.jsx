import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blogsection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://southeast-asia-server-three.vercel.app/Countries')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Countries Information
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
              Southeast Asia countries loaded from live API.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
            {data.map((item, index) => (
              <div key={index} className="p-4 border rounded-md shadow hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-center mb-2">{item.name}</h3>
                <p className="text-center text-gray-500">{item.description || "No description"}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:mt-16">
       
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogsection;
