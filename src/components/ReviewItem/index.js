import './index.css'

const ReviewItem = props => {
  const {
    reviewDetails,
    toChangeNxtReviewClickLeftArrow,
    toChangeNxtReviewClickRightArrow,
  } = props
  const {imgUrl, username, companyName, description, id} = reviewDetails

  const onClickLeftArrow = () => {
    toChangeNxtReviewClickLeftArrow(id)
  }
  const onClickRightArrow = () => {
    toChangeNxtReviewClickRightArrow(id)
  }

  return (
    <li className="lists">
      <div className="review-container">
        <button
          data-testid="leftArrow"
          type="button"
          onClick={onClickLeftArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>

        <div className="descripation">
          <img src={imgUrl} alt={username} />
          <p>{username}</p>
          <p>{companyName}</p>

          <p>{description}</p>
        </div>

        <button
          data-testid="rightArrow"
          type="button"
          onClick={onClickRightArrow}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default ReviewItem
