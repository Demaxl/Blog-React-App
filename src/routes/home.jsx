import { useFetch, Spinner } from "../components";
import { useEffect, useMemo, useRef, useState, memo, useContext } from "react";
import ReactPaginate from "react-paginate";
import $ from 'jquery';
import '../css/styles.css';
import articleImage from "../img/article.jpg";
import { useLoaderData, useNavigation } from "react-router-dom";



export async function loader() {
    return fetch("https://jsonplaceholder.typicode.com/posts");

}



function Post(props) {
    return (
        <div className="col-md-4 d-flex">
            <div className="card mb-3 me-3 flex-fill" style={{width:"400px"}}>
                <img src={articleImage} alt="Blog Image"/>
                <div className="card-body">
                    <h4 className="card-title post-heading">{props.title}</h4>
                </div>
            </div>
        </div>
    )
}


export default function Home() {
    const navigation = useNavigation()
    const data = useLoaderData()

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10 
    useEffect(() => {
        setTotalPages(Math.ceil(data.length / itemsPerPage));
    }, []);


    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = data.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
            <>
                <div className="container my-5">
                    <div className="row">    
                            {subset.map(post => <Post id={post.id} key={post.id} title={post.title} body={post.body}/>)}
                    </div>
                </div>
                
            <div className="d-flex justify-content-center align-items-center">
                    <ReactPaginate
                        containerClassName="pagination pagination-lg"
                        activeClassName="active"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        nextClassName="page-item"
                        previousLinkClassName="page-link"
                        nextLinkClassName="page-link"
                        previousLabel={"<<"}
                        nextLabel={">>"}
                        breakLabel={"..."}
                        pageCount={totalPages-1}
                        onPageChange={handlePageChange}
                        forcePage={currentPage} 
                    />
                </div>
            </>
        )
}


