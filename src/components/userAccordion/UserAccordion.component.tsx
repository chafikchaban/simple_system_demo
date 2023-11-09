import React, { memo, useCallback } from 'react'

import { Accordion, Group, Paper, ScrollArea, Stack, Text, Title } from '@mantine/core'
import { IconStarFilled } from '@tabler/icons-react';
import { User } from '../../model/User.model';

export interface UserAccordionVM {
  vm: User;
}

export const UserAccordion: React.FC<UserAccordionVM> = memo(({ vm, ...props }) => {

  const renderRepositories = useCallback(() => {
    if (!vm.repos.length) {
      return (<Text mt={'xl'} ta={'start'} c={'dimmed'}>{'Nothing to see here'}</Text>)
    }

    return vm.repos.map(repo => {
      return (
        <Paper
          key={repo.name}
          data-testid='@components/user-accordion-repository'
          shadow="xs" radius="xs" withBorder p="xl">
          <Group justify="space-between">
            <Title order={5}>{repo.name}</Title>
            <Group gap={'xs'}>
              <Text fw={700}>{repo.stars}</Text>
              <IconStarFilled size={16} />
            </Group>
          </Group>
          <Text mt={'xl'} ta={'start'}>{repo.description}</Text>
        </Paper>
      )
    })
  }, [vm.repos])

  return (
    <Accordion.Item {...props} key={vm.name} value={vm.name} w={'100%'}>
      <Accordion.Control>
        <Text fw={500}>{vm.name}</Text>
      </Accordion.Control>
      <Accordion.Panel>
        <ScrollArea.Autosize mah={'30vh'}>
          <Stack>
            {renderRepositories()}
          </Stack>
        </ScrollArea.Autosize>
      </Accordion.Panel>
    </Accordion.Item>
  )
})
