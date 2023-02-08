import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NavBar from "../components/Navbar";

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));



describe("test the navbar", () => {
    test("calls navigate with the correct item",async () => {
        render(<NavBar></NavBar>);
        userEvent.click(screen.getByText("Home"));
        userEvent.click(screen.getByText("Search"));
        userEvent.click(screen.getByText("Your Playlists"));
        userEvent.click(screen.getByText("Create Playlist"));
        userEvent.click(screen.getByText("Favorites"));


        await waitFor(() => {
            expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
            expect(mockedUsedNavigate).toHaveBeenCalledWith("/search");
            expect(mockedUsedNavigate).toHaveBeenCalledWith("/playlists");
            expect(mockedUsedNavigate).toHaveBeenCalledWith("/create-playlist");
            expect(mockedUsedNavigate).toHaveBeenCalledWith("/favorites");    
        })
    })

})