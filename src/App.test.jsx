import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the "Click on the Vite and React logos to learn more" text', () => {
    render(<App />)
    
    const text = screen.getByText('Click on the Vite and React logos to learn more')
    expect(text).not.toBeInTheDocument()
  })
})
