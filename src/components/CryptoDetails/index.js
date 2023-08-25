import './index.css'

const CryptoDetails = props => {
  const {details} = props
  return <li>{details.name}</li>
}

export default CryptoDetails
