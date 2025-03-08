import {Divider, Image, List, Text, Title, Group} from "@mantine/core";
import mech2 from "../../assets/mech2.png";

const GeneralRules = () => {
    return <div id="general_rules" className="anchor">
        <Title order={2} pt="md">General rules</Title>
        <Divider my="md"/>
        <Title order={3} pb="xs">Attacker Wins on Ties </Title>
        <Text>This is more of a principle than a rule, during opposed rolls such as attack vs evade and Duel Jams, the
            Attacker’s result must be beaten by the Defender for them to avoid the result.</Text>
        <Title order={3} pb="xs" pt="md">Critical Defensive success </Title>
        <Text>Similarly, during opposed rolls, the defender always has a chance. On a natural roll of a 10, a defender will
            always successfully evade an attack or resist a Duel Jam. This benefit does not exist when only rolling a d6 to
            evade.</Text>
        <Title order={3} pb="xs" pt="md">Advantage and Disadvantage </Title>
        <Text  pb="xs">Some abilities and affects grant Advantage or Disadvantage.</Text>
        <List  pb="xs" icon="⦿">
            <List.Item>
                <Text><Text component="span" fw={500}>Advantage</Text> – When an action is carried out with Advantage,
                    roll two dice and choose the highest.</Text>
            </List.Item>
            <List.Item>
                <Text><Text component="span" fw={500}>Disadvantage</Text> – When an action is carried out with
                    Disadvantage, roll two dice and choose the lowest.</Text>
            </List.Item>
        </List>
        <Text>Each ‘point’ of Advantage cancels out one of Disadvantage and vice versa. For example, if a DECK has two
            sources of Advantage and one Disadvantage, they ultimately end up getting Advantage on the roll. </Text>
        <Title order={3} pb="xs" pt="md">Measuring</Title>
        <Text>In general, players can freely measure distances in advance of choosing actions and targets. </Text>
        <Title order={3} pb="xs" pt="md">Terminology</Title>
        <Text  pb="xs">When referring to in game abilities and rules, DECKs and Jockeys are considered a single in game unit. As
            such,
            rules may refer to either as the target of various rules. Generally, because they’re the visible physical
            presence,
            most rules will refer to DECKs during the game. </Text>
        <Text>When you’re assembling a crew and during campaign sessions, the distinction becomes more important and
            will be stated more clearly.</Text>
        <Group justify="right" pt={15}>
            <Image src={mech2} w="35%" mah={300} fit="contain"/>

        </Group>
    </div>;
}

export default GeneralRules