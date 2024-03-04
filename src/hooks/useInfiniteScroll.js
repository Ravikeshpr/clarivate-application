import { useEffect } from "react";
import { useGlobalContext } from "../context";

const Loader = () => {
    const { state, dispatch } = useGlobalContext();

    const { list: data, offset, isAPILoadReq, scrollYPosition } = state;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${offset}&_limit=10`
                );
                const json = await response.json();
                dispatch({ type: "ADD_DATA", payload: json });
            } catch (error) {
                console.log(error);
            }
        };

        isAPILoadReq && data.length < offset * 10 && fetchData();
        let scrollYHeight = 0;
        const handleScroll = (e) => {
            if (!isAPILoadReq) {
                dispatch({ type: "SET_IS_API_LOAD_REQ", payload: true });
            }

            scrollYHeight = window.scrollY;
            const scrollHeight = e.target.documentElement.scrollHeight;
            const currentHeight =
                e.target.documentElement.scrollTop + window.innerHeight;
            if (
                currentHeight + 1 >= scrollHeight &&
                isAPILoadReq &&
                offset <= 5 //Since only 50 objects are there in the given API
            ) {
                dispatch({ type: "SET_OFFSET", payload: offset + 1 });
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            dispatch({ type: "SET_SCROLL_POSITION", payload: scrollYHeight });
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offset, dispatch, isAPILoadReq, scrollYPosition]);

    return data;
};

export default Loader;
