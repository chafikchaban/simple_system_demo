import React from 'react';
import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender, screen, fireEvent } from '@testing-library/react';


function render(ui: React.ReactNode) {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider>{children}</MantineProvider>
    ),
  });
}

export { render, screen, fireEvent }