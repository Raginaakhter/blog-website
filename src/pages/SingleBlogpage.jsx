import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleBlogpage = () => {
    const {id} = useParams()
    console.log(id);
      // useState For Load data
      const [Data,setData] = useState([])
      // api load using useEffect
      useEffect(()=>{
          fetch('https://mocki.io/v1/e4bfa7fb-9634-403c-8799-410ef67a1238')
          .then(res => res.json())
          .then(data => {
            const findData = data.find(item => item.id == id)
          setData(findData)
   })
          },[id])
          
   
    return (
        <div>
            <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                <span class="relative inline-block">
                    <span class="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                    <span class="relative">{Data.title} </span>
                </span>
            </h2>
        </div>

        <div class="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
                <img style={{height:'300px',width:'150%'}} class="w-full mx-auto sm:max-w-xs" src={Data.image}alt="" />
            </div>

            <div>
                <h3 class="text-lg font-semibold text-gray-900">Author:{Data.author}||Category:{Data.Category}</h3>
                <p class="mt-4 text-lg text-gray-700">{Data.description}</p>
                

               
                
            </div>
        </div>
    </div>
</section>

        </div>
    );
};

export default SingleBlogpage;