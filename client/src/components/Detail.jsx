import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail, clearDetail } from "../redux/actions";
import "../css/Detail.css";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearDetail());
    dispatch(getDetail(id));
  }, [dispatch, id]);
  const videogameDetail = useSelector((state) => state.detail);

  return (
    <div>
      <div className="alldetail">
        <h1 className="title">{videogameDetail.name}</h1>
        <h3 className="alignPlatforms">
          Platforms:
          {id.includes("-")
            ? videogameDetail.platforms &&
              videogameDetail.platforms.map((p) => (
                <ul key={p.name}>{p.name}</ul>
              ))
            : videogameDetail.platforms &&
              videogameDetail.platforms.map((p) => <ul key={p}>{p}</ul>)}{" "}
        </h3>
        <h3 className="alignRating">Rating: {videogameDetail.rating}</h3>
        <h3 className="alignReleased">Released: {videogameDetail.released}</h3>
        <h3 className="alignGenre">
          Genres:
          {id.includes("-")
            ? videogameDetail.genres &&
              videogameDetail.genres.map((g) => <ul key={g.name}>{g.name}</ul>)
            : videogameDetail.genres &&
              videogameDetail.genres.map((g) => <ul key={g}>{g}</ul>)}{" "}
        </h3>
      </div>
      <img
        className="img"
        src={videogameDetail.background_image}
        alt="https://th.bing.com/th/id/R.9d27c7f3b4b65d63797f3422e4536313?rik=0Dq86MJWuO98lw&pid=ImgRaw&r=0"
        width="200px"
        height="230px"
      />
      <br />
      <div className="alldetail">
        <h3 className="description">
          Description:{videogameDetail.description}
        </h3>
      </div>
      <br />
      <button>
        <Link to="/home" className="homeButtonD">
          BACK HOME
        </Link>
      </button>
      <br />
      <br />
      <br />
    </div>
  );
}
