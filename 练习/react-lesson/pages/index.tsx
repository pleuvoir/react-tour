import Card from "../components/Card";
import CustomBtn from "../components/CustomBtn";


export default function Home() {
    return (
      <div>
          <header>header</header>
          <main>我是Main
                <Card title={'呵呵'} age={18} desc={'122'}/>
                 <CustomBtn name={'按钮我是'}/>
          </main>
      </div>
    );
}
