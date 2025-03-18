import {render, screen} from "@testing-library/react"
import { describe, it, expect } from "vitest"
import MessageDisplayer from "../components/MessageDisplayer";

describe("Message Displayer Component", () => {
    it("render message correctly", () => {
        render(<MessageDisplayer message="This is info" messageType="info"/>);

        screen.debug()
        let messageElement = screen.getByTestId("message");

        expect(messageElement).toBeInTheDocument();
        expect(messageElement).toHaveTextContent("This is info");
    })
})