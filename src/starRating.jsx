
export const StarRating = ({rating,size,spacing,color,numberOfRatings})=>{
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
  
    const emptyStars = 5 - filledStars - halfStar;
  
  
    const stars = [];
  
  
    for (let i = 0; i < filledStars; i++) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    }
  
    if (halfStar === 1) {
      stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={filledStars + i + 1} className="far fa-star"></i>);
    }
  
    return (
  <>
  <div style={{fontSize:`${size}`,display:'flex',columnGap:`${spacing}`,color:`${color}`}}>
      {stars}
      <p>{`(${numberOfRatings})`}</p>
  
  </div>
  </>
    )
}

