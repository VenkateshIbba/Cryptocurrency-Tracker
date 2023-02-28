import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.cryptoData()
  }

  cryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    // console.log(data)

    const updatedCrypto = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptoList: updatedCrypto, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      <div className="crypo-currency-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-currency-img"
        />
        <ul className="coin-container">
          <nav className="header">
            <h1 className="header-name">Coin Type</h1>
            <div className="type-container">
              <p className="header-name">USD</p>
              <p className="header-name">EURO</p>
            </div>
          </nav>

          {cryptoList.map(eachObj => (
            <CryptocurrencyItem cryptoItem={eachObj} key={eachObj.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
