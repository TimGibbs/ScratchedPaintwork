import {Divider, Image, Grid, List, Table, Text, Title} from "@mantine/core";

import attack from '../../assets/action_attack.svg'
import evade from '../../assets/action_evade.svg'
import jam from '../../assets/action_jam.svg'
import move from '../../assets/action_move.svg'
import recover from '../../assets/action_recover.svg'
import signature from '../../assets/action_signature.svg'

const AssignedActions = () => {
    return <div id="assigned_actions" className="anchor">
        <Title order={2} pt="md">Assigned Actions</Title>
        <Divider my="md"/>
        <Grid gutter={{base: 5, xs: "md", md: "xl", xl: 50}}>
            <Grid.Col span={{base: 12, md: 6}}>
                <Text> During the Intro Phase for each Track (game
                    round), players assign each of their DECKs at least
                    two <Text component="span" fw={500}>Action Dice</Text>. These set out what the DECK is
                    going to do when it activates.</Text>
                <br/>
                <Text> Both Action Dice can be set to the same action, but
                    this does not simply duplicate the action. The
                    effect of the single or double dice is set out in the
                    table below.</Text>
                <br/>
                <Text> Some effects, allow a player to assign more than
                    two dice to a DECK. You can never assign more
                    than two Action Dice to have the same action.</Text>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 6}}>
                <Text> Action Dice are revealed when a DECK activates,
                    except Evade dice which are revealed when the
                    DECK is attacked and some Signature abilities
                    (individually listed). </Text>
                <br/>
                <Text> Important notes: </Text>
                <List>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Evading</Text>: Most actions happen when a DECK is
                            activated in the Main Phase of a Track. The
                            exception is Evade, which is in effect as soon
                            as it’s assigned to a DECK.</Text>
                    </List.Item>
                    <List.Item>
                        <Text><Text component="span" fw={500}>Free move</Text>: In addition to the actions chosen
                            from the Action Dice, every DECK gets to make
                            a normal Move immediately when activating.</Text>
                    </List.Item>
                </List>
            </Grid.Col>
        </Grid>
        <br/>

        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th style={{textAlign: "center"}}>Action</Table.Th>
                    <Table.Th miw={150} style={{textAlign: "center"}}>Dice Image</Table.Th>
                    <Table.Th style={{textAlign: "center"}}>Single Dice Action</Table.Th>
                    <Table.Th style={{textAlign: "center"}}>Double Dice Action</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td><Text style={{textAlign: "center"}}>Move</Text></Table.Td>
                    <Table.Td>
                        <Image src={move} mah={50} fit="contain"/>
                    </Table.Td>
                    <Table.Td>
                        <Text style={{textAlign: "center"}}>Move Action
                            Make another normal Move
                            equal to the DECK’s SPD stat.
                        </Text>
                    </Table.Td>
                    <Table.Td>
                        <Text style={{textAlign: "center"}}>
                            Make a normal Move equal to the
                            DECK’s SPD stat +3”.
                        </Text>
                    </Table.Td>
                </Table.Tr>
            </Table.Tbody>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td><Text style={{textAlign: "center"}}>Attack</Text></Table.Td>
                    <Table.Td>
                        <Image src={attack} mah={50} fit="contain"/>
                    </Table.Td>
                    <Table.Td>
                        <Text style={{textAlign: "center"}}>
                            Make an Attack with one weapon
                            system. </Text>
                        </Table.Td>
                    <Table.Td>
                        <Text style={{textAlign: "center"}}>
                            Make an Attack with one weapon
                            system with Advantage.</Text>
                        <Text style={{textAlign: "center"}} fw={500}>OR</Text>
                        <Text style={{textAlign: "center"}}>Make an Attack with each of the
                            DECK’s weapon systems.</Text>
                    </Table.Td>
                </Table.Tr>
            </Table.Tbody>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>
                        <Text style={{textAlign: "center"}}>Evade</Text>
                        </Table.Td>
                    <Table.Td rowSpan={2}>
                        <Image src={evade} mah={50} fit="contain"/>
                    </Table.Td>
                    <Table.Td>
                        <Text style={{textAlign: "center"}}>When being targeted by an
                        Attack, this unit can roll a d10 to
                        Evade instead of a d6.</Text> </Table.Td>
                    <Table.Td>
                        <Text style={{textAlign: "center"}}>In addition to the rules for a Single
                        Dice Evade, when rolling to Evade
                        you gain Advantage.</Text>

                        <Text style={{textAlign: "center"}}>When attacked this DECK can be turned to face the attacker.</Text> </Table.Td>
                </Table.Tr>
            </Table.Tbody>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td><Text style={{textAlign: "center"}}>Jam</Text></Table.Td>
                    <Table.Td>
                        <Image src={jam} mah={50} fit="contain"/>
                    </Table.Td>
                    <Table.Td><Text style={{textAlign: "center"}}>Use one of the DECK’s equipped
                        Jam Abilities.</Text> </Table.Td>
                    <Table.Td><Text style={{textAlign: "center"}}>In addition, when rolling to Jam you
                        gain Advantage.</Text></Table.Td>
                </Table.Tr>
            </Table.Tbody>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td><Text style={{textAlign: "center"}}>Recover</Text></Table.Td>
                    <Table.Td>
                        <Image src={recover} mah={50} fit="contain"/>
                    </Table.Td>
                    <Table.Td><Text style={{textAlign: "center"}}>You can remove d3 Negative
                        Tokens from the DECK.</Text> </Table.Td>
                    <Table.Td><Text style={{textAlign: "center"}}>You can remove d3+3 Negative
                        Tokens from the DECK.</Text> </Table.Td>
                </Table.Tr>
            </Table.Tbody>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td><Text style={{textAlign: "center"}}>Signature</Text></Table.Td>
                    <Table.Td>
                        <Image src={signature} mah={50} fit="contain"/>
                    </Table.Td>
                    <Table.Td><Text style={{textAlign: "center"}}>Use the signature ability for the
                        Genre (or Subgenre).</Text>
                        <Text style={{textAlign: "center"}}>Or, carry out a Mission action.</Text> </Table.Td>
                    <Table.Td><Text style={{textAlign: "center"}}><Text fw={500} component="span">Eject!</Text> Double assigning the
                        signature dice enables a Jockey to
                        abandon the DECK. This is used
                        exclusively in Campaign play, where
                        a Jockey might get injured if their
                        DECK is destroyed with them
                        inside.</Text> </Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    </div>;
}
export default AssignedActions;