import { useFetch } from "../hooks";

function Home() {
    const data = useFetch("asd");


    return (
        <h1 className="display-1">{data}</h1>
        )
}


export default Home;