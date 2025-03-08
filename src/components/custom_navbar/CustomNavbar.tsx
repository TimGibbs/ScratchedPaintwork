import {AppShell, ScrollArea, Text} from "@mantine/core";
import {NavbarLinksGroup} from "../links_group/NavbarLinksGroup.tsx";
import {NavbarLink} from "../link/NavbarLink.tsx";
import {
    IconBrandDeezer,
    IconBus, IconHelpHexagon,
    IconInfoHexagon,
    IconMicrophone2,
    IconSwords,
    IconWaveSine
} from "@tabler/icons-react";

const CustomNavbar =() => {
    return <AppShell.Navbar p="md">
        <AppShell.Section grow component={ScrollArea}>
            <NavbarLink icon={IconInfoHexagon} label={"Overview"} link='#overview'/>
            <NavbarLinksGroup icon={IconBrandDeezer} label={"Sound Check"} links={[
                {label: "Core Stats", link: '#core_stats'},
                {label: "Example DECK & Jockey", link: "#example_deck_and_jockey"},
                {label: "Dice, tokens and all that jazz", link: "#dice_tokens_and_all_that_jazz"},
                {label: "General rules", link: "#general_rules"},
                {label: "Assigned actions", link: "#assigned_actions"},
                {label: "Moving", link: "#moving"},
                {label: "Arcs", link: "#arcs"},
                {label: "Jamming", link: "#jamming"},
                {label: "Attacking", link: ""},
                {label: "Weapon system traits", link: ""},
                {label: "Tokens", link: ""}
            ]
            }/>
            <NavbarLinksGroup icon={IconMicrophone2} label={"The Performance"} links={[
                {label: "Setup and deployment", link: ""},
                {label: "Game rounds", link: ""},
                {label: "Gigs", link: ""}
            ]
            }/>
            <NavbarLinksGroup icon={IconSwords} label={"Battle of the Bands"} links={[
                {label: "Creating a crew", link: ""},
                {label: "Dead Punks", link: ""},
                {label: "Rolling Thunder", link: ""},
                {label: "Beat Kings", link: ""}
            ]
            }/>
            <NavbarLinksGroup icon={IconBus} label={"On Tour"} links={[
                {label: "Campaigns overview", link: ""},
                {label: "The Review", link: ""},
                {label: "Campaign Cards", link: ""}
            ]
            }/>
            <NavbarLinksGroup icon={IconWaveSine} label={"Baseline"} links={[
                {label: "Jam List", link: ""},
                {label: "DECK List", link: ""},
                {label: "Jockey List", link: ""},
                {label: "Glossary", link: ""},
                {label: "Rules summary", link: ""}
            ]
            }/>
            <NavbarLinksGroup icon={IconHelpHexagon} label={"Q&A"}/>
        </AppShell.Section>
        <AppShell.Section>
            <div style={{fontFamily: 'skratch_punk', fontSize: 30}}>
                <div>Bad future</div>
                <div>good music</div>
                <div>Killer MECHs</div>
            </div>
            <Text c='dimmed' size="xs">All text and game concepts copyright Ross Pearson.</Text>
            <Text c='dimmed' size="xs">All images used as placeholders only.</Text>
            <Text c="dimmed" size="xs">Version 0.4 – Rules Test – March 2025 </Text>
        </AppShell.Section>
    </AppShell.Navbar>;
}

export default CustomNavbar;