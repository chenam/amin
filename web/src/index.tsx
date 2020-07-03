import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


// useState
// let states: any[] = [];
// let cursor: number = 0;

// // useEffect 为啥有两个方括号啊
// const allDeps: any[][] = []
// let effectCursor: number = 0;

// /**
//  * @description: 
//  * @param {type} 泛型 T，捕捉用户输入的类型，使参数类型和返回值类型相同
//  * @return: 
//  */
// function useState<T>(initialState: T): [T, (newState: T) => void] {
//   const currentCursor = cursor;
  
//   states[currentCursor] = states[currentCursor] || initialState;// 检查是否渲染过
//   console.log(cursor,'cursor', states, states[currentCursor], initialState)
//   function setState(newState: T){
//     console.log(currentCursor,'currentCursor')
//     states[currentCursor] = newState;
//     render()
//   }

//   ++cursor
//   return [states[currentCursor], setState]
// }
// /**
//  * @description: 
//  * @param {type} 
//  * @return: 
//  */
// function useEffect(callback: () => void, deps: any[]){
//   if(!allDeps[effectCursor]){
//     // 初次渲染， 赋值 + 调用回调函数
//     allDeps[effectCursor] = deps;
//     ++effectCursor;
//     callback()
//     return;
//   }

//   const currenEffectCursor = effectCursor;
//   const rawDeps = allDeps[currenEffectCursor]
//   // 检测依赖项是否发生变化，发生变化需要重新render
//   const isChanged = rawDeps.some(
//     (dep: any, index: number) => dep !== deps[index]
//   )
//   if(isChanged){
//     callback()
//   }
//   ++effectCursor;
// }
// /**
//  * @description: 第一次渲染的时候， 根据useState的顺序，逐个声明state,并将其放入全局Array中，每次声明state,都要将cursor增加1
//  * @param {type} 更新state,触发再次渲染的时候。cursor被重置成0.按照useState的声明顺序，依次拿出最新的state的值
//  * @param {type} 因为useState是基于Array和cursor来实现的，所以不能在循环和判断语句中使用
//  * @return: 
//  */
// function App (){
//   const [num, setNum] = useState <number> (0);
//   const [num2, setNum2] = useState <number> (1);

//   // 多次触发
//   // 每次点击按钮，都会触发 setNum 函数
//   // 副作用检测到 num 变化，会自动调用回调函数
//   useEffect(() => {
//     console.log("num update: ", num);
//   }, [num]);

//   // 仅第一次触发
//   // 只会在compoentDidMount时，触发一次
//   // 副作用函数不会多次执行
//   useEffect(() => {
//     console.log("num2 update: ", num2);
//   }, [num2]);
  
//   return( 
//     <div>
//     <div>num: {num}</div>
//     <div>
//       <button onClick={() => setNum(num + 1)}>加 1</button>
//       <button onClick={() => setNum(num - 1)}>减 1</button>
//     </div>
//     <hr />
//     <div>num2: {num2}</div>
//     <div>
//       <button onClick={() => setNum2(num2 * 2)}>扩大一倍</button>
//       <button onClick={() => setNum2(num2 / 2)}>缩小一倍</button>
//     </div>
//   </div>
//   )
// }

// function render(){
//   ReactDOM.render(<App/>, document.getElementById('root'));
//   cursor = 0; // 重置cursor
//   effectCursor = 0;
// }


// render();
serviceWorker.unregister();
