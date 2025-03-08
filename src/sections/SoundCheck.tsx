import {Image, Title} from "@mantine/core";
import sound_check from '../assets/sound_check.jpg'
import CoreStats from "./sound_check/CoreStats.tsx";
import ExampleDeckAndJockey from "./sound_check/ExampleDeckAndJockey.tsx";
import DiceTokensAndAllThatJazz from "./sound_check/DiceTokensAndAllThatJazz.tsx";
import GeneralRules from "./sound_check/GeneralRules.tsx";
import AssignedActions from "./sound_check/AssignedActions.tsx";
import Moving from "./sound_check/Moving.tsx";

const SoundCheck = () => {

    return <div id="soundcheck"  className="anchor">
        <Title pb="md" pt="md" order={1} style={{textAlign: "center"}}>Sound Check</Title>
        <Image src={sound_check} alt="Sound Check Image" pb="md" />
        <CoreStats/>
        <ExampleDeckAndJockey/>
        <DiceTokensAndAllThatJazz/>
        <GeneralRules/>
        <AssignedActions/>
        <Moving/>
    </div>
}

export default SoundCheck;