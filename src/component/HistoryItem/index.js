import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  onClickDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="listcontainer">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="ge" />
      <p className="tilr">{title}</p>
      <p className="domain">{domainUrl}</p>
      <button
        type="button"
        data-testid="delete"
        onClick={onClickDelete}
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="imh"
        />
      </button>
    </li>
  )
}
export default HistoryItem
