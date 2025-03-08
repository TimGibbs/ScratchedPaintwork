import {Divider, Image, Text, Title} from "@mantine/core";
import example1 from '../../assets/move_example_1.svg'
import example3 from '../../assets/move_example_3.svg'
import example4 from '../../assets/move_example_4.svg'
const Moving = () => {
    return <div id="moving" className="anchor">
        <Title order={2} pt="md">General rules</Title>
        <Divider my="md"/>
        <Text>When making a normal Move, move a DECK up to its SPD in inches. DECKs can move over friendly or enemy
            DECKs but they must be able to fully clear what its moving over. Any Move that takes a DECK’s base over
            another DECKs base is called a ‘Fly Over’.</Text>
        <br/>
        <div style={{textAlign: "center"}}>
            <Text size="xs" pb={10}><Text component="span" fw={500}>Example 1:</Text> The Red DECK has a SPD of 8”, it can move up to 8” in a single Move
                action.</Text>
            <Image src={example1} width="100%" maw={400} fit="contain" w="80%" style={{margin: "0 auto"}}/>
            <br/>
            <Text size="xs" pb={10}><Text component="span" fw={500}>Example 2:</Text> The Red DECK has a SPD of 8”, it passes through an over the Blue DECK. It has
                carried out a
                Fly Over.</Text>
            <Image src={example3} width="100%" maw={400} fit="contain" w="80%" style={{margin: "0 auto"}}/>
        </div>
        <Title order={3} pb="md" pt="md">Obstacles</Title>
        <Text>DECKs can pass through obstacles, as long as their base can completely clear the obstacle. No part of a DECK’s
            base can be placed on an obstacle at any point. However, if a DECK passes through an obstacle it must roll a
            d10 – it if rolls above its PRS it suffers 1 Damage.
        </Text>
        <br/>
        <Text>DECKs can combined their free move with a move action (see – Assigned Actions) to clear obstacles they
            otherwise wouldn’t be able to cross. This will mean that their first action must be a move, to link it with the
            free move.
        </Text>
        <br/>

        <div style={{textAlign: "center"}}>
            <Text size="xs" pb={10}><Text component="span" fw={500}>Example 3:</Text> The Red DECK has a SPD of 8” and a PRS of 6, it passes straight through the
                Obstacle. The player
                rolls a d10 and gets a 7, the DECK sustains 1 Damage.
            </Text>
            <Image src={example4} width="100%" maw={400} fit="contain" w="80%" style={{margin: "0 auto"}}/>
        </div>
        <Title order={3} pb="md" pt="md">Involuntary movement and impacts</Title>
        <Text>Some weapons and abilities can cause involuntary movement. DECKs cannot move through obstacles and other
            DECKs from involuntary moves – stopping at the point of contact. However, if a DECK contacts an obstacle or
            another DECK as a result it suffers 1 Damage. If a DECK is forced to move into another DECK, the DECK that is
            contacted this way also suffers 1 Damage. </Text>
        <br/>
        <Text>DECKs cannot be moved off of the board. Treat the edge of the board an obstacle when relevant.</Text>
    </div>;
}

export default Moving