import ProductCart from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCart />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCart />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCart />
        </div>
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCart />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
