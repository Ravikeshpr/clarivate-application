/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import Loader from "../hooks/useInfiniteScroll";
import { useEffect } from "react";
import { useGlobalContext } from "../context";
import Button from "../coponents/button/Button";

export default function List() {
    const data = Loader();
    const { state, dispatch } = useGlobalContext();
    const { scrollYPosition } = state;
    useEffect(() => {
        window.scrollTo(0, scrollYPosition);
    }, []);

    const handleAddAsFavourite = (item) => {
        const tempItem = { ...item, isFavourite: true };
        dispatch({ type: "ADD_FAVOURITE_ITEM", payload: tempItem });
    };

    return (
        <>
            <div className="header-button">
                <Link to="/">
                    <Button label="Back to dashboard" />
                </Link>
            </div>
            <div className="container-fluid">
                <div className="row text-center mt-5">
                    {data &&
                        data.length > 0 &&
                        data.map((item) => {
                            return (
                                <div key={item.id} className="card">
                                    <img
                                        src={item.url}
                                        alt={item.title}
                                        className="card-img"
                                    />
                                    <div className="title">
                                        <span>{item.id}:</span>
                                        <span>{` ${item.title}`}</span>
                                    </div>
                                    {!item.isFavourite ? (
                                        <Button
                                            onClick={() =>
                                                handleAddAsFavourite(item)
                                            }
                                            label="Add to favourite"
                                        ></Button>
                                    ) : (
                                        <div className="favourite">
                                            Marked Favourite
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}
