interface Props {
  units: string;
  buttonC: () => void;
  buttonF: () => void;
}

function UnitsButton({ units, buttonC, buttonF }: Props) {
  return (
    <div className="flex-row self-end text-center ml-5">
      <button
        className={
          units == "metric"
            ? "temperature-button-active mr-2"
            : "temperature-button mr-2"
        }
        onClick={buttonC}
      >
        <p>°C</p>
      </button>
      <button
        className={
          units == "imperial"
            ? "temperature-button-active"
            : "temperature-button"
        }
        onClick={buttonF}
      >
        <p>°F</p>
      </button>
    </div>
  );
}

export default UnitsButton;
