import Card from "../components/Card";
import CustomBtn from "../components/CustomBtn";
import {MockList} from "../components/MockList";
import {CombinedCard} from "../components/CombineCard";
import {CombinedCardItem} from "../components/CombineCardItem";
import ReduxBtn from "../components/ReduxDemo";
import store from "../store";
import {Provider} from "react-redux";


export default function Home() {
    return (
      <div>
          <header>header</header>
          <main>我是Main
                <Card title={'呵呵'} age={18} desc={'122'}/>
                 <CustomBtn name={'按钮我是'}/>
          </main>

          <div>
             <MockList/>
          </div>

          <CombinedCard>
              <CombinedCardItem/>
          </CombinedCard>



          <Provider store={store}>
              <ReduxBtn/>
          </Provider>

      </div>
    );
}
