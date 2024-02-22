import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
// import useAxiosPublic from './../../hooks/useAxiosPublic';

const UpdateProduct = () => {
  const { id } = useParams();
  const loadedProduct = useLoaderData();
  // const axiosPublic = useAxiosPublic()

  console.log(loadedProduct,id)

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brands = form.brands.value;
        const types = form.types.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const updatedProduct = { name, price, rating,brands,types, description,photo}

        console.log(updatedProduct);


        fetch(`https://bytopia-tech-shop-server.vercel.app/products/${id}`, {
          method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
              Swal.fire({
                title: 'Updated Sucessfully!',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
              })
            }
            history.back();
        })
}

    
      
    return (
      <section className="bg-white dark:bg-gray-900 pt-14">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white py-2">
        Update a product
        </h2>
        <form onSubmit={handleUpdateProduct}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Name
              </label>
              <input
                type="text"
                defaultValue={loadedProduct?.name}
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                required
              />
            </div>
        
            <div className="w-full">
              <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Brands
              </label>
              <select
              defaultValue={loadedProduct?.brands}
                id="brands"
                name="brands"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              >
               <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="IBM">IBM</option>
                <option value="others">others</option>
              </select>
            </div>
            <div className="w-full">
              <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Types
              </label>
              <input
              defaultValue={loadedProduct?.types}
                type="text"
                name="types"
                id="types"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product Types"
                required
                />
            </div>
            <div className="w-full">
              <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
              defaultValue={loadedProduct?.price}
                type="number"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                required
                />
            </div>
  
            <div className="w-full">
              <label htmlFor="rating"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Rating
              </label>
              <input
                type="text"
                defaultValue={loadedProduct?.rating}
                name="rating"
                id="rating"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product rating"
                required
                />
            </div>
            <div className="w-full">
              <label htmlFor="photo"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                photo
              </label>
              <input
               defaultValue={loadedProduct?.photo}
                type="text"
                name="photo"
                id="photo"
  
                className=" text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                   focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Photo URL:"
                required
                />
              
            </div>
  
                <div className="sm:col-span-2">
              <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                            defaultValue={loadedProduct?.description}
                name="description"
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
                </div>
        
          </div>
          <div className="flex justify-center items-center">
            <input
              type="submit"
              className="font-medium mt-3 text-center text-white bg-primary-700 custom-btn px-5 py-2.5 rounded-lg focus:ring-4 "
              value="Update product"
            />
          </div>
        </form>
      </div>
    </section>
    )

};

export default UpdateProduct;