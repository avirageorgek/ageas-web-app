import { render, screen } from "@testing-library/react";
import Header from "../components/Header"; // Make sure this path is correct
import { describe, it, expect } from "vitest";

describe("Header Component", () => {
  it("renders the title correctly", () => {
    render(<Header title="Test Title" />); 

    screen.debug(); 

    const titleElement = screen.getByTestId("title");

    expect(titleElement).toBeInTheDocument(); 
    expect(titleElement).toHaveTextContent("Test Title"); 
  });
});