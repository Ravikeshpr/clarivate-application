import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    test("renders correct label", () => {
        render(<Button label="test" />);
        const buttonLabel = screen.getByText("test");
        expect(buttonLabel).toBeInTheDocument();
    });
    test("click calls correct function handler", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick} label="test" />);

        fireEvent.click(screen.getByText("test"));
        expect(handleClick).toBeCalled();
    });
});
