import React from 'react';
import { Box,  Group, ThemeIcon, UnstyledButton } from '@mantine/core';
import classes from './NavbarLinks.module.css';
import {IconCalendarStats} from "@tabler/icons-react";

interface NavbarLinkProps {
    icon: React.FC<any>;
    label: string;
    link: string;
}

export function NavbarLink({ icon: Icon, label, link }: NavbarLinkProps) {
    return (
        <>
            <UnstyledButton component="a" className={classes.control} href={link}>
                <Group justify="space-between" gap={0}>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <ThemeIcon variant="light" size={30}>
                            <Icon size={18} />
                        </ThemeIcon>
                        <Box ml="md">{label}</Box>
                    </Box>
                </Group>
            </UnstyledButton>
        </>
    );
}

export function NavbarLinksGroup() {
    return (
        <Box mih={220} p="md">
            <NavbarLink label='Releases' icon={IconCalendarStats} link='#place'/>
        </Box>
    );
}