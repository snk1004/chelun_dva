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

  render() {
    let {data} = this.props;
    const { getFieldProps } = this.props.form;
    console.log('provinceLite',provinceLite)
    return (
        <Picker extra="换签照" data={data} cols={1} {...getFieldProps('district3')} className="forss">
            <List.Item arrow="horizontal"></List.Item>
        </Picker>
    );
  }
}

const Pickers = createForm()(Test);

export default Pickers;