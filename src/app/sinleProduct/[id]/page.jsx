const getData = async (id) => {
  const request = await fetch("https://dummyjson.com/products/" + id);

  const data = await request.json();

  return data;
};

async function Product({ params }) {
  const product = await getData(params.id);
  return (
    <div className="align-elements">
      <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure>
  <img src={product.thumbnail} alt="Album" />
  </figure>
  <div className="card-body">
    <h1 className="card-title" >{product.title}</h1>
    <h3 className="card-title">{product.brand}!</h3>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    </div>
  );
}

export default Product;
