import React from "react";

import style from "./blog.module.css";
import Link from "next/link";
import { getBlog } from "../service/getBlog";

const page = () => {
  const jsonData = getBlog();
  return (
    <div className="w-11/12 mx-auto">
      <p className="font-semibold text-2xl py-5">Blog page</p>

      <div className="grid  md:grid-cols-2  lg:grid-cols-4 gap-4  ">
        {jsonData.map((item, key) => {
          return (
            <div
              key={key}
              className="bg-gray-100 font-semibold  border space-y-2 rounded-md p-2 border-gray-500   "
            >
              <p>#id : {item.id}</p>
              <Link href={`post/${item.id}`}>
                <p className="cursor-pointer">Title : {item.title}</p>
              </Link>
              <p>
                Content : <br /> <hr /> {item.content}
              </p>
              <p>Time : {item.date}</p>
              <Link href={`post/${item.id}`}>
                <p className={style.btn + " mt-3 "}>See more</p>
              </Link>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default page;
