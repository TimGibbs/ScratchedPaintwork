import {Divider, Text, Title, Grid,} from "@mantine/core";

const GeneralRules = () => {
    return <div id="jamming" className="anchor">
        <Divider my="md"/>
        <Title order={2}>Jamming</Title>
        <Divider my="md"/>
        <Text pb="md">Each Jam Ability has a unique effect, but each is either a Solo Jam or Duel Jam. Duel Jams have a maximum
            range, but do not require visibility to their target.</Text>
        <Grid gutter={{base: 5, xs: "md", md: "xl", xl: 50}}>
            <Grid.Col span={6}>
                <Text><Text component="span" fw={500}>Solo</Text> – Solo Jams have a difficulty listed in
                    brackets. In order to use the ability, the Jockey
                    rolls a d10 and adds their JAM. If the result
                    equals or beats that difficulty, the ability goes
                    off. </Text>
            </Grid.Col>
            <Grid.Col span={6}>
                <Text><Text component="span" fw={500}>Duel</Text> – Duelling Jams can only target enemy
                    DECKs. Each Duel Jam has a range, but does
                    not require visibility. To resolve, the instigating
                    Jockey and the target both roll d10s adding
                    their respective JAM stat.  If the instigating
                    Jockey equals or beats the target’s score, the
                    Jam ability goes off. </Text>
            </Grid.Col>
        </Grid>
    </div>;
}

export default GeneralRules