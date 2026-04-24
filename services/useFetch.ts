//fetchMovies
//fetchMovieDetails

import { useEffect, useState } from "react";

//useFetch(fetchMovies)

const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async () => {
        try{
            setLoading(true);
            setError(null);

            const result = await fetchFunction();
            setData(result);

        } catch (err) {
            //@ts-ignore
            setError(err instanceof Error ? err : new Error('An unknown error occurred'));
        } finally {
            setLoading(false);
        }
    };

    const reset = () => {
        setData(null);
        setError(null);
        setLoading(false);
    }

    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, [])

    return { data, loading, error, fetchData, reset, refetch: fetchData };
};

export default useFetch;