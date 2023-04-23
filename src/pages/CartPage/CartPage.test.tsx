import {render, screen} from "@testing-library/react";
import CartPage from "./CartPage";
import userEvent from "@testing-library/user-event";

describe("Cart page", () => {
    test("loads and displays modal", async () => {
        render(<CartPage />)

        await userEvent.click(screen.getByText('Add product'))
        await screen.findByRole('modal')

        expect(screen.findByRole('modal')).toHaveTextContent("Confirm!")
    })
})