import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const { data } = await axios.get(url);
                setData(data);
            } catch (err) {
                setError(err);
                // console.log(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url);
            setData(res.data);
        } catch (err) {
            setError(err);
            // console.log(err);
        }
        setLoading(false);
    };

    return { data, loading, error, reFetch };
}

export default useFetch;
