import './index.css'

const DestinationItem = props => {
  const {destinationitem} = props
  const {id, name, imgUrl} = destinationitem
  return (
    <li id={id} className="item-con">
      <img src={imgUrl} alt={name} className="image" />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
