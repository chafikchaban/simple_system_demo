import { HomeComponent, IHomeVM } from './Home.component';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '../../../.jest/utils'

describe('Home Component', () => {

  class TestVM implements IHomeVM {

    public query: string = '';
    public loading: boolean = false;
    public data = [
      { name: 'user 1', repos: [] },
      { name: 'user 2', repos: [] },
    ];
    public initialiseData = jest.fn();
    public search = jest.fn();
  }

  let vm: TestVM;

  beforeEach(() => {
    vm = new TestVM();
  });

  const HomeTestComponent: React.FC<{ vm: IHomeVM }> = (props) => (
    <MemoryRouter>
      <HomeComponent {...props} />
    </MemoryRouter>
  );

  it('renders the component with loading skeleton', () => {
    const loadingVM = { ...vm, loading: true };
    render(<HomeTestComponent vm={loadingVM} />);

    expect(screen.getByTestId('@pages/home/loading')).toBeTruthy();
  });

  it('renders "No Results Found" when no data is available', () => {
    const noDataVM = { ...vm, data: [] };
    render(<HomeTestComponent vm={noDataVM} />);

    expect(screen.getByText('No Results Found')).toBeTruthy();
  });

  it('renders the list of users when data is available', () => {
    render(<HomeTestComponent vm={vm} />);

    expect(screen.getByTestId('@pages/home/users-list')).toBeTruthy();
    expect(screen.getAllByTestId('@pages/home/user-accordion')).toHaveLength(2);
  });
});
