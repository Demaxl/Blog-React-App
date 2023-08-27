import { useState } from "react";
import $ from 'jquery';



function useFetch(url) {
    const [data, setData] = useState(<div class="d-flex justify-content-center align-items-center vh-100">
                                        <div class="spinner-border text-dark" style={{width: "5rem", height: "5rem"}} role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </div>);

    return data;
}



export {useFetch};