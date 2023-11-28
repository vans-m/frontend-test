import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'
import { apiMock } from './test/mocks/product'

describe('App', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(apiMock),
      })
    ) as jest.Mock
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  describe('Functional - As I user', () => {
    test('Only one widget can have the active state at a time', async () => {
      await render(<App />)
      const loading = screen.getByTestId('loading')
      expect(loading).toBeInTheDocument()

      await waitFor(() => {
        const widgets = screen.getAllByTestId('widget')
        expect(widgets).toHaveLength(apiMock.length)
      })

      await waitFor(() => {
        const falseLoading = screen.queryByTestId('loading')
        expect(falseLoading).toBeFalsy()
      })

      await waitFor(() => {
        const firstToggle = screen.getByTestId('toggle-widget-1')
        expect(firstToggle).toHaveAttribute(
          'aria-checked',
          `${apiMock[0].active}`
        )
      })

      await waitFor(() => {
        const secondToggle = screen.getByTestId('toggle-widget-2')
        expect(secondToggle).toHaveAttribute(
          'aria-checked',
          `${apiMock[1].active}`
        )
      })

      await waitFor(() => {
        const thirdToggle = screen.getByTestId('toggle-widget-3')
        expect(thirdToggle).toHaveAttribute(
          'aria-checked',
          `${apiMock[2].active}`
        )
      })

      await waitFor(async () => {
        const thirdToggle = screen.getByTestId('toggle-widget-3')
        await user.click(thirdToggle)
        expect(thirdToggle).toHaveAttribute('aria-checked', 'true')
      })

      await waitFor(() => {
        const firstToggle = screen.getByTestId('toggle-widget-1')
        expect(firstToggle).toHaveAttribute('aria-checked', 'false')
      })

      await waitFor(() => {
        const secondToggle = screen.getByTestId('toggle-widget-2')
        expect(secondToggle).toHaveAttribute('aria-checked', 'false')
      })
    })
  })
})
