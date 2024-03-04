import { renderHook } from "@testing-library/react";
import { useGlobalContext, GlobalContextProvider } from "./index";

test("context should have correct initial details", () => {
    const initalValues = {
        scrollYPosition: 0,
        list: [],
        offset: 1,
        isAPILoadReq: true,
    };
    const { result } = renderHook(() => useGlobalContext());
    expect(result.current.state.offset).toBe(initalValues.offset);
});
