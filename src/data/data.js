import todoIcon from "../assets/svgs/icon-todo.svg";
import calenderIcon from "../assets/svgs/icon-calendar.svg";
import reminderIcon from "../assets/svgs/icon-reminders.svg";
import planIcon from "../assets/svgs/icon-planning.svg";
import bizIcon from "../assets/svgs/client-databiz.svg";
import audioIcon from "../assets/svgs/client-audiophile.svg";
import meetIcon from "../assets/svgs/client-meet.svg";
import markerIcon from "../assets/svgs/client-maker.svg";

export const NAV_DATA = [
  {
    id: 1,
    title: "Features",
    subNav: [
      {
        title: "Todo List",
        id: 1,
        icon: todoIcon,
        path: "#",
      },
      {
        id: 2,
        title: "Calender",
        icon: calenderIcon,
        path: "#",
      },
      {
        id: 3,
        title: "Reminders",
        icon: reminderIcon,
        path: "#",
      },
      {
        id: 4,
        title: "Planning",
        icon: planIcon,
        path: "#",
      },
    ],
    hasSide: true,
    path: "#",
  },
  {
    id: 2,
    title: "Company",
    subNav: [
      {
        id: 1,
        title: "History",
        path: "#",
      },
      {
        id: 2,
        title: "Our Team",
        path: "#",
      },
      {
        id: 3,
        title: "Blog",
        path: "#",
      },
    ],
    hasSide: true,
    path: "#",
  },
  {
    id: 3,
    title: "Careers",
    hasSide: false,
    path: "#",
  },
  {
    id: 4,
    title: "About",
    hasSide: false,
    path: "#",
  },
];

export const BUSINESS_ICONS = [
  {
    id: 1,
    icon: bizIcon,
  },
  {
    id: 2,
    icon: audioIcon,
  },
  {
    id: 3,
    icon: meetIcon,
  },
  {
    id: 4,
    icon: markerIcon,
  },
];
