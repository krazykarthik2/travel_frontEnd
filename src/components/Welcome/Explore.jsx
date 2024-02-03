import React from "react";
import Card from "../Card/Card";
import { Stack } from "react-bootstrap";
function Explore() {
  const cards = [
    {
      title: "Card 1",
      bullets: [
        "Bullet 1 mnhuighnfkih praba nnsoibfbggl kggf fg n",
        "Bullet 2",
        "Bullet 3",
      ],
    },
    {
      title: "Card 2",
      bullets: ["Bullet 1", "Bullet 2", "Bullet 3"],
    },
  ];
  return (
    <div className="d-flex w-100 vh-100 flex-column align-items-center justify-content-center">
    <div className="d-flex flex-column justify-content-center align-items-center">

    <Stack
      gap={2}
      className=""
      style={{ maxWidth: "600px", minWidth: "300px" }}
    >
      {cards.map((card,index) => (
        <Card title={card.title} bullets={card.bullets}  key={index}/>
      ))}
    </Stack>
    </div>
    </div>
  );
}

export default Explore;
