import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Projects } from './Projects'

vi.mock('gsap/Draggable', () => ({ Draggable: { create: () => [{ kill: () => {} }] } }))
describe('Projects gallery', () => {
  it('renders every case study and advances with controls', async () => {
    render(<Projects />)
    expect(screen.getAllByRole('article')).toHaveLength(5)
    await userEvent.click(screen.getByRole('button', { name: 'Next project' }))
    expect(screen.getByText('02 / 05')).toBeInTheDocument()
  })
})
