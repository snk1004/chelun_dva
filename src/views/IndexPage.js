import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.scss';
import {  Icon } from 'antd-mobile';
//引入picker组件
import PikerSnk from '../components/picker'
import PikerCur from '../components/currentCity'
//引入nav组件
import NavBarSnk from '../components/nabBar'
class IndexPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      classList: ['身份证正面','身份证反面','驾驶证正页','驾驶证副页','白底半身照'],
      data: [ {value: "jz", label: "换驾照"},
              {value: "qz", label: "换签照"}],
      currentData: [ {value: "bj", label: "北京市"},
              {value: "zj", label: "浙江省"},
              {value: "gd", label: "广东省"},
              {value: "hn", label: "海南省"},
              {value: "cq", label: "重庆市"},
              {value: "sc", label: "四川省"} ]
    }
  }
  componentDidMount(){
    this.props.fetchUser();//state.example.list
  }
  render(){
    return (
      <div className={styles.wrap}>
        <NavBarSnk></NavBarSnk>
        <div className={styles.prog}>
          <span>订单提交</span>
          <span>填写收货地址</span>
          <span>正在办理</span>
          <span>办理完成</span>
        </div>
        <div className={styles.imgs}>
          <img src={require('../static/images/pic.jpg')} alt='' />
        </div>
        <div className={styles.identity}>
        {
          this.state.classList.map((item,index)=>{
            return <dl key={index}>
            <dd>
              <img src={require('../static/images/add.png')} alt=''/>
            </dd>
            <dt>{item}</dt>
          </dl>
          })
        }
        </div>
        <div className={styles.serve}>
          <li>
            <span>服务类型</span>
            <span>
              <PikerSnk data={this.state.data}/>
            </span>
          </li>
          <li>
            <span>当前驾照签发城市</span>
            <span>
              <PikerCur data={this.state.currentData} tit={'请选择签发地'}/>
            </span>
          </li>
          <li>
          <span>可换补的签发城市</span>
            <span>
              <PikerCur data={this.state.currentData} tit={'请选择补发地'}/>
            </span>
          </li>
          <li>
            <span>服务费</span>
            <span>￥ 399.00</span>
          </li>
        </div>

        <div className={styles.Vip}>
          {/* <li>
            <dl>
              <h5>成为车轮会员</h5>
              <dd>年省 ￥2000+，点击勾选单立减 ￥ 30</dd>
            </dl>
            <dl>
              <dd>￥19.9</dd>
              <dd>￥9.9</dd>
              <Radio></Radio>
            </dl>
          </li> */}
          <li>
            <span>优惠</span>
            <span>无优惠券可用<Icon type="right" /> </span>
          </li>
        </div>
        
        <div className={styles.question}>
          <span>常见问题?</span>
        </div>

        <footer className={styles.foot}>
          <span>实付: <em> ￥399.00</em></span>
          <span className={styles.to_pay}>立即支付</span>
          <span className={styles.cusService}>
            <img src={require('../static/images/icon_kefu.png')} alt=''/>
          </span>
        </footer>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

const mapStateToProps = (state) =>{
  console.log('state...', state);
  return state;
}

const mapDispatchToProps = dispatch=>{
  return {
    fetchUser: ()=>{
      dispatch({
        type: 'example/fetch'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
