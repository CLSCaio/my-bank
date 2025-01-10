import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from 'components';

describe('Input component', () => {
  const mockOnChange = jest.fn();

  it('should call onChange when typing', () => {
    render(
      <Input
        name="testInput"
        label="Test Label"
        type="text"
        value=""
        onChange={mockOnChange}
      />
    );

    const input = screen.getByLabelText(/test label/i);

    fireEvent.change(input, { target: { value: 'new value' } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
