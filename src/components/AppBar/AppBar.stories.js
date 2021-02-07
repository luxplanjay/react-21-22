import AppBar from "./AppBar";
import { navItems } from "../Navigation/Navigation.stories";

const Stories = {
  title: "AppBar",
  componemt: AppBar,
};
export default Stories;

const Template = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  logoImage: "https://www.flaticon.com/premium-icon/icons/svg/2202/2202112.svg",
  navItems,
  minimized: false,
};

export const Minimized = Template.bind({});
Minimized.args = {
  ...Default.args,
  minimized: true,
};
