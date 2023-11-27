const Pagination = ({handleNext,totalPage, handlePrev, setPage, page}) => {
    

    return (
        <div className="join flex justify-center items-center mx-auto my-2">
            <input onClick={()=>handlePrev()} className="join-item btn btn-square" type="radio" name="options" aria-label="◄" />
           
            {
                Array(totalPage).fill(0).map((item, idx)=>{
                    const pageNumber = idx +1;
                    return (<button key={idx} onClick={()=> setPage(pageNumber)} className={pageNumber === page ? "join-item btn btn-active" : "join-item btn" }>{pageNumber}</button>)
                })
            }


            
            
            <input onClick={()=>handleNext()} className="join-item btn btn-square" type="radio" name="options" aria-label="►" />
        </div>
    );
};

export default Pagination;