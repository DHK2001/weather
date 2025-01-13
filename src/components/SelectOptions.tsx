
function SelectOptions({items, selectedCity, handleCityChange}: {items:{name:string, country:string}[], selectedCity:string, handleCityChange: (event: React.ChangeEvent<HTMLSelectElement>) => Promise<void>}) {

  return (
    <select
        value={selectedCity}
        onChange={handleCityChange}
        className="bg-white text-black p-2 rounded-lg "
    >
        {items.map((item, index) => (
            <option
                key={index}
                value={item.name + ", " + item.country}
                className="bg-gray-200 text-black"
            >
                {item.name}, {item.country}
            </option>
        ))}
    </select>
  );
}

export default SelectOptions;