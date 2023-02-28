// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoItem
  return (
    <li className="coin-data-container">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo-img" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="data-container">
        <div className="value">
          <p className="name">{usdValue}</p>
        </div>
        <div className="value">
          <p className="name">{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
