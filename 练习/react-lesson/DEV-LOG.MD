

npm config set registry https://registry.npmmirror.com


https://www.bilibili.com/read/cv20992052/ 有人做的nextjs笔记，每一节视频都介绍讲了什么


https://www.bilibili.com/video/BV1G54y1o7RP?p=8&spm_id_from=pageDriver&vd_source=2a74ee360c9d262aadb2c6f6b5ada543



## 默认的首页

使用index.tsx


## 让组件的属性是可选的，并且用接口包装起来,这样好看些

```typescript jsx
interface CardProps {
    title: string
    age: number
    desc?: string  // 使用 ? 符号使 desc 成为可选属性
}


function Card(props: CardProps) {
    return (
        <div>
            <ol>
                <li>{props.title}</li>
                <li>{props.age}</li>
                <li>{props.desc}</li>
            </ol>
        </div>
    )
}


export default Card
```

这样使用

```typescript jsx
export default function Home() {
    return (
      <div>
          <header>header</header>
          <main>我是Main
                <Card title={'呵呵'} age={18} desc={}/>
          </main>
      </div>
    );
}
```

## 演示useState

可参考CustomBtn组件


## 演示 useEffect


第二个数组决定要不要生效，每次会对比第二个数组的传入值，如果一样就不变，因此如果传递 [] 就只会在第一次加载时生效
其实对比的是传入的数组有没有发生变化

```typescript jsx

function CustomBtn(props: CustomBtnProps) {
    const [count, setCount] = useState(0);
    const [btnName, setBtnName] = useState("default btn name");

    useEffect(() => {
        setCount(0)
        console.log("user effect")
    }, [count, btnName])  //只要有一个元素变化了就会触发，当然第一次渲染时也会触发


    useEffect(() => {
        setCount(0)
        console.log("user effect")
    })  //父组件渲染或者当前组件渲染就会触发，写的不当有可能发生死循环


    useEffect(() => {
        setCount(0)
        console.log("user effect")
    },[])  //只在第一次渲染时触发

    const btnClickHandler = () => {
        setCount(count + 1)
    }
    return (
        <button onClick={btnClickHandler}>{props.name} {count} </button>
    )
}
```



## 怎么引入CSS

如果你的组件叫Card 那么你新建一个 Card.module.css的文件就可以了。如果叫其他名称会报错;注意：必须是xx.module.css啥的 中间的module不能少


```typescript jsx
import styles from '../styles/Card.module.css'

function Card(props: CardProps) {
    return (
        <div className={styles.body}>
            <ol>
                <li>{props.title}</li>
                <li>{props.age}</li>
                <li>{props.desc}</li>
            </ol>
        </div>
    )
}
```

## 利用状态控制组件的显示和隐藏

````typescript jsx

const [modalShow, setModalShow] = useState(false);

   return (
        <div>
            <button onClick={btnClickHandler}>{props.name} {count} </button>
            <button onClick={() => setModalShow(true)}>展示模态框</button>
            <button onClick={() => setModalShow(false)}>隐藏模态框</button>

            {/*{modalShow?<ConfirmModal/> :null }*/}
            {modalShow && <ConfirmModal/>}

        </div>
    )
````

## 函数是一等公民

建议使用interface封装属性，这样可以点出来。

````typescript jsx
interface ConfirmModalProps {
    onCancelFn: Function
    onClickFn: Function
}

const ConfirmModal = (props:ConfirmModalProps) => {
    return (
        <div>
            <p>确定删除吗</p>
            <button onClick={props.onClickFn}>确定</button> //这里要注意 使用html自带的onlick函数 自定义是触发不了的
            <button onClick={props.onCancelFn}>取消</button>
        </div>
    )
}

export default ConfirmModal
````

```typescript jsx
{modalShow && <ConfirmModal  onCancelFn={()=>setModalShow(false)}
                                         onClickFn={()=>setModalShow(false)}/>}
```