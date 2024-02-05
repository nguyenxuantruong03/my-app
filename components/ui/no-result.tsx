import Link from "next/link";

const NoResults = () => {
    return ( 
        <section className="bg-white py-10">
        <div className=" max-w-7xl mx-auto">
          <div className="flex justify-center">
            <div className="w-full sm:w-10/12 text-center">
              <div
                className="bg-cover bg-center h-96"
                style={{
                  backgroundImage:
                    'url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)',
                }}
              >
                <h1 className="text-5xl">NOT FOUND!</h1>
              </div>
              <div className="mt-5">
                <h3 className="text-8xl">Chưa có sản phẩm!</h3>
                <p className="mt-5">Bạn có thể chuyển qua sản phẩm khác.</p>
                <Link
                  href="/home-product"
                  className="text-white bg-green-500 px-8 py-4 rounded-full inline-block mt-5"
                >
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}

export default NoResults;