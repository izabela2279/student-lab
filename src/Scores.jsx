import Score from "./Score";

const Scores = (props) => {
  return (
    <>
      {props.scores.map(score => 
        <Score key={score.score} score={score} />      
      )}
    </>
  )
}

export default Scores;