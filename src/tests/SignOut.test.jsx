import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { signOut } from "firebase/auth";
import SignOut from "../components/SignOut"

jest.mock('firebase/auth')

describe("test the sign out button", () => {
    test("it signs the person out when clicked", async () => {
        render( <SignOut></SignOut> );
        
        userEvent.click(screen.getByText("Sign Out"));
        
        await waitFor(() => {
            expect(signOut).toHaveBeenCalled();
        })
    })
})

