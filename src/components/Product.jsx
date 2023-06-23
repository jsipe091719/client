import cropImg from "../assets/crop.png";
import pbgImg from "../assets/pbg.png";

const Product = () => {
  return (
    <div name="product" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center text-red-800">
          Product Page
        </h2>
        <p className="text-2xl py-8 text-gray-700 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
          ab. Officia sunt nulla aspernatur culpa, eaque tenetur excepturi
          nostrum tempore.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div className="card w-96 bg-base-100  bg-red-700 hover:bg-red-500">
              <figure>
                <img src={cropImg} alt="Product 1" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Product 1</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
                  amet, consectetur?
                </p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 bg-red-700 hover:bg-red-500">
              <figure>
                <img src={cropImg} alt="Product 1" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Product 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl bg-red-700 hover:bg-red-500">
              <figure>
                <img src={cropImg} alt="Product 1" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Product 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl bg-red-700 hover:bg-red-500">
              <figure>
                <img src={cropImg} alt="Product 1" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Product 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl bg-red-700 hover:bg-red-500">
              <figure>
                <img src={cropImg} alt="Product 1" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Product 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl bg-red-700 hover:bg-red-500">
              <figure>
                <img src={cropImg} alt="Product 1" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Product 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl bg-red-700 hover:bg-red-500">
              <figure>
                <img src={cropImg} alt="Product 1" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Product 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl bg-red-700 hover:bg-red-500">
              <figure>
                <img src={cropImg} alt="Product 1" />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">Product 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur?</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
