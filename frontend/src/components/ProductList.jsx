export default function ProductList({ products = [] }) {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg p-4 text-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div className="overflow-hidden rounded">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-contain rounded hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold hover:text-blue-600 transition-colors duration-300">
                {product.name}
              </h3>
              <p className="text-gray-600 font-medium">RM {product.price}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
