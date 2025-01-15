import Link from "next/link";

function GoBackButton({ text }: { text: string }) {
  return (
    <div className="go-back-button">
      <Link href="/">{text}</Link>
    </div>
  );
}

export default GoBackButton;
