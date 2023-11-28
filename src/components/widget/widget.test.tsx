import React from 'react'
import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Widget from './Widget'
import { widgetMock } from '../../test/mocks/product'

const manageActiveProductsMock = jest.fn()

describe('Widget', () => {
  describe('Unit - Render', () => {
    test('Should render correcly', () => {
      render(
        <Widget
          manageActiveProducts={manageActiveProductsMock}
          {...widgetMock}
        />
      )
      const badge = screen.getByTestId('badge')
      const descriptions = screen.getAllByRole('definition')
      expect(badge).toBeInTheDocument()
      expect(badge).toHaveTextContent(
        'This product collects 100 plastic bottles'
      )
      expect(descriptions).toHaveLength(3)
    })
  })

  describe('Functional - As a user I want to customize my widgets', () => {
    test('By changing their colors', () => {
      render(
        <Widget
          manageActiveProducts={manageActiveProductsMock}
          {...widgetMock}
        />
      )
      const whiteSwitch = screen.getByLabelText('Switch to white')
      user.click(whiteSwitch)
      const badge = screen.getByTestId('badge')
      expect(badge).toHaveClass('badge white')
    })
    test('By changing their active state', () => {
      render(
        <Widget
          manageActiveProducts={manageActiveProductsMock}
          {...widgetMock}
        />
      )
      const toggle = screen.getByLabelText('Toggle activate badge')
      user.click(toggle)
      expect(manageActiveProductsMock).toHaveBeenCalledWith(widgetMock.id)
    })
    test('By checking whether it is linked to my public profile', () => {
      render(
        <Widget
          manageActiveProducts={manageActiveProductsMock}
          {...widgetMock}
        />
      )
      const checkbox = screen.getByLabelText('Check link to public profile')
      expect(checkbox).toHaveAttribute('aria-checked', `${widgetMock.linked}`)
      user.click(checkbox)
      expect(checkbox).toHaveAttribute('aria-checked', `${!widgetMock.linked}`)
    })
  })
})
