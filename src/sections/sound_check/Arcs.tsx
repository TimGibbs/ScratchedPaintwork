import {Divider, Grid,  Image, Stack, Text, Title} from "@mantine/core";
import example1 from '../../assets/arcs_example_1.svg'
import example2 from '../../assets/arcs_example_2.svg'

const Arcs = () => {
    return <div id="arcs" className="anchor">
        <Divider my="md"/>
        <Title order={2} >Arcs</Title>
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
        <Grid pb="xs">
            <Grid.Col span={3}>
                <Stack justify="center" h="100%">
                    <Image src={example2} style={{display: "inline-block"}} />
                </Stack>
            </Grid.Col>
            <Grid.Col span={9}>
                <Text pb="xs"><Text component="span" fw={500}>Example 1</Text>: In the diagram, the central DECK is attacking. The Green and Blue DECKs are valid targets
                    because a line can be drawn from the attacking DECK’s base, within its front arc, to a point on the target’s base.
                    The red DECK is not a valid target because a line cannot be drawn from the front arc to it.</Text>
                <Text pb="xs"><Text component="span" fw={500}>Example 2</Text>: In the diagram, the central DECK is a target of an attack. When attacking, the Red DECK
                    would gain the benefit of the Backshot rule (-1 DEF on the target) because its base is wholly within the target’s
                    rear arc. The Blue DECK would not benefit from the rule however, as its base is not wholly within the target’s
                    rear arc. </Text>
            </Grid.Col>

        </Grid>
    </div>;
}

export default Arcs