import {Divider, List, Text, Title} from "@mantine/core";

const DiceTokensAndAllThatJazz = () => {
    return <div id="dice_tokens_and_all_that_jazz" className="anchor">
        <Divider my="md"/>
        <Title order={2}>Dice, tokens, and all that jazz</Title>
        <Divider my="md"/>
        <Text>Scratched Paintwork uses a range of different tokens and dice to track status and actions.</Text>
        <List  icon="⦿">
            <List.Item>
                <Text><Text component="span" fw={500}>Tokens</Text> should be placed on the battlefield next to the DECKs they
                relate to. This includes Initiative tokens (used each round to
                indicate the order to activation), and status tokens like Inferno,
                Tempo and Groove.</Text>
            </List.Item>
            <List.Item>
                <Text><Text component="span" fw={500}>Dice</Text> are used to Assign Actions and to track Damage. These should be placed on the DECK/Jockey unit
                    cards. Each DECK should be given a dice or tracker at the start of a game with its <Text component="span" fw={500}>STR</Text> on it. Each point of
                    damage reduces this number. When the number is reduced to 0, the dice can be removed as the DECK is
                    destroyed.</Text>
            </List.Item>
        </List>
    </div>;
}

export default DiceTokensAndAllThatJazz