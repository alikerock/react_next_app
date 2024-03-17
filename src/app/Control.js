"use client";
import Link from "next/link";
import { useParams } from "next/navigation"; //2번이 자동으로 로드된다.

export function Control() {
  const params = useParams(); //1 useParmas함수를 입력하면
  const id = params.id; //3 params내 id를 변수에 할당
  return (
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id ? <>
        <li><Link href={"/update/"+id}>Update</Link></li>
        <li><button>delete</button></li>
      </> : null}
    </ul>
  );
}