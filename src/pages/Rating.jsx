import { Star } from "lucide-react";
import { useState } from "react";

const Rating = () => {
  const [rate, setRate] = useState(0);
  const [hoverRate, setHoverRate] = useState(0);

  const handleRate = (index) => {
    if (typeof index !== "number") {
      throw new Error(
        "Expected 'index' to be a number, but got " + typeof index
      );
    }

    if (index < 0 || index > 5) {
      throw new Error(
        "Expected 'index' to be between 0 and 5, but got " + index
      );
    }

    if (index === rate) {
      setRate(0);
      return;
    }

    setRate(index);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight" && rate < 5) {
      handleRate(rate + 1);
      e.preventDefault();
    } else if (e.key === "ArrowLeft" && rate > 0) {
      handleRate(rate - 1);
      e.preventDefault();
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Rating</h2>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e)}
          className="flex justify-center items-center gap-4 p-4 rounded-lg bg-gray-800 shadow-md"
        >
          <span className="text-2xl font-semibold text-white px-6 py-2 border-r-2 border-gray-200">
            {rate}
          </span>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              color={index < (hoverRate || rate) ? "gold" : "lightgray"}
              size={28}
              className="cursor-pointer transform transition-transform duration-200 hover:scale-125"
              style={{
                fill: index < (hoverRate || rate) ? "gold" : "lightgray",
              }}
              onClick={() => handleRate(index + 1)}
              onMouseEnter={() => setHoverRate(index + 1)}
              onMouseLeave={() => setHoverRate(0)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
