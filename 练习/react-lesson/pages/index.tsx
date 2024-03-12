import Image from "next/image";
import Card from "../components/card";

export default function Home() {
    return (
      <div>
          <header>header</header>
          <main>我是Main
                <Card index={1222}/>
          </main>
      </div>
    );
}
