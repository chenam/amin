import React, { FC, useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.less';
import { Button, Modal } from 'antd'
// FC是typescript的一个泛型，泛型里可以使用useState
const App: FC = () => {
  // 返回一个数组，第一个值是 state,第二个是 setState, 括号里的是默认值
  // 不要在条件或者嵌套里面调用useState, 数据会混乱
  const [showModalVisible, handleModalVisible] = useState<Boolean>(() => {
     // 只会执行一次
    return false
  })
  // count
  const [count, handleCount] = useState<Number>(0)
  // width
  const [width, handleWidth] = useState<Number>(document.body.clientWidth)

  // 改变宽度
  const changeWidth = () => {
    handleWidth(document.body.clientWidth)
  }
  // 拉伸窗口的时候变更宽度
  useEffect(() => {
    // 相当于 componentDidMount 
    window.addEventListener('resize', changeWidth, false)
    return () => {
      // 相当于 componentWillUnmount
      window.removeEventListener('resize', changeWidth, false)
    }
  }, [])
  /**
   * @description: 
   * @param {type} 
   * @param {type} 第二个参数 1. 什么都不传： render之后都会调用，相当于 componentDidMount 和 componentDidUpDate 
   * @param {type} 第二个参数 2. 传 [], 只会调用一次，相当于 componentDidMount 和 componentWillUnmount 
   * @param {type} 第二个参数 3. 传一个数组，只有这些变量变动时，useEffect才会执行
   * @return: 
   */
  useEffect(() => {
    // 相当于 componentDidUpdate
    document.title = count + ''
  })
  
  return(
    <div className="App">
      {/* 触发弹窗打开 */}
      <Button type="primary" onClick={() => {handleModalVisible(true)}}>打开弹窗</Button>
      {width}
      <Modal onCancel={() => handleModalVisible(false)}>
      <Button type="primary">增加</Button>
        {count}
      </Modal>
    </div>
  )
}

export default App;
