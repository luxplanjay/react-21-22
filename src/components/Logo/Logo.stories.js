import Logo from "./Logo";

const Stories = {
  title: "Logo",
  component: Logo,
};
export default Stories;

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: "https://www.flaticon.com/premium-icon/icons/svg/2202/2202112.svg",
};
