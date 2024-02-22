
import { NavLink } from 'react-router-dom';
const Brand = ({brand}) => {
    console.log(brand);
    return (
        
                <NavLink to={`/brands/${brand?.brands}`}
                        className="cursor-pointer w-96 bg-base-100 shadow-xl rounded-xl container mx-auto"
                    >
                        <figure className="h-64 flex justify-center items-center text-center">
                            <img src={brand?.thumbnail_img} alt={brand?.brands} />
                        </figure>
                        <hr />
                        <div className="w-full px-3 py-4 font-semibold">
                            <p className="text-gray-400 text-xs">Category</p>
                            <h2 className="card-title capitalize text-red-500">{brand?.brands}</h2>
                        </div>
                    </NavLink>
           
    
    );
};

export default Brand;