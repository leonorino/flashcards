export default function Heading(props) {
  return <div className="sticky bg-emerald-400 top-0 left-0 right-0">
    <h1 className="p-2 text-xl text-emerald-800">{props.content}</h1>
  </div>
}