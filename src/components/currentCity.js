import React from 'react'
import { Picker, List } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';

import 'antd-mobile/dist/antd-mobile.css'
import '../views/IndexPage.scss';

import { district, provinceLite } from 'antd-mobile-demo-data';

// 如果不是使用 List.Item 作为 children


class Test extends React.Component {
  state = {
    data: [],
    pickerValue: [],
    visible: false,
  };
  onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };
  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
    return treeChildren.map(v => v.label).join(',');
  }

  onChangeColor = (color) => {
    this.setState({
      colorValue: color,
    });
  };
/* <Picker
          extra="请选择签发地"
          data={data}
          title="请选择签发地"
          cascade={false}
          value={this.state.sValue}
          onChange={v => this.setState({ sValue: v })}
          onOk={v => this.setState({ sValue: v })}
        >
          <List.Item arrow="horizontal">Multiple</List.Item>
        </Picker> */
  render() {
    let {data,tit} = this.props;
    const { getFieldProps } = this.props.form;
    console.log('provinceLite',provinceLite)
    return (
      <Picker
        extra={tit}
        data={district}
        title={tit}
        
        onOk={e => console.log('ok', e)}
        onDismiss={e => console.log('dismiss', e)}
      >
      <List.Item arrow="horizontal"></List.Item>
    </Picker>
    );
  }
}

const Pickers = createForm()(Test);

export default Pickers;