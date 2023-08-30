import { useFetch, Spinner } from "../utils";
import { useEffect, useMemo, useRef, useState, memo } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

import '../css/styles.css'


const getCurrentPage = () => {
    const url = new URL(window.location.href);
    return parseInt(url.searchParams.get("page")) - 1
}


function Post(props) {
    return (
        <div>
            <h1 className="post-heading">{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
}


function Home() {
    const data = useFetch("https://jsonplaceholder.typicode.com/posts");
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(getCurrentPage() || 0);
    const itemsPerPage = 10 

    const totalPages = useMemo(() => { 
        if (data) return Math.ceil(data.length / itemsPerPage) 
    }, [data])



    if (data == null) {
        return <Spinner/>
    }

    // totalPages.current = Math.ceil(data.length / itemsPerPage)
    if (currentPage > totalPages) {
        setCurrentPage(totalPages - 1)
    }
    
    window.history.replaceState(null, '', `/?page=${currentPage + 1}`);

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };


    return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        {subset.map(post => <Post key={post.id} title={post.title} body={post.body} />)}
                    </div>
                </div>
                
                <div className="row">


                    <ReactPaginate
                        pageCount={totalPages}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={3}
                        onPageChange={handlePageChange}
                        forcePage={currentPage}
                        previousLabel={"<<"}
                        nextLabel={">>"}
                        breakLabel={"..."}
                        containerClassName={"pagination pagination-lg justify-content-center"}
                        activeClassName={"active bg-dark"}
                        activeLinkClassName="bg-dark text-white"
                        pageClassName="page-item"
                        pageLinkClassName="page-link text-dark"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"

                    />
            
                </div>
            </div>
        )
}


export default Home;