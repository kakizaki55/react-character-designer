import { render } from '@testing-library/react';
import Display from './Display';

test('testing the Display section of the UI', () => {
  const container = render(
    <Display head="dead-tired-head" shirt="black-shirt" pants="black-pants" phraseList={[]} />
  );

  expect(container).toMatchSnapshot();
});
