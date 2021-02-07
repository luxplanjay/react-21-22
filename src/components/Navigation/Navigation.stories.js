import { HiHome, HiCalendar, HiBookOpen } from "react-icons/hi";
import Navigation from "./Navigation";

export const navItems = [
  {
    to: "/home",
    text: "Главная",
    icon: <HiHome size="24" />,
  },
  {
    to: "/schedule",
    text: "Расписание",
    icon: <HiCalendar size="24" />,
  },
  {
    to: "/book",
    text: "Конспект",
    icon: <HiBookOpen size="24" />,
  },
];

const Stories = {
  title: "Navigation",
  component: Navigation,
};
export default Stories;

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: navItems,
};
