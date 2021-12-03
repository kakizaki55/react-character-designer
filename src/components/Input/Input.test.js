import { render } from '@testing-library/react';
import Input from './Input';

test('testing the input section of the UI', () => {
  const container = render(<Input />);

  expect(container).toMatchSnapshot();
});
