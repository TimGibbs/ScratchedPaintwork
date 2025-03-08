import {Divider, Image, Text, Title} from "@mantine/core";
import example_jockey_and_deck from "../../assets/example_jockey_and_deck.png";

const ExampleDeckAndJockey = () => {
    return <div id="example_deck_and_jockey" className="anchor">
        <Title order={2} pt="md">Example DECK & Jockey </Title>
        <Divider my="md"/>
        <Text>Each DECK and each Jockey has a card. Below is an example from the Dead Punks. Jockeys should normally
            be
            placed immediately to the left of the DECK to make it easier to see the combined EVA and EVM when
            rolling to
            evade attacks.
        </Text>
        <Image src={example_jockey_and_deck} h={500} fit="contain"/>
    </div>;
}

export default ExampleDeckAndJockey