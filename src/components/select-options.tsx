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
      className="bg-transparent text-white p-2 rounded-lg text-lg border-2 border-white px-4 py-2"
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
