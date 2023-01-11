// Write your code here

import {Component} from 'react'

import ReviewItem from '../ReviewItem'
import './index.css'

const reviewsList = [
  {
    id: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    id: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    id: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    id: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

export default class ReviewsCarousel extends Component {
  state = {userId: reviewsList[0].id}

  toChangeNxtReviewClickLeftArrow = () => {
    const {userId} = this.state

    let nxtId = null
    if (userId !== 0) {
      nxtId = 1
    }

    this.setState(preState => ({
      userId: preState.userId - nxtId,
    }))
  }

  toChangeNxtReviewClickRightArrow = () => {
    const {userId} = this.state
    const lengthList = reviewsList.length
    console.log(lengthList)
    let nxtId = null
    if (userId !== lengthList - 1) {
      nxtId = 1
    } else {
      nxtId = 0
    }

    this.setState(preState => ({
      userId: preState.userId + nxtId,
    }))
  }

  toFilterList = () => {
    const {userId} = this.state
    const filterReviewsList = reviewsList.filter(
      eachItem => eachItem.id === userId,
    )
    return filterReviewsList
  }

  render() {
    const {userId} = this.state
    const filterList = this.toFilterList()
    return (
      <div className="app">
        <h1>Reviews</h1>
        <div className="review-card">
          <ul className="review-card">
            {filterList.map(eachItem => (
              <ReviewItem
                reviewDetails={eachItem}
                key={eachItem.id}
                toChangeNxtReviewClickLeftArrow={
                  this.toChangeNxtReviewClickLeftArrow
                }
                toChangeNxtReviewClickRightArrow={
                  this.toChangeNxtReviewClickRightArrow
                }
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
