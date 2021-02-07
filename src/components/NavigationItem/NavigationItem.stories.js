import { HiHome } from "react-icons/hi";
import NavigationItem from "./NavigationItem";

const Stories = {
  title: "NavigationItem",
  component: NavigationItem,
};
export default Stories;

const Template = (args) => <NavigationItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: "/home",
  text: "Главная",
  icon: <HiHome size="24" />,
};

// Default.parameters = {
//   route: "/home",
// };
