import { Component } from 'react'
import { Row, Col } from 'antd'
import { Select, Button, Menu, Icon, Divider, Popconfirm, Affix, message } from 'antd'
import PieChart from 'react-minimal-pie-chart'
import '../assets/css/style.css'

const Option = Select.Option;
const ButtonGroup = Button.Group;

const datacollection = {
    BINANCE: [
            'BTC/USDT', 'ETH/USDT', 'LTC/USDT', 'XRP/USDT', 'ETH/BTC', 'LTC/BTC', 'XRP/BTC', 'BTG/USDT', 'ETC/USDT', 'BCC/USDT', 'BTG/BTC', 'ETC/BTC', 'XEM/BTC', 'BCC/BTC', 'DASH/BTC'    
        ],
    BTCTURK: [
            'BTC/TRY', 'BTC/USDT', 'ETH/TRY', 'LTC/TRY', 'XRP/TRY', 'USDT/TRY'
        ],
    KOINEKS: [
            'BTC/TRY', 'BTC/USDT', 'ETH/TRY', 'LTC/TRY', 'XRP/TRY', 'USDT/TRY', 'DASH/TRY', 'XLM/TRY', 'BTG/TRY', 'ETC/TRY', 'XEM/TRY', 'DOGE/TRY', 'BCH/TRY'    
        ]
}

export default class extends Component {
    state = {
        affixtop : 10,
        menukey: 'exchange',
        selectdisble: true,
        // Initial Box
        exchangeboxes: ['BINANCE'],
        parities: ['BTC/USDT']
    }
    boxadd = () => {
        message.success('A new box created.');
        var T = this.state.exchangeboxes;
        var P = this.state.parities;
        var isNew = false;
        for (let key of Object.keys(datacollection)) {
            if (!this.state.exchangeboxes.includes(key)) {
                T.push(key);                
                P.push(datacollection[key][0]);
                isNew = true;
                break;
            }
        }
        if (!isNew) {
            T.push('BINANCE');                
            P.push(datacollection['BINANCE'][0]);
        }
        this.setState({
            exchangeboxes: T,
            parities: P
        })
    }
    boxremove = (boxkey) => {        
        let T = this.state.exchangeboxes;
        if (T.length == 1) {
            message.warning('Sorry. The last box cannot be removed.');
            return;
        }
        T.splice(boxkey, 1);
        let P = this.state.parities;
        P.splice(boxkey, 1);
        this.setState({
            exchangeboxes: T
        })
        message.success('The selected box removed.');
    }
    exchangeChange = (boxkey, value) => {
        let T = this.state.exchangeboxes;
        T[boxkey] = value;
        let P = this.state.parities;
        P[boxkey] = datacollection[value][0];
        this.setState({
            exchangeboxes: T,
            parities: P,
            selectdisble: true
        });
        switch (value) {
            case 'BINANCE':
                fetch('/binance-depth/' + value.replace('/', ''))
                    .then(res => res.json())
                    .then(data => this.setState({
                        [value + datacollection[value][0].replace('/', '_')]: data
                    })
                );
                break;
            case 'BTCTURK':
                Promise.all([
                    fetch('https://www.btcturk.com/api/orderbook?pairSymbol=' + datacollection[value][0].replace('/', '')),
                    fetch('https://www.btcturk.com/api/trades?pairSymbol=' + datacollection[value][0].replace('/', '') + '&last=18')
                ])
                .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                .then(([data1, data2]) => this.setState({
                    [value + datacollection[value][0].replace('/', '_')]: data1, 
                    [value + datacollection[value][0].replace('/', '_') + 'history']: data2
                }));
                break;
            case 'KOINEKS':
                fetch('https://cors.io/?https://koineks.com/ticker')
                    .then(res => res.json())
                    .then(data => this.setState({
                        [value + datacollection[value][0].replace('/', '_')]: data
                    })
                );
                break;
        }
    }
    parityChange = (boxkey, value) => {
        let P = this.state.parities;
        P[boxkey] = value;
        this.setState({
            parities: P,
            selectdisble: true
        });
        switch (this.state.exchangeboxes[boxkey]) {
            case 'BINANCE':
                fetch('/binance-depth/' + value.replace('/', ''))
                    .then(res => res.json())
                    .then(data => this.setState({
                        [this.state.exchangeboxes[boxkey] + value.replace('/', '_')]: data
                    })
                );
                break;
            case 'BTCTURK':
                Promise.all([
                    fetch('https://www.btcturk.com/api/orderbook?pairSymbol=' + value.replace('/', '')),
                    fetch('https://www.btcturk.com/api/trades?pairSymbol=' + value.replace('/', '') + '&last=18')
                ])
                .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                .then(([data1, data2]) => this.setState({
                    [this.state.exchangeboxes[boxkey] + value.replace('/', '_')]: data1,
                    [this.state.exchangeboxes[boxkey] + value.replace('/', '_') + 'history']: data2
                }));
                break;
            case 'KOINEKS':
                fetch('https://cors.io/?https://koineks.com/ticker')
                    .then(res => res.json())
                    .then(data => this.setState({
                        [this.state.exchangeboxes[boxkey] + value.replace('/', '_')]: data
                    })
                );
                break;
        }
    }

