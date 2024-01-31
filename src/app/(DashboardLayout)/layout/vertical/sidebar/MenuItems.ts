import {uniqueId} from "lodash";
import {
  IconAperture,
  IconAppWindow,
  IconBoxMultiple,
  IconMoodSmile,
  IconNotes,
  IconPoint,
  IconTicket,
  IconUserCircle,
} from "@tabler/icons-react";

interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}

const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Modern",
    icon: IconAperture,
    href: "/",
    chip: "New",
    chipColor: "secondary",
  },
  {
    navlabel: true,
    subheader: "Apps",
  },
  {
    id: uniqueId(),
    title: "Notes",
    icon: IconNotes,
    href: "/apps/notes",
  },
  {
    id: uniqueId(),
    title: "Tickets",
    icon: IconTicket,
    href: "/apps/tickets",
  },
  {
    navlabel: true,
    subheader: "Pages",
  },
  {
    id: uniqueId(),
    title: "Account Setting",
    icon: IconUserCircle,
    href: "/theme-pages/account-settings",
  },
  {
    id: uniqueId(),
    title: "Landingpage",
    icon: IconAppWindow,
    href: "/landingpage",
  },
  {
    navlabel: true,
    subheader: "Other",
  },
  {
    id: uniqueId(),
    title: "Menu Level",
    icon: IconBoxMultiple,
    subtitle: "This is the sutitle",
    href: "",
    chip: "9",
    chipColor: "primary",
    children: [
      {
        id: uniqueId(),
        title: "Level 1",
        icon: IconPoint,
        href: "/l1",
      },
      {
        id: uniqueId(),
        title: "Level 1.1",
        icon: IconPoint,
        href: "/l1.1",
        children: [
          {
            id: uniqueId(),
            title: "Level 2",
            icon: IconPoint,
            href: "/l2",
          },
          {
            id: uniqueId(),
            title: "Level 2.1",
            icon: IconPoint,
            href: "/l2.1",
            children: [
              {
                id: uniqueId(),
                title: "Level 3",
                icon: IconPoint,
                href: "/l3",
              },
              {
                id: uniqueId(),
                title: "Level 3.1",
                icon: IconPoint,
                href: "/l3.1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: uniqueId(),
    title: "Outlined",
    icon: IconMoodSmile,
    href: "",
    chip: "outline",
    variant: "outlined",
    chipColor: "primary",
  },
];

export default Menuitems;
