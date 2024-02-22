
import { ImBin } from 'react-icons/im';
import Swal from 'sweetalert2'
import useAxiosPublic from './../../hooks/useAxiosPublic';
import { useAuth } from "../../hooks/useAuth";
import { useEffect } from 'react';
import { useState } from 'react';


const MyCart = () => {
  const [products, setProducts] = useState([]);
  const { user } = useAuth()
 const axiosPublic = useAxiosPublic();

  

  const ProductCard = ({ product }) => (
    <div key={product?._id} className="md:px-7 px-3 rounded-lg w-72 py-3 md:py-6 bg-slate-300 shadow-xl">
      <figure>
        <img src={product?.photo} alt={product?.name} />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl pt-2 font-bold">{product?.name}</h2>
        <p>Brand Name: {product?.brands}</p>
        <p>Type: {product?.types}</p>
        <p>Price: {product?.price}</p>
        <div className="flex items-center justify-end text-blue-800">
        <button onClick={() =>{ handleDelete(product?._id)}} className="custom-btn">
            <ImBin></ImBin>
        </button>

  </div>
      </div>
    </div>
  );

  useEffect(() => {
    axiosPublic.get("/cart")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching cart:", error);
      });
  }, []);


  const handleDelete=(id)=>{
    console.log('delete',id)
    Swal.fire({
        title: 'Are you sure you want to remove the item?',
        text: "from the cart!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes!'
    }).then((result) => {
        if (result.isConfirmed) {


            fetch(`https://bytopia-tech-shop-server.vercel.app/cart/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Removed!',
                            'Iteam has been removed.',
                            'success'
                        )
                    }
                })

        }
    })
}

  const filteredProducts = products.filter((product) => product?.email === user?.email);

  return (
    <div className="pb-5 pt-24">
      <h2 className="text-3xl font-bold text-center text-red-500 ">My Cart:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 container  mx-auto">
      {filteredProducts.length !== 0 ? (
        filteredProducts.map((product) => <ProductCard key={product?._id} product={product} />)
      ) : (
        <p className="text-center font-bold py-40">No products in your cart.</p>
      )}
      </div>
    </div>
  );
};

export default MyCart;