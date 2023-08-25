import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {FaTelegramPlane} from 'react-icons/fa'
import {RxSwitch} from 'react-icons/rx'
import {BsCurrencyRupee} from 'react-icons/bs'
import CryptoDetails from '../CryptoDetails'

class Home extends Component {
  state = {
    isClick: false,
    cryptoData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.renderCrypto()
  }

  renderCrypto = async () => {
    const url = 'http://localhost:3002/tickers'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.slice(0, 10))
    console.log(response)
    if (response.ok === true) {
      this.setState({cryptoData: data, isLoading: false})
    }
  }

  renderSuccess = () => {
    const {cryptoData} = this.state
    return (
      <ul>
        {cryptoData.map(eachItem => (
          <CryptoDetails details={eachItem} />
        ))}
      </ul>
    )
  }

  changeBg = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  render() {
    const {isClick, isLoading} = this.state
    const bg = isClick ? 'bg1' : 'bg'
    const head1 = isClick ? 'ff' : 'head1'

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          <div className={bg}>
            <div className="top">
              <img
                src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png"
                alt="logo"
                className="image"
              />
              <div>
                <select name="inr" className="drop">
                  <option value="INR">INR</option>
                </select>
                <select name="curr" className="drop">
                  <option value="btc" className="drop1">
                    BTC
                  </option>
                  <option value="XRP" className="drop1">
                    XRP
                  </option>
                  <option value="eth" className="drop1">
                    ETH
                  </option>
                  <option value="trx" className="drop1">
                    TRX
                  </option>
                </select>
                <button type="button" className="but">
                  BUY
                </button>
              </div>
              <div className="but-cont">
                <button type="button" className="but1">
                  <FaTelegramPlane /> Connect Telegram
                </button>
                <button
                  type="button"
                  className="switch"
                  onClick={this.changeBg}
                >
                  <RxSwitch size={30} />
                </button>
              </div>
            </div>
            <div className="top1">
              <div className="time">
                <h1 className="head">
                  0.77% <br />
                  <span className="p">5 Min</span>
                </h1>
              </div>
              <div className="time">
                <h1 className="head">
                  0.62% <br />
                  <span className="p">1 Hour</span>
                </h1>
              </div>
              <div className="time">
                <p className="p1">Best Price to Trade</p>
                <h1 className={head1}>
                  <BsCurrencyRupee />
                  24,29,914 <br />
                </h1>
                <p className="p1">
                  Average BTC/INR net price including commission
                </p>
              </div>
              <div className="time">
                <h1 className="head">
                  7.49% <br />
                  <span className="p">1 Day</span>
                </h1>
              </div>
              <div className="time">
                <h1 className="head">
                  12.24% <br />
                  <span className="p">7 Days</span>
                </h1>
              </div>
            </div>
            <div>
              <div className="crypt">
                <p>#</p>
                <p>Platform</p>
                <p>Last Traded Price</p>
                <p>Buy/Sell Price</p>
                <p>Difference</p>
                <p>Saving</p>
              </div>
              <div className="bg-yes">
                <div className="value">
                  <div>
                    <h1 className="one">1</h1>
                  </div>
                  <div className="wazirx">
                    <img
                      src="https://play-lh.googleusercontent.com/JoikhtJAr-CEcX6ptDKRSTYB8RY5dW3q_pPbqtpk7MNMNyTZ0nZLvTDe4rx8tRb-JA"
                      alt="waz"
                      className="waz"
                    />
                    <h1 className="one">WazirX</h1>
                  </div>
                  <div>
                    <h1 className="one">23,55,555</h1>
                  </div>
                  <div>
                    <h1 className="one">₹ 23,47,500 / ₹ 23,55,555</h1>
                  </div>
                  <div>
                    <h1 className="one1"> -2.91 %</h1>
                  </div>
                  <div>
                    <h1 className="one2"> ▼ ₹ 70,588</h1>
                  </div>
                </div>
              </div>

              <div className="bg-yes">
                <div className="value">
                  <div>
                    <h1 className="one">2</h1>
                  </div>
                  <div className="wazirx">
                    <img
                      src="https://hodlinfo.com/static/media/bitbns.dcee6cf4.png"
                      alt="waz"
                      className="waz"
                    />
                    <h1 className="one">Bitbns</h1>
                  </div>
                  <div>
                    <h1 className="one">23,58,991</h1>
                  </div>
                  <div>
                    <h1 className="one">₹ 28,23,874 / ₹ 28,69,239</h1>
                  </div>
                  <div>
                    <h1 className="one2"> 16.41 %</h1>
                  </div>
                  <div>
                    <h1 className="one2"> ▼ ₹ 3,98,187</h1>
                  </div>
                </div>
              </div>

              <div className="bg-yes">
                <div className="value">
                  <div>
                    <h1 className="one">3</h1>
                  </div>
                  <div className="wazirx">
                    <img
                      src="https://is3-ssl.mzstatic.com/image/thumb/Purple124/v4/9b/a2/38/9ba23885-f085-5624-85bb-0ac837e3bc20/source/512x512bb.jpg"
                      alt="waz"
                      className="waz"
                    />
                    <h1 className="one">Colodax</h1>
                  </div>
                  <div>
                    <h1 className="one">22,33,842</h1>
                  </div>
                  <div>
                    <h1 className="one">₹ 22,22,671 / ₹ 27,25,287</h1>
                  </div>
                  <div>
                    <h1 className="one1"> -7.93 %</h1>
                  </div>
                  <div>
                    <h1 className="one1"> ▼ ₹ 1,92,301</h1>
                  </div>
                </div>
              </div>

              <div className="bg-yes">
                <div className="value">
                  <div>
                    <h1 className="one">4</h1>
                  </div>
                  <div className="wazirx">
                    <img
                      src="https://hodlinfo.com/static/media/zebpay.232215c8.png"
                      alt="waz"
                      className="waz"
                    />
                    <h1 className="one">Zebpay</h1>
                  </div>
                  <div>
                    <h1 className="one">23,58,991</h1>
                  </div>
                  <div>
                    <h1 className="one">₹ 23,58,991 / ₹ 23,22,001</h1>
                  </div>
                  <div>
                    <h1 className="one1"> -2.77 %</h1>
                  </div>
                  <div>
                    <h1 className="one1"> ▼ ₹ 67,152</h1>
                  </div>
                </div>
              </div>

              <div className="bg-yes">
                <div className="value">
                  <div>
                    <h1 className="one">5</h1>
                  </div>
                  <div className="wazirx">
                    <img
                      src="https://hodlinfo.com/static/media/zebpay.232215c8.png"
                      alt="waz"
                      className="waz"
                    />
                    <h1 className="one">CoinDCX</h1>
                  </div>
                  <div>
                    <h1 className="one">23,58,000</h1>
                  </div>
                  <div>
                    <h1 className="one">₹ 23,58,000 / ₹ 23,83,700</h1>
                  </div>
                  <div>
                    <h1 className="one1"> -2.91 %</h1>
                  </div>
                  <div>
                    <h1 className="one1"> ▼ ₹ 68,143</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Home
