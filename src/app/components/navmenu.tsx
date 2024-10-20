"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const AboutUsComponents: { title: string; href: string; description: string }[] = [
    {
        title: "About",
        href: "https://pinnaclepartnerships.com/about-2/",
        description:
            "Pinnacle Partnerships is a collaborative platform that brings together top professionals from various sectors of the real estate industry, including brokers, legal advisers, financial planners, and more.",
    },
    {
        title: "Our Mission",
        href: "https://pinnaclepartnerships.com/mission-and-vission/",
        description:
            "Our mission is to create a collaborative ecosystem of real estate professionals to exchange expertise, build a strong referral network, drive best practices, and deliver exceptional client outcomes while fostering innovation and sustainable growth.",
    },
    {
        title: "Reason to choose Us",
        href: "/docs/primitives/progress",
        description:
            "Pinnacle Partnerships focuses on collaboration and transparency to ensure successful transactions, enhancing the real estate process and client satisfaction.",
    },
    {
        title: "Partner Member List",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Clients that hired us",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Our Founding Conveyor",
        href: "https://pinnaclepartnerships.com/our-founding-conveyor/",
        description:
            "FOA and VOE have focused on providing sustainable real estate solutions and building trust through collaboration, leading to the creation of Pinnacle Partnerships, a community dedicated to shared insights, ethical pursuits, and meaningful collaborations.",
    },
]

const HireComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Why Hire a Partner",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Schedule A Meeting",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    }
]

const JoinPartnershipComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Why Join",
        href: "/docs/primitives/alert-dialog",
        description:
            "Join Pinnacle Partnerships to access unmatched growth, collaboration, and success opportunities, benefiting from our expert network, comprehensive support, and dynamic community, ensuring your pivotal role in shaping the industry's future.",
    },
    {
        title: "Leadership Roles",
        href: "/docs/primitives/hover-card",
        description:
            "Pinnacle Partnerships thrives through a triumvirate of leadership—Strategical, Tactical, and Operational—where all partner members contribute to the development, maintenance, and implementation of the organization's mission.",
    },
    {
        title: "Membership Application",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Schedule a Meeting",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    }
]

const ResourceComponents: { title: string; href: string; description: string }[] = [
    {
        title: "Resources",
        href: "https://pinnaclepartnerships.com/resources/",
        description:
            "Pinnacle Partnerships provides essential resources, including legal documents, meeting agendas, calendars, co-marketing agreements, and member engagement policies, to support partner members' active participation and collaboration in achieving the organization's mission.",
    },
    {
        title: "Press Release",
        href: "https://pinnaclepartnerships.com/press-release/",
        description:
            "The Pinnacle Partnerships press center provides the latest news, updates, and insights on the organization's initiatives, including press releases, announcements, and monthly meeting agendas.",
    },
    {
        title: "Blog",
        href: "https://pinnaclepartnerships.com/blog-pinnacle-partnerships/",
        description:
            "The June Monthly Agenda for Pinnacle Partnerships includes the Founding Origination Meeting on June 4, 2024, via MS Teams, with details and agenda available for download.",
    },
    {
        title: "Caledar & Agendas",
        href: "https://pinnaclepartnerships.com/calendar-agenda/",
        description:
            "Access our monthly meeting agenda framework . Use the calendar to keep track of upcoming events, meetings, and important dates.",
    },
    {
        title: "Contact",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    }
]


export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>


                <NavigationMenuItem>
                    <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {AboutUsComponents.map((AboutUsComponents) => (
                                <ListItem
                                    key={AboutUsComponents.title}
                                    title={AboutUsComponents.title}
                                    href={AboutUsComponents.href}
                                >
                                    {AboutUsComponents.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuTrigger>Hire Partner</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {HireComponents.map((HireComponents) => (
                                <ListItem
                                    key={HireComponents.title}
                                    title={HireComponents.title}
                                    href={HireComponents.href}
                                >
                                    {HireComponents.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuTrigger>Join Partnerships</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {JoinPartnershipComponents.map((JoinPartnershipComponents) => (
                                <ListItem
                                    key={JoinPartnershipComponents.title}
                                    title={JoinPartnershipComponents.title}
                                    href={JoinPartnershipComponents.href}
                                >
                                    {JoinPartnershipComponents.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>


                <NavigationMenuItem>
                    <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {ResourceComponents.map((ResourceComponents) => (
                                <ListItem
                                    key={ResourceComponents.title}
                                    title={ResourceComponents.title}
                                    href={ResourceComponents.href}
                                >
                                    {ResourceComponents.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>


    
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
