import data from "../utils/data.js";
import styled from "styled-components";
import SingleArticle from "./SingleArticle";

export default function UiArticles() {
  return (
    <Wrapper className="section-center">
      {data.map((article) => {
        return <SingleArticle key={article.id} {...article} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  column-gap: 0.7rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, 200px);
  justify-content: center;
  margin-top: 2rem;
`;
