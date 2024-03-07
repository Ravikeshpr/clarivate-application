import Button from "../button/Button";
export default function Card({ item, handleAddAsFavourite = () => {}, type }) {
    return (
        <div className="card">
            <img src={item?.url} alt={item?.title} className="card-img" />
            <div className="title">
                <span>{item?.id}:</span>
                <span>{` ${item?.title}`}</span>
            </div>
            <div>
                {type === "list" && (
                    <div>
                        {!item.isFavourite ? (
                            <Button
                                onClick={() => handleAddAsFavourite(item)}
                                label="Add to favourite"
                            ></Button>
                        ) : (
                            <div className="favourite">Marked Favourite</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
