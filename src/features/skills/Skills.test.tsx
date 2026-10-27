import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Skills } from './Skills'

describe('Skills', () => {
  it('switches categories accessibly', async () => {
    render(<Skills />)
    const backend = screen.getByRole('tab', { name: /backend/i })
    await userEvent.click(backend)
    expect(backend).toHaveAttribute('aria-selected', 'true')
    expect(await screen.findByText('NestJS')).toBeInTheDocument()
  })
})
