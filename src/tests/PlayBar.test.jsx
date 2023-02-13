import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import PlayBar from "../components/PlayBar"

describe("tests the playbar", () => {
    test("test if the play button works", async () => {
        const mockPlay = jest.fn();
        render(<PlayBar play={mockPlay}></PlayBar>);

        userEvent.click(screen.getByTestId("play-button"));
        await waitFor(() => {
            expect(mockPlay).toHaveBeenCalledTimes(1);
        })
    })

    test("test if the pause button works", async () => {
        const mockPause = jest.fn();
        render(<PlayBar pause={mockPause}></PlayBar>);

        userEvent.click(screen.getByTestId("pause-button"));
        await waitFor(() => {
            expect(mockPause).toHaveBeenCalledTimes(1);
        })
    })
})