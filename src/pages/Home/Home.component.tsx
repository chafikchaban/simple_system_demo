import { useCallback } from 'react';
import { Box, Skeleton, Center, Flex, Text, Title, Stack, Accordion } from '@mantine/core';
import { IconZoomExclamation } from '@tabler/icons-react';
import { observer } from "mobx-react";
import React, { useEffect } from 'react';
import { UserAccordion } from '../../components/userAccordion/UserAccordion.component';
import { ISearchInputProps, SearchInput } from '../../components/SearchInput/SearchInput.component';
import { useSearchParams } from 'react-router-dom';
import { User } from '../../model/User.model';

export interface IHomeProps {
  vm: IHomeVM
}

export interface IHomeVM extends ISearchInputProps {
  query: string;
  loading: boolean;
  data?: Array<User>;
  initialiseData(initialParams: Record<string, string>): void;
}

export const HomeComponent: React.FC<IHomeProps> = observer(({ vm }) => {

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const initialParams = {};

    searchParams.forEach((value, key) => {
      initialParams[key] = value;
    });
    vm.initialiseData(initialParams)
  }, [])

  const renderResults = useCallback((): React.ReactElement => {

    if (vm.loading) {
      return (
        <Stack data-testid="@pages/home/loading" pt={'lg'} w={'100%'} mt={'xl'}>
          {Array.from({ length: 5 }, (_, index) => (
            <Box key={index} style={{ position: 'relative', flex: 1 }}>
              <Skeleton width={'100%'} height={100} radius="sm" />
            </Box>
          ))}
        </Stack>
      )
    }

    if (!vm.data) {
      return null
    }

    if (!vm.data.length) {
      return (
        <Center h={400}>
          <Flex
            justify="center"
            align="center"
            direction="column"
            wrap="nowrap"
          >
            <IconZoomExclamation size={24} />
            <Text size="m" fw={700} mt={16}>
              {'No Results Found'}
            </Text>
            <Text size="xs" mt={4} color="dimmed">
              {'We could not find any results matching your search criteria'}
            </Text>
          </Flex>
        </Center>
      )
    }

    return (
      <Box w={'100%'} mt={'xl'}>
        <Stack>
          <Text ta={'start'} c={'dimmed'}>{`Showing results for "${vm.query}"`}</Text>
          <Accordion
            w={'100%'}
            data-testid="@pages/home/users-list"
            variant="contained"
            multiple={true}
          >
            {vm.data.map((item) => (
              <UserAccordion
                data-testid="@pages/home/user-accordion"
                key={item.name}
                vm={item}
              />
            ))}
          </Accordion>
        </Stack>
      </Box>
    )
  }, [vm.data, vm.loading, vm.query])

  const renderHeader = useCallback((): React.ReactElement => {

    return (
      <Box style={{ width: '100%' }}>
        <Flex
          justify="center"
          align="center"
          direction="column"
          wrap="nowrap"
        >
          <Title>{'Github Users'}</Title>
          <SearchInput loading={vm.loading} size="lg" search={vm.search} />
        </Flex>
      </Box>
    )
  }, [vm.search, vm.loading])


  return (
    <Box>
      <Flex
        justify="center"
        align="center"
        direction="column"
        wrap="nowrap"
      >
        {renderHeader()}
        {renderResults()}
      </Flex>
    </Box>
  )
})
