import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";


function Detail() {

  const { id } = useParams();
  const [data, setData] = useState([]);

  // function getDog() {
  //   fetch(`https://api.odcloud.kr/api/15077510/v1/uddi:1152f8e0-92f5-4641-9e1b-f0b9ca8f9116?page=${id}&perPage=1&serviceKey=VuuB4zle68wUFTYClPZWE%2Bib2qOYaRBJEW6eiYANDP%2BxAQwzJ8%2BfkkWBzS7sQe0IZO%2BRCxTuYU1VW6UBs8Dc8g%3D%3D`)
  //   .then((response) => response.json())
  //   .then((data) => setData(data.data));
  // };

  const getDog = async () => {
    const json = await (
      await fetch(`https://api.odcloud.kr/api/15077510/v1/uddi:1152f8e0-92f5-4641-9e1b-f0b9ca8f9116?page=${id}&perPage=1&serviceKey=VuuB4zle68wUFTYClPZWE%2Bib2qOYaRBJEW6eiYANDP%2BxAQwzJ8%2BfkkWBzS7sQe0IZO%2BRCxTuYU1VW6UBs8Dc8g%3D%3D`)
    ).json();
    console.log(json.data);
    setData(json.data);
  };

  useEffect(() => {
    getDog();
  }, []);

  return <h1>
    {data.map(function(dog){
        return(
          <div key={dog.번호}>
            <div className="head">상세정보</div>
            <ul>
              <li className="dog">{dog.번호}번</li>
              <li className="dog">종류 : {dog.종류}</li>
              <li className="dog">품종 : {dog.품종}</li>
              <li className="dog">시군구 : {dog.시군구}</li>
              <li className="dog">구조일자 : {dog.구조일자}</li>
              <li className="dog">발생장소 : {dog.발생장소}</li>
            </ul>
          </div>
        )})}
  </h1>;
}



export default Detail;
