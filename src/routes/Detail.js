import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const x = useParams();
  const getDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${x.id}`
    );
    const json = await response.json();
    console.log("target", json);
  };
  useEffect(() => {
    getDetail();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
