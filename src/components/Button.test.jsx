import { render, screen, cleanup} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, it, vi, describe, afterEach } from "vitest"
import { Button } from "./Button"

describe('Button', () => {
  afterEach(cleanup)
  it('renders without errors', () => {
    render(<Button >::Button::</Button>)
    expect(screen.getByText('::Button::')).toBeInTheDocument()
  })
  
  it('bind props passed to component', async () => {
    const mockClick = vi.fn()
    render(<Button onClick={mockClick}>::Button::</Button>)
    const button = screen.getByText('::Button::')
    await userEvent.click(button)
    expect(mockClick).toBeCalledTimes(1)
  })
})