import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Profil from "./Profil.js";

function App() {
  let myName = "Meryem";

  return (
    <>
    {/* card bootstrap */}

      <Card style={{ width: "18rem" }}>
        {/* product image */}
        <Image></Image>
        <Card.Body>
          {/* product name */}
          <Name></Name>
          <Card.Text>
            {/* product description */}
            <Description></Description>
          </Card.Text>
          <Button variant="danger">
            {/* product price */}
            <Price />
          </Button>
        </Card.Body>
      </Card>
      {/* conditional rendering */}
      <div style={{ display: "flex" }}>
        <p>Hello {myName === "Meryem" ? myName : "there"}</p>
        <div>{myName === "Meryem" ? <Profil></Profil> : null}</div>
      </div>
    </>
  );
}

export default App;
