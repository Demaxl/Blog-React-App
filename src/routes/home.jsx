import { useFetch, Spinner } from "../components";
import { useEffect, useMemo, useRef, useState, memo, useContext } from "react";
import ReactPaginate from "react-paginate";
import $ from 'jquery';
import '../css/styles.css';
import articleImage from "../img/article.jpg";
import { useLoaderData, useNavigation } from "react-router-dom";



export async function loader() {
    const promise = new Promise(function (resolve, reject) {
        // $.ajax({
        //     method: "GET",
        //     url: "https://jsonplaceholder.typicode.com/posts",
        //     success: function (result) {
        //         setTimeout(() => {
        //             resolve(result);

        //         }, 3000);
        //     },
        //     error: function (xhr, status, error) {
        //         reject(error);
        //     }
        // })
        const data = [
                        {
                            "userId": 1,
                            "id": 1,
                            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                        }
                    ]
        setTimeout(() => resolve(data), 2000)
    }) 
    return await promise


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


function Home() {
    const navigation = useNavigation()
    console.log(navigation.state);
    // const data = useLoaderData()
    const data = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    ]

    return (
            <div className="container my-5">
                <div className="row">    
                        {data.map(post => <Post id={post.id} key={post.id} title={post.title} body={post.body}/>)}
                </div>
            </div>
        )
}


export default Home;