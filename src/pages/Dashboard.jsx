import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Button from "../coponents/button/Button";

export default function Dashboard() {
    const { state, dispatch } = useGlobalContext();
    const { list } = state;
    const data = list.filter((item) => !!item.isFavourite);

    useEffect(() => {
        window.scrollTo(0, 0);
        return () => {
            if (list.length > 0) {
                dispatch({ type: "SET_IS_API_LOAD_REQ", payload: false });
            }
        };
    }, []);

    return (
        <>
            <div className="header-button">
                <Link to="/list">
                    <Button label="Go to List Page" />
                </Link>
            </div>

            <div className="container">
                <div className="row text-center mt-5">
                    {data && data.length > 0 ? (
                        <div>
                            {" "}
                            <div className="heading">
                                Favourites List Dashboard
                            </div>
                            {data.map((item) => {
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
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="message">
                            No Item in the Favourites List, Go to list page and
                            add some favourites from the list
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
