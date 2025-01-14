import { Weather } from "@/services/weather-interfaces";
import { getDate, getIcons } from "@/utils/helpers";
import { motion } from "framer-motion";
import Image from "next/image";

function AnimatedCard({ item }: { item: Weather }) {
  return item.weatherHours.length > 0 ? (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="weatherHour"
    >
      {item.weatherHours.map((item2, index) => (
        <li
          key={index}
          className={
            item.weatherHours.length - 1 === index
              ? "temperatureRowEnd"
              : "temperatureRow"
          }
        >
          <div className="flex flex-row text-center items-center justify-center p-0 mt-2">
            <Image
              className="w-10 m-0 p-0"
              src={getIcons(item2.weather, item2.date)}
              alt="weather"
              width={100}
              height={100}
            />
            <p>{getDate(item2.date).time}</p>
          </div>
          <p>{item2.temp_min + "° " + item2.temp_max + "°"}</p>
        </li>
      ))}
    </motion.ul>
  ) : (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="weatherHour"
    >
      <h3 className="text-center py-5">No items to display</h3>
    </motion.div>
  );
}

export default AnimatedCard;
