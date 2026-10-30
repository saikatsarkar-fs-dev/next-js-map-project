import Image from "next/image";
import { ItemType } from "../lib/type";

const FeatureCom = (item: ItemType) => {
  return (
    <div className="flex w-fit justify-center items-start gap-6">
      <div className="w-fit">
        <Image
          src={`${item.pImg}`}
          alt="cloud"
          height={50}
          width={50}
          className="bg-purple-700 p-2 rounded-xl"
        />
      </div>

      <div className="w-1/2">
        <div className="font-bold">{item.pTitle}</div>
        <div className="">{item.pDes}</div>
      </div>
    </div>
  );
};

export default FeatureCom;
