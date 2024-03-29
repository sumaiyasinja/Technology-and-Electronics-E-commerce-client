import Swal from 'sweetalert2'
// import useAxiosPublic from './../../hooks/useAxiosPublic';


const AddProduct = () => {
    
  // const axiosPublic = useAxiosPublic()

    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brands = form.brands.value;
        const types = form.types.value;
        const description = form.description.value;
        const photo = form.photo.value;

        const newProduct = { name, price, rating,brands,types, description,photo}

        console.log(newProduct);

        fetch('https://bytopia-tech-shop-server.vercel.app/products', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(newProduct)
      })
      .then(res => res.json())
      .then(data => {
          console.log(data)
          
          if(data.insertedId){
              Swal.fire({
                  title: 'Success!',
                  text: 'Product Added Successfully',
                  icon: 'success',
                  confirmButtonText: 'Superb'
                })
                form.reset()
          }
      })
  }
  return (
    <section className="bg-white dark:bg-gray-900 pt-14">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-6">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white py-2">
          Add a new product
        </h2>
        <form onSubmit={handleAddProduct}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Name
              </label>
              <input
                type="text"
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
              <label htmlFor="types" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Types
              </label>
              <input
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
              value="Add product"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;