import "./works.scss"

export default function Works({ id, title, image }) {
  return (
    <div className="item" id={id} onClick={() => alert(`item ${title} clicked}`)} >
      <img src={image} alt="" />
      <h3>{title}</h3>
    </div>
  )
}
