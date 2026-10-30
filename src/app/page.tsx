import FeatureCom from "./component/FeatureCom";
import { ItemType } from "./lib/type";

const items: ItemType[] = [
  {
    pId: "01",
    pImg: "/cloud.png",
    pTitle: "Push to deploy",
    pDes: `Morbi viverra dui mi arcu sed. Tellus semper
adipiscing suspendisse semper morbi. Odio urna
massa nunc massa.`,
  },
  {
    pId: "02",
    pImg: "/cycle.png",
    pTitle: "SSL certificates",
    pDes: `Sit quis amet rutrum tellus ullamcorper ultricies
libero dolor eget. Sem sodales gravida quam
turpis enim lacus amet.`,
  },
  {
    pId: "03",
    pImg: "/fingerprint.png",
    pTitle: "Simple queues",
    pDes: `Quisque est vel vulputate cursus. Risus proin
diam nunc commodo. Lobortis auctor congue
commodo diam neque.`,
  },
  {
    pId: "04",
    pImg: "/padlock.png",
    pTitle: "Advanced security",
    pDes: `Arcu egestas dolor vel iaculis in ipsum mauris.
Tincidunt mattis aliquet hac quis. Id hac
maecenas ac donec pharetra eget.`,
  },
];

const page = () => {
  return (
    <>
      <div className="text-purple-600 font-semibold">Deploy faster</div>
      <div className="text-4xl font-bold mt-3">
        Everything you need <br />
        to deploy your app
      </div>
      <div className="mt-3">
        Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
        Suspendisse eget <br /> egestas a elementum pulvinar et feugiat blandit
        at. In mi viverra elit nunc.
      </div>

      <div className="grid grid-cols-2 place-items-center gap-6 w-fit mt-12">
        {items.map((item) => {
          return (
            <FeatureCom
              key={item.pId}
              {...item}
            />
          );
        })}
      </div>
    </>
  );
};

export default page;
