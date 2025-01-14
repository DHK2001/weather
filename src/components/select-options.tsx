interface Props {
  items: { name: string; country: string }[];
  selectedCity: string;
  handleCityChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => Promise<void>;
}

function SelectOptions({ items, selectedCity, handleCityChange }: Props) {
  return (
    <select
      value={selectedCity}
      onChange={handleCityChange}
      className="bg-transparent text-lg px-4 py-2 rounded-lg border-2 text-white border-white hover:border-blue-800  hover:text-blue-800 mb-5"
    >
      {items.map((item, index) => (
        <option
          key={index}
          value={item.name + ", " + item.country}
        >
          {item.name}, {item.country}
        </option>
      ))}
    </select>
  );
}

export default SelectOptions;
