import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Item from "../components/Item"

//mock this so you don't have errors when calling Item
jest.mock("firebase/storage", () => ({
    ...jest.requireActual("firebase/storage"),
    getDownloadURL: () => jest.fn(() => new Promise.resolve("123")),
    getStorage: () => jest.fn(() => new Promise.resolve("123"))

}));

describe("test the item component", () => {
    test("calls play when play button is clicked", () => {
        let mockPlay = jest.fn();
        render( <Item play={mockPlay}></Item> );

        userEvent.click(screen.getByTestId("play"));

        expect(mockPlay).toHaveBeenCalled();
    })
})
