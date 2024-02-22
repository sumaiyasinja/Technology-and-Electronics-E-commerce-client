
import { useEffect, useState } from "react";
import Brand from './Brand';

const Brands = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch("https://bytopia-tech-shop-server.vercel.app/brands")
            .then(res => res.json())
            .then(data => setBrands(data))
    },[])


    console.log(brands)

    return (
        <div className="my-6" id="products">
            <h2 className="text-3xl font-bold text-center p-6">Browse By Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pb-10 justify-between items-center">
               {
                brands?.map(brand => 
                    <Brand key={brand._id}
                    brand={brand}
                    ></Brand>
                    )
               }
               
              
            </div>
        </div>
    );
};

export default Brands;
