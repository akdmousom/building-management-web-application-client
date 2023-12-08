import PropTypes from 'prop-types';

const ApartmentCard = ({ data, handleAgreement }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='object-cover h-[300px] w-full' src={data?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="badge-secondary rounded-sm px-1">Apartment No: {data?.apartmentNo}</div>
                <h2 className="card-title flex justify-between">
                    Block: {data?.blockName}

                </h2>

                <p className=' text-xl font-medium '>Floor : {data?.floorNo},  Rent: ${data?.rent}</p>

                <button onClick={()=>handleAgreement(data)} className='btn btn-outline btn-primary text-base'>Agreement</button>


            </div>
        </div>
    );
};

ApartmentCard.propTypes = {
    data: PropTypes.object.isRequired,
    handleAgreement: PropTypes.func.isRequired
}

export default ApartmentCard;