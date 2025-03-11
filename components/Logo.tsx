import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo mb-15">
      <Link href="/">
        GoMeal<span className="dot">.</span>
      </Link>
    </div>
  );
};

export default Logo;
