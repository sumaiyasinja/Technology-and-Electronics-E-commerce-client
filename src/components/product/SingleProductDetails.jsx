import Swal from 'sweetalert2'
import { useAuth } from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SingleProductDetails = ({product}) => {
    const {photo,name,types,price,rating,description,brands} = product
    const axiosPublic = useAxiosPublic()


    const {user} = useAuth()


    const handleAddCart =(product)=>{
        
        console.log("single page details",product)

        const email = user?.email
            const{ photo,name,types,price,brands }=product
            const cart = { photo, name, types, price, brands, email}
            console.log(cart);

            axiosPublic.post(cart)
            .then((res) => res.json())
            .then((data) => {
                console.log("added to cart",data);
                if(data.insertedId){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Your iteam has been added to your cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            });
        };
      
    
    return (
        <div>
              <div className='container mx-auto p-4 '> 
        <div className='bannertext'>
        <img className='rounded mx-auto w-full' src={photo} alt="" />
        </div>

           <div className="space-y-7 container mx-auto">
           <div className='flex justify-between flex-col md:flex-row items-center'>
           <p className='tex-red-500 font-bold text-3xl mb-6 mt-12'>{name}</p>

            <buttons onClick={() => {handleAddCart(product)}} className='custom-btn cursor-pointer font-bold text-lg  text-white rounded-lg '>
            Add to Cart 
            </buttons>
        </div>
            <p className=' font-normal text-base text-[#0B0B0BB2]'>{description}</p>
            <p className='text-base'>Brand: {brands}</p>            
            <p className='text-base'>Types: {types}</p>
            <p className="text-base">Rating: {rating}</p>
            <p>Price: <span className='font-bold text-amber-400'>{price}$</span> </p>          
           
           </div>
         
        </div>
        </div>
    );
};

export default SingleProductDetails;