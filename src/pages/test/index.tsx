import { Button } from "@lib/DesignSystem/Button";
import styled from "styled-components";

function Home() {
  return (
    <Div>
      <Button
        ghost
        color="blue"
        textColor="blue"
        size="medium"
        onClick={() => {}}
      >
        text
      </Button>
      <Button color="white" textColor="blue" size="medium" onClick={() => {}}>
        text
      </Button>
      <Button
        color="green"
        textColor="white"
        fullWidth={true}
        onClick={() => {}}
      >
        fullWidth
      </Button>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  font-size: 20px;
  color: blue;
`;

export default Home;
