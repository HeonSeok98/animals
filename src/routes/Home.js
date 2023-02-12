import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";


function Home() {


  const [data, setData] = useState([])

  function getData() {
    fetch(`https://api.odcloud.kr/api/15077510/v1/uddi:1152f8e0-92f5-4641-9e1b-f0b9ca8f9116?page=1&perPage=50&serviceKey=VuuB4zle68wUFTYClPZWE%2Bib2qOYaRBJEW6eiYANDP%2BxAQwzJ8%2BfkkWBzS7sQe0IZO%2BRCxTuYU1VW6UBs8Dc8g%3D%3D`)
    .then((response) => response.json())
    .then((data) => setData(data.data))
  };

  // const getData = async () => {
  //   const json = await (
  //     await fetch(
  //       `https://api.odcloud.kr/api/15077510/v1/uddi:1152f8e0-92f5-4641-9e1b-f0b9ca8f9116?page=1&perPage=50&serviceKey=VuuB4zle68wUFTYClPZWE%2Bib2qOYaRBJEW6eiYANDP%2BxAQwzJ8%2BfkkWBzS7sQe0IZO%2BRCxTuYU1VW6UBs8Dc8g%3D%3D`
  //     )
  //   ).json();
  //   setData(json.data);
  // };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>
      <h1 className='head'>대전시 유기동물 리스트</h1>
      {data.map(function(dog){
        return(
          <div key={dog.번호}>
            <h2 className='main'>{dog.번호}, {dog.품종}, 구조일자: {dog.발생장소}</h2>
              <Link to={`/detail/${dog.번호}`}  className='link'>상세정보</Link>
          </div>
        )})}
    </div>
  );
}

export default Home;


// key값 안해주면 얘가 ㅈㄹ함
// 처음에 useState()안에 빈 배열을 넣어주는 이유는 api 호출전에 이게 한번 실행됨 그때 map() 때매 오류뜸
// async와 await는 기다리게 해주는 역할임
// 주석친 부분은 동일한 부분이다 다만 내가 보기편하게 바꾼거 ㅇㅇ
