import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  //app.js의 /movie/:id부분에서 id의 상세정보를 알려주는 함수 ->useParams()
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}
export default Detail;