    componentDidMount = () => {
        Promise.all([
            fetch('/binance-depth/' + datacollection['BINANCE'][0].replace('/', '')),
            fetch('https://www.btcturk.com/api/orderbook?pairSymbol=' + datacollection['BTCTURK'][0].replace('/', '')),
            fetch('https://www.btcturk.com/api/trades?pairSymbol=' + datacollection['BTCTURK'][0].replace('/', '') + '&last=18'),
            fetch('https://cors.io/?https://koineks.com/ticker') 
        ])
        .then(([res1, res2, res3, res4]) => Promise.all([res1.json(), res2.json(), res3.json(), res4.json()]))
        .then(([data1, data2, data3, data4]) => this.setState({
            ['BINANCE' + datacollection['BINANCE'][0].replace('/', '_')]: data1, 
            ['BTCTURK' + datacollection['BTCTURK'][0].replace('/', '_')]: data2,
            ['BTCTURK' + datacollection['BTCTURK'][0].replace('/', '_') + 'history']: data3,
            ['KOINEKS' + datacollection['KOINEKS'][0].replace('/', '_')]: data4
        }));
    }
    componentDidUpdate = () => {
        if (this.state.selectdisble)
            this.setState({
                selectdisble: false
            })
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////                PAGE RENDER                  ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    
    render() {        
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////                COMPONENTS DEFINITION                  ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  MENU BAR  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Menubar = () => (
            <Affix offsetTop={this.state.affixtop}>
                <Menu
                    selectedKeys={[this.state.menukey]}
                    mode="horizontal"
                    theme='dark'>
                    <Menu.Item key="exchange">
                        <a href="/index">
                            <Icon type="appstore" />Exchange{this.state.TEST}
                        </a>
                    </Menu.Item>                        
                    <Menu.Item key="currency">
                        <a href="/currency">
                            <Icon type="property-safety" />Currency
                        </a>
                    </Menu.Item>                        
                    <Menu.Item key="parity">
                        <a href="/parity">
                            <Icon type="stock" />Parity
                        </a>
                    </Menu.Item>
                </Menu>
            </Affix>
        )
//  HEAD COMPONENT  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Headbar = props => (
            <Row>
                <Col span={24} style={{padding:3}}>
                    <ButtonGroup>
                        <Button icon="plus" onClick={this.boxadd} disabled={this.state.selectdisble} />
                        <Popconfirm placement="topLeft" title='Are you sure to delete this box?' onConfirm={() => this.boxremove(props.boxkey)} okText="Yes" cancelText="No">
                            <Button icon="minus" disabled={this.state.selectdisble} />
                        </Popconfirm>
                    </ButtonGroup>
                    <Select value={this.state.parities[props.boxkey]} style={{ width:120,float:'right' }} onChange={(e) => this.parityChange(props.boxkey, e)} disabled={this.state.selectdisble}>
                        {datacollection[props.exchange].map(parity => <Option key={parity}>{parity}</Option>)}
                    </Select>
                    <Select value={this.state.exchangeboxes[props.boxkey]} style={{ width:120,float:'right',marginRight:3 }} onChange={(e) => this.exchangeChange(props.boxkey, e)} disabled={this.state.selectdisble}>
                        {
                            Object.keys(datacollection).map(exchange => (
                                <Option value={exchange} key={exchange}>{exchange}</Option>        
                            ))
                        }
                    </Select>
                </Col>
            </Row>
        )
//  CONTENT COMPONENT  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Contentbar = props => {
            const EP = props.exchange + this.state.parities[props.boxkey].replace('/', '_');
            if (this.state[EP]) {
                if (props.exchange == 'BINANCE') {
                    var Buydata = () =>
                        (Object.keys(this.state[EP].depth.bids).slice(0, 18).map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item).toFixed(2) }</td>
                                <td>{ parseFloat(this.state[EP].depth.bids[item]).toFixed(4) }</td>
                                <td>{ (parseFloat(item).toFixed(2) * parseFloat(this.state[EP].depth.bids[item]).toFixed(4)).toFixed(2) }</td>
                            </tr>
                        )))
                    var Selldata = () =>
                        (Object.keys(this.state[EP].depth.asks).slice(0, 18).map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item).toFixed(2) }</td>
                                <td>{ parseFloat(this.state[EP].depth.asks[item]).toFixed(4) }</td>
                                <td>{ (parseFloat(item).toFixed(2) * parseFloat(this.state[EP].depth.asks[item]).toFixed(4)).toFixed(2) }</td>
                            </tr>
                        )))
                    var Historydata = () =>
                        (this.state[EP].history.map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item.p).toFixed(2) }</td>
                                <td>{ parseFloat(item.q).toFixed(4) }</td>
                                <td>{ (new Date(item.T*1000)).getHours()+':'+(new Date(item.T*1000)).getMinutes()+':'+(new Date(item.T*1000)).getSeconds() }</td>
                            </tr>                                                        
                        )))
                } else if (props.exchange == 'BTCTURK') {
                    var Buydata = () => 
                        (this.state[EP].bids.slice(0, 18).map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item[0]).toFixed(2) }</td>
                                <td>{ parseFloat(item[1]).toFixed(4) }</td>
                                <td>{ (parseFloat(item[0]).toFixed(2) * parseFloat(item[1]).toFixed(4)).toFixed(2) }</td>
                            </tr>                                                        
                        )))
                    var Selldata = () => 
                        (this.state[EP].asks.slice(0, 18).map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item[0]).toFixed(2) }</td>
                                <td>{ parseFloat(item[1]).toFixed(4) }</td>
                                <td>{ (parseFloat(item[0]).toFixed(2) * parseFloat(item[1]).toFixed(4)).toFixed(2) }</td>
                            </tr>                                                        
                        )))
                    var Historydata = () =>
                        (this.state[EP + 'history'].map((item, i) => (
                            <tr className='trrow' key={i}>
                                <td>{ parseFloat(item.price).toFixed(2) }</td>
                                <td>{ parseFloat(item.amount).toFixed(4) }</td>
                                <td>{ (new Date(item.date)).getHours()+':0'+(new Date(item.date)).getMinutes()+':0'+(new Date(item.date)).getSeconds() }</td>
                            </tr>                                                        
                        )))
                } else if (props.exchange == 'KOINEKS') {
                    let a = this.state.parities[props.boxkey];
                    let b = a.split('/');
                    let c = b[0];
                    var Buydata = () =>
                        <tr className='trrow'>
                            <td>{ parseFloat(this.state[EP][c].bid).toFixed(2) }</td>
                            <td>{ parseFloat(this.state[EP][c].change_amount).toFixed(4) }</td>
                            <td>{ (parseFloat(this.state[EP][c].bid).toFixed(2)*parseFloat(this.state[EP][c].change_amount)).toFixed(2) }</td>
                        </tr>
                    var Selldata = () =>
                        <tr className='trrow'>
                            <td>{ parseFloat(this.state[EP][c].ask).toFixed(2) }</td>
                            <td>{ parseFloat(this.state[EP][c].change_amount).toFixed(4) }</td>
                            <td>{ (parseFloat(this.state[EP][c].ask).toFixed(2)*parseFloat(this.state[EP][c].change_amount)).toFixed(2) }</td>
                        </tr>
                var Historydata = () => <tr><td colSpan='3'><Icon type="loading-3-quarters" style={{ fontSize:20,color:'#888' }} spin/></td></tr>;
                }
            } else {
                var Buydata = () => <tr><td colSpan='3'><Icon type="loading-3-quarters" style={{ fontSize:20,color:'#888' }} spin/></td></tr>;
                var Selldata = Buydata;
                var Historydata = Buydata;    
            }
            return (
                <Row gutter={3} style={{padding:'0 3px'}}>
                    <Col span={8}>
                        <div style={{height:400,border:'solid #EEE 1px',textAlign:'center'}}>
                            <div style={{padding:'4px 0',borderBottom:'solid #1890ff 1px',color:'#1890ff'}}>
                                <Icon type="fork" theme="outlined" style={{marginRight:5}} />Buy Orders
                            </div>
                            <div style={{height:370,overflow:'auto'}}>
                                <table cellPadding='0' cellSpacing='0'>
                                    <tbody>
                                        <tr className='trrow head'><td>Price</td><td>Amout</td><td>Total</td></tr>
                                        <Buydata />
                                        <tr><td colSpan='3'></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div style={{height:400,border:'solid #EEE 1px',textAlign:'center'}}>
                            <div style={{padding:'4px 0',borderBottom:'solid #1890ff 1px',color:'#1890ff'}}>
                                <Icon type="fork" theme="outlined" style={{marginRight:5}} />Sell Orders
                            </div>
                            <div style={{height:370,overflow:'auto'}}>
                                <table cellPadding='0' cellSpacing='0'>
                                    <tbody>
                                        <tr className='trrow head'><td>Price</td><td>Amout</td><td>Total</td></tr>
                                        <Selldata />
                                        <tr><td colSpan='3'></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                    <Col span={8}>
                        <div style={{height:400,border:'solid #EEE 1px',textAlign:'center'}}>
                            <div style={{padding:'4px 0',borderBottom:'solid #1890ff 1px',color:'#1890ff'}}>
                                <Icon type="fork" theme="outlined" style={{marginRight:5}} />Order History
                            </div>
                            <div style={{height:370,overflow:'auto'}}>
                                <table cellPadding='0' cellSpacing='0'>
                                    <tbody>
                                        <tr className='trrow head'><td>Price</td><td>Amout</td><td>Time</td></tr>
                                        <Historydata />
                                        <tr><td colSpan='3'></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                </Row>
            )
        }
