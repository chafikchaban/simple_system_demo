import { UserAccordion } from './UserAccordion.component';
import { render, screen } from '../../../.jest/utils'
import { User } from '../../model/User.model';
import { Accordion } from '@mantine/core';

describe('UserAccordion Component', () => {

  class TestVM implements User {
    public name = 'user 1';
    public repos = [
      {
        name: 'repo 1',
        description: 'repo 1 description',
        stars: 0,
      },
      {
        name: 'repo 2',
        description: 'repo 2 description',
        stars: 0,
      },
    ];
  }

  let vm: TestVM;

  beforeEach(() => {
    vm = new TestVM();
  });

  const UserAccordionTestComponent: React.FC<{ vm: User }> = (props) => (
    <Accordion>
      <UserAccordion {...props} />
    </Accordion>
  );

  it('renders the user info', () => {
    render(<UserAccordionTestComponent vm={vm} />);

    expect(screen.getByText('user 1')).toBeTruthy();
  });

  it('renders all user repositories', () => {
    render(<UserAccordionTestComponent vm={vm} />);

    expect(screen.queryAllByTestId('@components/user-accordion-repository')).toHaveLength(2);
  });
});
