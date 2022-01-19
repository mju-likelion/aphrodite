import { NavBar } from "@components/NavBar";
import styled from "styled-components";
import { Button } from "@lib/DesignSystem/Button";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Main from "@components/Main";

const Div = styled.div`
  color: white;
`;

function Home({ theme }) {
  return (
    <Div>
      index
      <NavBar />
      <Button ghost color="#FFFFFF" size="small" />
      <Button ghost color="#FFFFFF" size="medium" />
      <Button ghost color="#FFFFFF" size="large" />
      <div>
        <Button color="#FFFFFF" size="small" />
        <Button color="#FFFFFF" size="medium" />
        <Button color="#FFFFFF" size="large" />
      </div>
      <Header />
      <Main />
      <Footer />
    </Div>
  );
}

export default Home;
