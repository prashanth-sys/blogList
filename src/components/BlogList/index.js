// Write your JS code here
import './index.css'

const BlockList = props => {
  const {blogsList} = props
  const {title, description} = blogsList
  return (
    <div className="list-container">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
export default BlockList
