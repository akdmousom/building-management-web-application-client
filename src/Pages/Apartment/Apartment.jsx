import { Helmet } from "react-helmet-async";

const Apartment = () => {
    return (
        <div className=" min-h-screen">
            <Helmet>
                <title>DAS Mansion | Apartments </title>
            </Helmet>

            <div className="grid md:grid-cols-2 lg:grid-cols-3">

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            Shoes!
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Apartment;