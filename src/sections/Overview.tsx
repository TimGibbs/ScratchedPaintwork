import {Title, Text, Grid, List, Divider, Image, Group} from "@mantine/core";
import mech1 from '../assets/mech1.png'
const Overview = () => {


    return <div id="overview"  className="anchor">
        <Title order={2} style={{textAlign: "center"}}>Overview</Title>
        <Divider my="md" />
        <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
            <Grid.Col span={{base: 12, md: 6}}>
                <Text fw={500} pb="xs">Scratched Paintwork is a tabletop miniatures game where two players
                    compete with crews of three to five music themed mechs called DECKs, piloted by unique Jockeys. Each
                    game (or Record) lasts around 90 minutes.
                </Text>
                <Text fs="italic" pb="xs">It is 2178, megacorps dominate the Sol System. Living free ain’t cheap when everything
                    costs a bomb and they’ve always got a hook in you.</Text>
                <Text fs="italic" pb="xs">The closest some get is a life of high-tech violence piloting Dynamic Exoskeletal
                    Combat Kits or
                    ‘DECKs’. These jockeys band together as crews carrying out high-risk, plausibly-deniable wetwork for
                    whoever’s paying.
                </Text>
                <Text fs="italic" pb="xs">Every jockey is a pilot, mechanic, netrunner, and contract negotiator. Some are
                    even good it.
                </Text>
                <Text fs="italic" pb="xs">Eccentric joy-riders slam their deadly armoured assault vehicles into each on the
                    fringes of settled
                    worlds and crumbling cities, vying for corporate scraps and, occasionally, making it big. It’s a
                    short, vicious life for most but better to burn out than fade away.
                </Text>
                <Text fs="italic" pb="xs">Well.</Text>
                <Text fs="italic" pb="xs">At least the music’s good.</Text>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 6}}>
                <Title pb="md" order={3}>Gameplay</Title>
                <Text  pb="xs"> Scratched Paintwork uses a combination of six
                    sided (d6) and ten-sided (d10) dice. Each player
                    needs two of each.</Text>
                <Text  pb="xs"> Each player’s crew is be made up of three to five
                    DECKs, each piloted by a Jockey. Once assigned to
                    a DECK, Jockeys cannot be moved between DECKs.
                    In addition, crews can purchase additional Gear to
                    further mod their DECKs.</Text>
                <Text> Each game is played over a series of rounds (or
                    Tracks). Each Track has an Intro, Main and Outro
                    phase. After both sides are set up and ready, a
                    timer should be started for 75 minutes. Once the
                    timer has gone, the players should complete the
                    Track, and then end the Record.</Text>
                <Title pb="md" pt="md" order={3}>Track listing</Title>
                <Text pb="xs"> This rulebook contains the following sections:</Text>
                <List icon="⦿">
                    <List.Item>
                        <Text><Text component="span" fw={500}>Soundcheck</Text> – The basic rules for carrying out
                        actions with your units and other key
                        principles.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>The Performance</Text> – The rules for setting up
                        and playing games.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Battle of the Bands</Text> – Rules for choosing your
                        crew, and the different factions available to choose from.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>On Tour</Text> – Rules for running campaigns.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Baseline</Text> – Summary sheets with the key rules and information.</Text>
                    </List.Item>
                </List>
            </Grid.Col>
        </Grid>
        <Group justify="right">
            <Image src={mech1} w="35%" mah={300} fit="contain"/>
        </Group>
    </div>

}

export default Overview;