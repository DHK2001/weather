interface Props {
  children: React.ReactNode;
  className?: string;
}

function CardWeather({ children, className = "" }: Props) {
  return <div className={`card-forecast ${className}`}>{children}</div>;
}

export default CardWeather;
