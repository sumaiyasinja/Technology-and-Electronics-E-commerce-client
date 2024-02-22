
import { useLoaderData, useParams } from "react-router-dom";
import SingleProductDetails from './../../components/product/SingleProductDetails';


const DisplayProducts = () => {
    const {id} = useParams();
    console.log('id',id);
    const products = useLoaderData()
    console.log("sdjdunsd",products)


    console.log(products)
    return (
      <div>
  
        <SingleProductDetails key={products?._id} product={products} />
      </div>
    );
};

export default DisplayProducts;