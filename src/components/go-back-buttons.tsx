import Link from "next/link";

function GoBackButton({ text }: { text: string }) {
  return (
    <Link className="go-back-button" href="/">
      {text}
    </Link>
  );
}

export default GoBackButton;
