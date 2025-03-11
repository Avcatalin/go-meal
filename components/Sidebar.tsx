import Logo from "./Logo";
import Navigation from "./Navigation";
import CtaSmall from "./CtaSmall";

const Sidebar = () => {
  return (
    <div className="sidebar p-12 bg-white">
      <Logo />
      <Navigation />
      <CtaSmall />
    </div>
  );
};

export default Sidebar;
