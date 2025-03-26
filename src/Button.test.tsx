import { render, screen, fireEvent , cleanup} from "@testing-library/react";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import Button from "./Button";

describe("Button Component", () => {
  let handleClick: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
  });

  afterEach(() => {
    cleanup();
  });

  test("renders button correctly", () => {
    const button = screen.getByRole("button");
    expect(button).not.toBeNull()
  });

  test("renders button and handles click", () => {
    const button = screen.getByRole("button"); 
    expect(button).not.toBeNull() 
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

});
