const Pagination = () => {
    return (
        <div className="join flex justify-center items-center mx-auto my-2">
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="◄" checked />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="1"  />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
            <input className="join-item btn btn-square" type="radio" name="options" aria-label="►" />
        </div>
    );
};

export default Pagination;