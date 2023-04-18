import App from "next/app";
import Anchor from "./Anchor";

export default function Layout({ children, navData }) {
  return (
    <>
      <nav>
        {navData.map((data) => (
          <Anchor href={"/dogs/" + data.slug}>{data.title}</Anchor>
        ))}
      </nav>
      {/* Content */}
      {children}
      <footer>Footer</footer>
    </>
  );
}