//  BOTTOM COMPONENT  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Chartbar = props => (
            <Row style={{padding:'20px 0'}}>
                <Col span={7}>
                    <PieChart style={{width:'60%',margin:'auto'}}
                        data={[                                                                                                            
                            { title: 'One', value: 15, color: '#5ca536' },
                            { title: 'Three', value: 8, color: '#ff7202' },
                    ]} />
                </Col>
                <Col span={11}>
                    <ul style={{listStyle:'none',padding:'0'}}>
                        <li style={{width:'60%',float:'left'}}>
                            balance warning
                        </li>
                        <li style={{width:'40%',float:'left'}}>
                            100$
                        </li>
                    </ul>
                    <ul style={{listStyle:'none',padding:'10px 0 0 0'}}>
                        <li style={{width:'60%',float:'left'}}>
                            ratio warning %
                        </li>
                        <li style={{width:'40%',float:'left'}}>
                            1.5
                        </li>
                    </ul>
                    <ul style={{listStyle:'none',padding:'10px 0 0 0'}}>
                        <li style={{width:'60%',float:'left'}}>
                            save
                        </li>
                        <li style={{width:'40%',float:'left'}}>
                            save
                        </li>
                    </ul>
                    <ul style={{listStyle:'none',padding:'10px 0 20px 0'}}>
                        <li style={{width:'60%',float:'left'}}>
                            secret key
                        </li>
                        <li style={{width:'40%',float:'left'}}>
                            22
                        </li>
                    </ul>
                    <Divider style={{margin:0}} />
                    <ul style={{listStyle:'none',padding:'5px 0 0 0'}}>
                        <li style={{width:'50%',float:'left'}}>
                            btc public key
                        </li>
                        <li style={{width:'50%',float:'left'}}>
                            usd public key
                        </li>
                    </ul>
                </Col>
                <Col span={6}>
                    <PieChart style={{width:'55%',margin:'auto'}}
                        data={[                                                                                                            
                            { title: 'One', value: 8, color: '#006fc1' },
                            { title: 'Three', value: 10, color: '#ffc103' },
                    ]} />
                </Col>
            </Row>
        )
//  EXCHANGE BOX  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const Exchangebox = props => (
            <Col span={8} className="exchangebox">
                <div>
                    <Headbar exchange={props.exchange} boxkey={props.boxkey} />
                    <Contentbar exchange={props.exchange} boxkey={props.boxkey} />
                    <Chartbar />
                </div>
            </Col>
        )
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////                REURN VIEW                  ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        return (                
            <div style={{padding:10}}>
                <Row>
                    <Menubar />
                </Row>
                <Row gutter={6} style={{paddingTop:5}}>
                    {
                        this.state.exchangeboxes.map((box, i) => (
                            <Exchangebox key={i} exchange={box} boxkey={i}/>    
                        ))
                    }
                </Row>                
            </div>
          )
      }
  }