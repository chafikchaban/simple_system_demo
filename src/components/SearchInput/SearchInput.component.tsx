import { TextInput, TextInputProps, Box, Button } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';

export interface ISearchInputProps extends TextInputProps {
  search(query: string): void;
  loading: boolean;
}

export const SearchInput: React.FC<ISearchInputProps> = ({ loading, search }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const form = useForm({
    initialValues: {
      query: searchParams.get('query') || '',
    },

    validate: {
      query: isNotEmpty(''),
    },
  });


  const updateQueryParams = (key: string, value: string) => {
    searchParams.set(key, value);
    setSearchParams(searchParams);
  }

  const onSubmit = (values) => {
    updateQueryParams('query', values.query);
    search(values.query);
  }

  return (
    <Box mt={'lg'} w={'100%'}>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <TextInput
          data-testid='@components/search-input/query-input'
          size='lg'
          leftSection={<IconSearch size={18} />}
          placeholder="Enter user name"
          {...form.getInputProps('query')}
        />
        <Button
          loading={loading}
          data-testid='@components/search-input/submit-cta'
          type='submit'
          mt={'sm'}
          variant="filled"
          fullWidth
          size='lg'
          loaderProps={{ type: 'dots' }}>
          Search
        </Button>
      </form>
    </Box>
  )
}
