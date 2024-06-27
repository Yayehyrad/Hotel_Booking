import { BsStarFill } from "react-icons/bs";

type Props = {
  selectedStars: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StarRatingFilter = ({ selectedStars, onChange }: Props) => {
  return (
    <div className="border-b border-slate-300 pb-5">
      <h4 className="text-md font-semibold mb-2">Property Rating</h4>
      {["5", "4", "3", "2", "1"].map((star) => (
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="rounded"
            value={star}
            checked={selectedStars.includes(star)}
            onChange={onChange}
          />
          <span className="flex">
            {Array(parseInt(star))
              .fill(null)
              .map((_, index) => (
                <BsStarFill key={index} size={20} className="text-yellow-500" />
              ))}
          </span>
        </label>
      ))}
    </div>
  );
};

export default StarRatingFilter;
