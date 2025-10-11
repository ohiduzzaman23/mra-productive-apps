import React from "react";
import { Link } from "react-router-dom";

const AppCard = ({ product }) => {
  const { id, title, image, downloads, ratings } = product;

  const formatDownloads = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(1) + "K";
    return num;
  };

  const averageRating = () => {
    const totalCount = ratings.reduce((acc, r) => acc + r.count, 0);
    const totalScore = ratings.reduce((acc, r) => {
      const stars = parseInt(r.name);
      return acc + stars * r.count;
    }, 0);
    return (totalScore / totalCount).toFixed(1);
  };

  return (
    <Link to={`/product/${id}`}>
      <div className="card bg-base-100 shadow-sm mt-5 hover:shadow-lg transition cursor-pointer">
        <figure className="px-4 pt-4">
          <img
            src={image}
            alt={title}
            className="rounded-xl w-full h-48 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between gap-30">
            <button className="btn btn-sm bg-blue-100 text-blue-600 border-none hover:bg-blue-200">
              {formatDownloads(downloads)}
            </button>
            <button className="btn btn-sm bg-blue-100 text-blue-600 border-none hover:bg-blue-200">
              ⭐{averageRating()}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
