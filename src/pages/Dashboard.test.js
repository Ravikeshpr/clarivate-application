import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import Dashboard from "./Dashboard";
import * as GlobalContex from "../context";

describe("Dashboard", () => {
    test("renders correct", () => {
        const contextValues = {
            state: {
                scrollYPosition: 0,
                list: [
                    { id: "1", title: "title", url: "url", isFavourite: true },
                ],
                offset: 1,
                isAPILoadReq: true,
            },
            dispatch: jest.fn(),
        };

        jest.spyOn(GlobalContex, "useGlobalContext").mockImplementation(
            () => contextValues
        );
        const dashboard = renderer.create(
            <BrowserRouter>
                <Dashboard />
            </BrowserRouter>
        );
        expect(dashboard).toMatchSnapshot();
    });
});
