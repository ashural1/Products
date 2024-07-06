import Link from "next/link";

const getData = async () => {
  const request = await fetch("https://dummyjson.com/products");

  const data = await request.json();

  return data;
};

async function Products() {
  const { products } = await getData();

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  ml-10">
      {products.map((product) => {
        return (
          <div key={product.id}>
            
            <div className="card w-96 bg-base-100 shadow-xl">
              <img src={product.thumbnail} alt="Album" />
              <div className="card-body">
              
                <h2 className="card-title">{product.title}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  
                  <Link href={`/sinleProduct/${product.id}`}>
                  <button  className="btn btn-primary">Listen</button>
              
            </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
