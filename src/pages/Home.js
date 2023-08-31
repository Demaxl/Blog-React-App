import { useFetch, Spinner } from "../utils";
import { useEffect, useMemo, useRef, useState, memo, useContext } from "react";
import ReactPaginate from "react-paginate";

import '../css/styles.css'
import articleImage from "../img/article.jpg"
import { navigatorContext } from "./Base"


const getCurrentPage = () => {
    const url = new URL(window.location.href);
    return parseInt(url.searchParams.get("page")) - 1
}


function Post(props) {
    const navigate = useContext(navigatorContext)
    return (
        <div className="col-md-4 d-flex" onClick={(e) => navigate(`/posts/${props.id}`)}>
            <div className="card mb-3 me-3 flex-fill" style={{width:"400px"}}>
                <img src={articleImage} alt="Blog Image"/>
                <div className="card-body">
                    <h4 className="card-title post-heading">{props.title}</h4>
                </div>
            </div>
        </div>
    )
}


function Home() {
    const data = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [currentPage, setCurrentPage] = useState(getCurrentPage() || 0);
    const itemsPerPage = 10 

    const totalPages = useMemo(() => { 
        if (data) return Math.ceil(data.length / itemsPerPage) 
    }, [data])

    useEffect(() => {
        const handleHistory = (event) => {
            console.log(event.state.page);
            setCurrentPage(event.state.page)
        }

        window.addEventListener("onpopstate", handleHistory)

        return () => {
            window.removeEventListener('onpopstate', handleHistory);
        };

    }, [])


    if (data == null) {
        return <Spinner/>
    }

    if (currentPage >= totalPages) {
        setCurrentPage(totalPages - 1)
        window.history.replaceState(null, '', `/?page=${totalPages}`);

    }
    

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        window.history.pushState({ page: selectedPage.selected }, "", `?page=${selectedPage.selected + 1}`)
        setCurrentPage(selectedPage.selected);
    };


    return (
            <div className="container my-5">
                <div className="row">    
                        {subset.map(post => <Post id={post.id} key={post.id} title={post.title} body={post.body}/>)}
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
                        containerClassName={"pagination pagination-lg justify-content-center flex-wrap"}
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