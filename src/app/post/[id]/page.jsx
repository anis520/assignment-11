import React from "react";

import style from "./post.module.css";
import Link from "next/link";
import { getBlog } from "@/app/service/getBlog";
const page = ({ params }) => {
  const jsonData = getBlog();
  const data = jsonData.find((e) => e.id == params.id);
  return (
    <div>
      {data ? (
        <div className="bg-gray-100 font-semibold  border space-y-2 rounded-md  w-7/12 mx-auto p-5 mt-4 border-gray-500   ">
          <p>#id : {data.id}</p>
          <p className="cursor-pointer">Title : {data.title}</p>
          <p>
            Content : <br /> <hr /> {data.content}
          </p>
          <p>Time : {data.date}</p>
          <Link href={`/blog`}>
            {" "}
            <p className={style.back + " mt-3 "}>go back</p>
          </Link>
        </div>
      ) : (
        <p>no post found</p>
      )}
    </div>
  );
};

export default page;
