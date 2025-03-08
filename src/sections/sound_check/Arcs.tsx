import {Divider, Grid, Group, Image, Stack, Text, Title} from "@mantine/core";
import example1 from '../../assets/arcs_example_1.svg'

const Arcs = () => {
    return <div id="arcs" className="anchor">
        <Title order={2} pt="md">Arcs</Title>
        <Divider my="md"/>
        <Grid pb="xs">
            <Grid.Col span={9}>
                <Text pb="xs">Each DECK is mounted on a hex shaped base.  An imaginary line extending from
                    the two opposite points of the middle of the base determine the DECK’s front and
                    rear arcs. </Text>
                <Text pb="xs">In order to ‘see’ an enemy DECK, you must be able to draw an imaginary line from
                    anywhere on the active DECK’s base within its front arc to any point on the target
                    DECK’s base. Although weapons aren’t, visibility has unlimited range. </Text>
                <Text><Text component="span" fw={500}> Special Rule – Backshot</Text>: When making an attack, if the attacking DECK’s base is
                    wholly within the target’s Rear arc, then the target DECK is counted as having -1 DEF.</Text>
            </Grid.Col>
            <Grid.Col span={3}>
                <Stack justify="center" h="100%">
                    <Image src={example1} style={{display: "inline-block"}} />
                </Stack>
            </Grid.Col>
        </Grid>

    </div>;
}

export default Arcs