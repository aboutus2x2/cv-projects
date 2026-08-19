function Listitem(props) {

  return (
    <div key={props.id} className="container d-flex mt-4">
      <img src={props.headIcon} height="60" width="60" />
      <div className="ms-3">
        <h5 className="text-primary fw-bold">{props.title}</h5>
        <div className="text-secondary">xxxx回复了问题&bull;2人关注&bull;1个回复&bull;187次浏览&bull;2023-01-03 15:07</div>
      </div>
    </div>
  )
}