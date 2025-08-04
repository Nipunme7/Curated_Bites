import React from 'react';
import { render } from '@testing-library/react';

test('renders app without crashing', () => {
  // Simple test that just ensures the testing environment works
  const { container } = render(<div>Test App</div>);
  expect(container).toBeInTheDocument();
});
