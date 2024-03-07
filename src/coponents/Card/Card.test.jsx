import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import Card from "./Card";

describe("Card", () => {
    test("Card should render without props", () => {
        const componentTree = renderer.create(<Card />).toJSON();

        expect(componentTree).toMatchSnapshot();
    });
    test("renders correct buttons", () => {
        const props = {
            item: [
                { id: "1", title: "title1", url: "url1", isFavourite: false },
            ],
            type: "list",
        };
        render(<Card item={props.item[0]} type={props.type} />);
        const cardLabel = screen.getByText("Add to favourite");
        expect(cardLabel).toBeInTheDocument();
    });
});
