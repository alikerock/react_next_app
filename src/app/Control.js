"use client";
import Link from "next/link";
import { useParams,useRouter } from "next/navigation";//1. userRouter 로드

export function Control() {
  const params = useParams(); 
  const router = useRouter();//2. useRouter 실행결과를 router객체에 할당
  const id = params.id; 
  return (
    <ul class="controls">
      <li><Link href="/create">Create</Link></li>
      {id ? <>
        <li><Link href={"/update/"+id}>Update</Link></li>
        <li><button onClick={()=>{
          const options = {method:'DELETE'}
          fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id, options)
          .then(resp=>resp.json())
          .then(result=>{
            router.push('/'); //3. 삭제후 홈으로 이동
            router.refresh();//4. 목록 새로고침
          });
        }}>delete</button></li>
      </> : null}
    </ul>
  );
}