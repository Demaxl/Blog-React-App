import { useEffect, useState } from "react";
import $ from 'jquery';

function Spinner() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="spinner-border text-dark" style={{ width: "5rem", height: "5rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

function Alert({message, type}) {
    return (
        <div className={`alert alert-${type}`} role="alert">
            <strong>{message}</strong>
        </div>   
    )
}


function useFetch(url) {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        $.ajax({
            method: "GET",
            url: url,

            success: function (result) {
                // $.each(result, function (index, value) { 
                //     console.log(value);
                // });
                setResponse(result)
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        })
    }, [])

    return response;
}




export {useFetch, Spinner};