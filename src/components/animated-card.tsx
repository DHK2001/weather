import { Weather } from "@/services/forecast-interfaces";
import { getDate, getIconUrl } from "@/utils/helpers";
import { motion } from "framer-motion";
import Image from "next/image";

function AnimatedCard({ item }: { item: Weather }) {
  return item.weatherHours.length > 0 ? (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="weather-hour"
    >
      {item.weatherHours.map((item2, index) => (
        <li
          key={index}
          className={
            item.weatherHours.length - 1 === index
              ? "temperature-row-end"
              : "temperature-row"
          }
        >
          <div className="flex flex-row text-center items-center justify-center p-0 mt-2">
            <Image
              className="w-10 m-0 p-0"
              src={getIconUrl(item2.weather)}
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
      className="weather-hour"
    >
      <h3 className="text-center py-5 text-white">No items to display</h3>
    </motion.div>
  );
}

export default AnimatedCard;
