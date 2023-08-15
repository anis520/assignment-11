import Image from "next/image";
import style from "./home.module.css";
export default function Home() {
  return (
    <div className="w-11/12 mx-auto py-5 space-y-3">
      <p className="font-semibold text-4xl ">Home page</p>
      <p className={style.title}>
        Our blog website is most propular in Bangladesh{" "}
      </p>
    </div>
  );
}
