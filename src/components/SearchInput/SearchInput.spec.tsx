import { SearchInput, ISearchInputProps } from './SearchInput.component';
import { fireEvent, render, screen } from '../../../.jest/utils'
import { MemoryRouter } from 'react-router-dom';

describe('SearchInput Component', () => {

  const TestProps: ISearchInputProps = {
    loading: false,
    search: jest.fn(),
  }

  const SearchInputTestComponent: React.FC<ISearchInputProps> = (props) => (
    <MemoryRouter>
      <SearchInput {...props} />
    </MemoryRouter>
  );

  it('does not trigger submit method for an empty string', () => {
    render(<SearchInputTestComponent {...TestProps} />);

    fireEvent.click(screen.getByTestId('@components/search-input/submit-cta'));

    expect(TestProps.search).not.toHaveBeenCalled();
  });

  it('triggers submit method on form submit', () => {
    render(<SearchInputTestComponent {...TestProps} />);

    fireEvent.change(screen.getByTestId('@components/search-input/query-input'), {
      target: { value: "new value" }
    });
    fireEvent.click(screen.getByTestId('@components/search-input/submit-cta'));

    expect(TestProps.search).toHaveBeenCalled();
  });
});
