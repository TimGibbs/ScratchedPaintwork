import './App.css'

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import {MantineProvider, AppShell, Burger, Group} from '@mantine/core';
import {useDisclosure} from "@mantine/hooks";
import CustomNavbar from "./components/custom_navbar/CustomNavbar.tsx";
import Overview from "./sections/Overview.tsx";
import theme from "./CustomTheme.ts";
import SoundCheck from "./sections/SoundCheck.tsx";


function App() {
    const [opened, {toggle}] = useDisclosure();
    return (
        <MantineProvider theme={theme}>
            <AppShell
                header={{height: 60}}
                navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
                padding="md"
            >
                <AppShell.Header>
                    <Group h="100%" px="md" justify="space-between">
                        <Group>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                            <div style={{ fontFamily: 'punk_kid', fontSize: 30 }}>Scratched Paintwork</div>
                        </Group>
                    </Group>
                </AppShell.Header>
                <CustomNavbar/>
                <AppShell.Main>
                    <Overview/>
                    <SoundCheck/>
                </AppShell.Main>
            </AppShell>
        </MantineProvider>
    );
}

export default App;
