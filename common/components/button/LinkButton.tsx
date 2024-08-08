// next
import Link from "next/link"

interface LinkButtonProps {
  href: string | { pathname: string, query?: { [key: string]: string } };
  text: string;
  Icon?: any;
  wrapperStyle: string;
  textStyle: string;
  iconColor?: string;
};
const LinkButton = (props: LinkButtonProps) => {
  const { href, text, Icon, wrapperStyle, textStyle } = props;

  return (
    <Link
      href={href}
      className={wrapperStyle}
    >
      <p className={textStyle}>{text}</p>
    </Link>
  );
};

export default LinkButton;