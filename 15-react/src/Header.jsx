/*
props => Properties. Aka, what attributes are on this component.
*/
export default function Header(props) {

  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.para || "I am here!"}</p>
    </header>
  )
}

