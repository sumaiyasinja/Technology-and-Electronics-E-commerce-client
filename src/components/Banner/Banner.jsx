const Banner = () => {
    return (
     <div>
<section className="bg-gray-100 text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leadi sm:text-6xl">
				<span className="text-teal-600">Byto</span>pia Techmnology & Electronics Shop
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Best Techmnology & Electronics Shop product buy and selling shop
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#products" className="px-8 py-3 text-lg font-semibold rounded bg-teal-600 text-gray-50">Buy Now</a>
        <a rel="noopener noreferrer" href="/add-product" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Sell Product</a>

			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
     </div>
    );
  };
  
  export default Banner;