import { AppShell, Group, em } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

type AppLayoutProps = {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const isWideScreen = useMediaQuery(`(min-width: ${em(1600)})`);

  return (
    <AppShell
      header={{ height: 80 }}
      pl={isWideScreen && 300}
      pr={isWideScreen && 300}
    >
      <AppShell.Header style={{ background: '#22313E' }}>
        <Group h="100%" px="md">
          <img src={'https://assets-global.website-files.com/63ea2638712982869dc872ef/63ee734b1911ea6499e65f4f_logo-simple-system-white.svg'} style={{ height: 20 }} alt="logo" />
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

export default AppLayout