import React from "react";
import Card from "../card/card.component";

function List() {
  return (
    <div className="py-4">
      <Card
        name={"Mala Opera Spot"}
        url={
          "https://assets.turbologo.ru/blog/ru/2020/02/18162724/a5a4b6991268b801e30d82bbc757c672-958x575.jpg"
        }
        description={
          "В кофейне Mala Opera Spot зал выполнен в стиле лофт, спокойных и ненавязчивых тонах. Мебель предельно простая и удобная, главным образом изготовлена из качественной древесины. "
        }
        type={"Кофейня"}
      />
      <Card
        name={"Булочник"}
        url={
          "https://media-cdn.tripadvisor.com/media/photo-s/08/2e/99/ca/5.jpg"
        }
        description={
          "Небольшое кафе-кондитерская в котором можно вкусно и очень приятно позавтракать, пообедать и поужинать, а ещё купить кондитерские изделия и не только. Вкусно почти всё."
        }
        type={"Булочна"}
      />
      <Card
        name={"Булочная №21"}
        url={"https://www.sobaka.ru/images/image/01/09/21/41/_normal.jpg"}
        description={
          "Сетевая булочная на углу Вознесенского проспекта и набережной канала Грибоедова. Это заведение популярной сети Филиппа Вольчека, известной в городе своими демократичными ценами. В ассортименте булочной классический набор: хлеб собственного производства, слойки, выпечка — как сладкая, так и сытная."
        }
        type={"Булочна"}
      />
      <Card
        name={"ZO'R"}
        url={
          "https://lh3.googleusercontent.com/taSeyetGdbO3lSTw6vscsQrPk8RSCGKF7JXNI6YF7Zgzu0RirGnqclssE9g26KQduURkSNh2Gh1B7W1a=w1080-h608-p-no-v0"
        }
        description={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, dignissimos dolor doloremque ducimus illo impedit nesciunt. Accusantium commodi, corporis debitis ex excepturi harum, incidunt ipsum nemo nobis soluta sunt tempore unde vel vitae voluptatum! Cum illum iusto rem sapiente ullam?"
        }
        type={"Міні-магазин"}
      />
    </div>
  );
}

export default List;
