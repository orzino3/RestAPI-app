function Alternate(props) {
  const nicknameList = (props.nickname || []).map((figure, index) => (
    <li key={index}>{figure}</li>
  ));

  return (
    <div className="nickname-container">
      {nicknameList.length > 0 ? (
        <ul>{nicknameList}</ul>
      ) : (
        <span>There is no alternate names for this character</span>
      )}
    </div>
  );
}

export default Alternate;
