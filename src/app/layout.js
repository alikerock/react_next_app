// "use client";
import Link from "next/link";
import "./globals.css";
// import { useEffect, useState } from "react";

export const metadata = {
  title: "Web tutorials",
  description: "Generated by ezweb",
};

export default async function RootLayout({ children }) {
  // const[topics,setTopics] = useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:9999/topics')
  //   .then(response=>{
  //     response.json();
  //   })
  //   .then(result=>{
  //     setTopics(result);
  //   });
  // },[]);
  const response = await fetch('http://localhost:9999/topics',{ next: { revalidate: 0 }});
  const topics = await response.json();

  return (
    <html lang="ko">
      <body>
        <h1><Link href="/">WEB</Link></h1>
        <nav>
          <ol>
            {
              topics.map(topic=>{
                return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
              })
            }
          </ol>
        </nav>
        {children}
        <ul>
          <li><Link href="/create">Create</Link></li>
          <li><Link href="/update/1">Update</Link></li>
          <li><button>delete</button></li>
        </ul>

        </body>
    </html>
  );
}
