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




export {Spinner, Alert};