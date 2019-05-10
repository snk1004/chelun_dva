import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Radio , Icon } from 'antd';

class IndexPage extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      classList: ['身份证正面','身份证反面','驾驶证正页','驾驶证副页','白底半身照']
    }
  }
  componentDidMount(){
    this.props.fetchUser();//state.example.list
  }
  render(){
    return (
      <div className={styles.wrap}>
        <div className={styles.prog}>
          <span>订单提交</span>
          <span>填写收货地址</span>
          <span>正在办理</span>
          <span>办理完成</span>
        </div>
        <div className={styles.imgs}></div>
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
            <span>换驾照<Icon type="right" /> </span>
          </li>
          <li>
            <span>当前驾照签发城市</span>
            <span>请选择签发地</span>
          </li>
          <li>
          <span>可换补的签发城市</span>
            <span>请选择补换地</span>
          </li>
          <li>
            <span>服务费</span>
            <span>￥ 399</span>
          </li>
        </div>

        <div className={styles.Vip}>
          <li>
            <dl>
              <h5>成为车轮会员</h5>
              <dd>年省 ￥2000+，点击勾选单立减 ￥ 30</dd>
            </dl>
            <dl>
              <dd>￥19.9</dd>
              <dd>￥9.9</dd>
              <Radio></Radio>
            </dl>
          </li>
          <li>
            <span>优惠</span>
            <span>无优惠券可用<Icon type="right" /> </span>
          </li>
        </div>
        
        <div className={styles.question}>
          <span>常见问题?</span>
        </div>

        <footer>
          <span>实付: <em> ￥399</em></span>
          <span>立即支付</span>
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
