import reducer from "./reducer";

test("context should have correct initial details", () => {
    const initalState = {
        scrollYPosition: 0,
        list: [],
        offset: 1,
        isAPILoadReq: true,
    };

    const action = {
        type: "ADD_DATA",
        payload: [{ id: 1, title: "title", url: "url" }],
    };

    const finalState = {
        scrollYPosition: 0,
        list: [{ id: 1, title: "title", url: "url" }],
        offset: 1,
        isAPILoadReq: true,
    };

    expect(reducer(initalState, action)).toEqual(finalState);
});
