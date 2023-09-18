// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thambnailDetails, updateImages, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thambnailDetails
  const onClickImage = () => {
    updateImages(id)
  }

  const activeImageClassName = isActive ? 'active-image-button' : ''

  return (
    <li className="list-items">
      <button
        type="button"
        className={`button ${activeImageClassName}`}
        onClick={onClickImage}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
