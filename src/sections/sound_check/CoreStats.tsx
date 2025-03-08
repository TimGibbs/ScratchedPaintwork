import {Divider, Grid, List, Text, Title} from "@mantine/core";

const CoreStats = () => {
    return <div id="core_stats" className="anchor">
        <Title order={2} pt="md" >Core Stats</Title>
        <Divider my="md"/>
        <Grid gutter={{base: 5, xs: "md", md: "xl", xl: 50}}>
            <Grid.Col span={{base: 12, md: 6}}>
                <Title pb="md" order={3}>Jockeys</Title>
                <Text> Each Jockey has four stats, defining how effective
                    they are at piloting a DECK. These stats run from 3
                    (a talentless hack) through to 9 (an all time, hall of
                    famer). </Text>
                <List>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Presence (PRS)</Text> – A general measure of
                        experience and used to determine order of
                            action in a round.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Skill (SKL)</Text> – How good the Jockey is at
                            attacking with Weapon Systems.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Evasion (EVA)</Text> – How good the Jockey is at
                        dodging Weapon System attacks.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Jam (JAM)</Text> – How good the Jockey is at using,
                            and defending against, Jam abilities.</Text>
                    </List.Item>
                </List>
                <br/>
                <Title pb="md" order={3}>DECKS</Title>
                <Text> Dynamic Exoskeletal Combat Kits, or DECKs, are
                    generally 15 to 20 feet tall and come equipped
                    with an array of weaponry and electronic warfare
                    capabilities. These generally come in three classes,
                    Light, Medium and Heavy. Each has the following
                    stats: </Text>
                <List>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Defence (DEF)</Text> – Damage reduction from each
                        hit; generally from 3 (heavy) to 1 (light). Note
                        that if hit, a DECK will always take at least 1
                            point of damage unless otherwise stated.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Speed (SPD)</Text> – How fast in inches a DECK can
                        move for each move action; generally from 8
                            9” (light) to 3-4” (heavy).</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Evasion Modifier (EVM)</Text> – A modifier to the
                        Jockey’s EVA; generally running from -2
                            (heavy) to +2 (light).</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Structure (STR)</Text> – How much damage a DECK
                        can sustain before being destroyed; from 5-6
                            (light) to 9-10 (heavy).</Text>
                    </List.Item>
                </List>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 6}}>
                <Title pb="md" order={3}>Value</Title>
                <Text> Each DECK, Jockey and additional piece of Gear has
                    a <Text component="span" fw={500}>Value (VAL)</Text>. Ensure that a combined VAL for
                    each complete unit of DECK, Jockey and Gear is
                    recorded. </Text>
                <br/>
                <Title pb="md" order={3}>Weapon Systems</Title>
                <Text> Each DECK will have at least one Weapon System.
                    These are used to make Attack actions using the
                    SKL stat. Attacks can only be made against visible
                    targets (see – Visibility). Attacks are avoided using
                    the EVA stat. Each Weapon System has the
                    following stats: </Text>
                <List>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Range (RNG)</Text> – How far in inches the weapon
                        can hit an enemy DECK. Some weapons can’t
                        be fired at close range and will have a RNG
                        band. For example a Cataclysm Howitzer has
                        RNG 8” to 24”, meaning it can’t be fired at
                            DECKs closer than 7” or further than 24”.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Power (POW)</Text> – How much damage a weapon
                        does if it hits. POW is reduced by DEF, but a
                        successful hit always does at least 1 damage
                            (unless otherwise stated by the weapon).</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Traits</Text> – Most weapons have one or more traits
                            that have additional effects.</Text>
                    </List.Item>
                </List>
                <br/>
                <Title pb="md" order={3}>Jam Abilities </Title>
                <Text> Most DECKs have at least one <Text component="span" fw={500}>Jam Ability</Text> installed.
                    These are used with the Jam action and are
                    affected (and resisted) by a Jockey’s JAM stat. Each
                    Jam Ability has a unique effect, which is
                    individually described, but they fit broadly into two
                    types: <Text component="span" td="underline">Solo</Text> and <Text component="span" td="underline">Duel</Text>.</Text>
            </Grid.Col>
        </Grid>
    </div>;
}
export default CoreStats;