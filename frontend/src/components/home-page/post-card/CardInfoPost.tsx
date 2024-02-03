import React from 'react';
import testPost from '../../../assets/home/cards/test-post.png';
import like from '../../../assets/home/cards/like-2.svg';
import comment from '../../../assets/home/cards/comment.svg';
import share from '../../../assets/home/cards/share.svg';
import bookmark from '../../../assets/bookmark.svg';
export default function CardInfoPost() {
  return (
    <>
      <div className="card-post__text">
        <p>
          As the morning unfolds, the world awakens with a symphony of sights
          and sounds. The sun, a radiant orb in the sky, casts its warm embrace
          over the earth, illuminating everything it touches with a golden glow.
          Birds take flight from their nests, their melodious songs filling the
          air with joy and vitality. The gentle rustle of leaves in the breeze
          creates a soothing backdrop to the bustling activity of the day. Each
          moment is a testament to the beauty and resilience of nature, a
          reminder that life is a precious gift to be cherished and savored. In
          the midst of this natural splendor, one can't help but feel a sense of
          wonder and gratitude. There is a quiet power in the simple act of
          observing the world around us, of taking a moment to pause and
          appreciate the beauty that surrounds us. It is in these moments of
          stillness that we find clarity and peace, a respite from the chaos and
          noise of everyday life. Yet, even as we revel in the beauty of the
          present moment, we are mindful of the journey that lies ahead. Each
          day presents us with new challenges and opportunities, each decision
          shaping the course of our lives in ways both seen and unseen. It is up
          to us to embrace these challenges with courage and determination, to
          seize the opportunities that come our way with open hearts and open
          minds. So let us greet each day with a spirit of adventure and
          curiosity, knowing that each moment is a chance to learn, to grow, and
          to become the best version of ourselves. For in the end, it is not the
          destination that matters, but the journey itself – a journey filled
          with beauty, wonder, and infinite possibility.
        </p>
      </div>
      <div className="card-post__img">
        <img className="post__img" src={testPost} alt="" />
      </div>
      <div className="card-post__statistics">
        <ul className="post-analytics">
          <li className="post-analytics__item">
            <img src={like} alt="" />
            <p className="post-analytics__count">15</p>
          </li>
          <li className="post-analytics__item">
            <img src={comment} alt="" />
            <p className="post-analytics__count">15</p>
          </li>
          <li className="post-analytics__item">
            <img src={share} alt="" />
            <p className="post-analytics__count">15</p>
          </li>
          <li className="post-analytics__item">
            <img src={bookmark} alt="" />
          </li>
        </ul>
      </div>
    </>
  );
}
