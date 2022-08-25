import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isWatchActiveState } from "../../../../commons/store";

const Wrapper = styled.div`
  position: fixed;
  width: 160px;
  height: 400px;
  right: 5%;
  top: 25%;
  background: #ffffff;
  /* border: 1px solid #000000; */
  border: 5px solid steelblue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  font-family: "Jua";
  div.scroll {
    overflow: hidden;
    height: 350px;
    overflow-y: scroll;
  }
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 15px;
`;

const Image = styled.div`
  width: 85px;
  height: 85px;
  left: 1721px;
  top: 285px;
  background: #c4c4c4;
  margin-bottom: 20px;
  cursor: pointer;
`;

export default function LayoutSidebar() {
  const [isActive, setIsActive] = useRecoilState(isWatchActiveState);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const result = JSON.parse(sessionStorage.getItem("watchList") || "[]");
    setWatchList(result);
  }, [isActive]);

  console.log(watchList);
  return (
    <>
      <Wrapper>
        <Text>최근 본 상품</Text>

        <div className="scroll">
          {watchList.map((el) => (
            <Image key={el._id}>
              <img
                style={{ width: "85px", height: "85px" }}
                src={`https://storage.googleapis.com/${el.images?.[0]}`}
                alt="이미지"
              />
            </Image>
          ))}
        </div>
        {/*            
            <Image></Image> 
            <Image></Image> */}
      </Wrapper>
    </>
  );
}
