"use client";

export default function Home() {
  // const colors = ["red", "blue", "green", "yellow", "purple"];
  // const drinks = ["Coffee", "Tea", "Water"];
  const fruit = ['apple', 'banana'];
  return (
    <div>
      {/* <Welcome name="John"/> */}
      {/* <ColorList color={colors} /> */}
      {/* <Double number={5} /> */}
      {/* <DrinkList drinks={drinks} /> */}
      {/* <User name="Alice" location="Wonderland" /> */}
      <FruitManager fruit={fruit} />

    </div>
  );
}



// const Welcome = ({name}) => {
//   const onClickHandler = () => {
//     console.log(`Welcome ${name}!`);
//   }
//   return <button className="pl-50 pt-50 "onClick={onClickHandler}>click me!</button>;
// }





// const ColorList = (props) => {
//   return <ul>
//     {props.color.map((color, index) => (
//       <li key={index}>{color}</li>
//     ))}
     
//   </ul>
// }




// const Double = ({number}) => <span>{number * 2}</span>;



// const DrinkList = (props) => <ul> {props.drinks.map((drink, index) => (<li key={index}>{drink}</li>))}</ul>



// const User = ({ name, location }) => (
//   <div>
//     {name} lives in {location}
//   </div>
// );

const fruit = ['apple', 'banana'];

const FruitManager = ({ fruit }) => <div>{[...fruit, 'cherry'].join(', ')}</div>;





