import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      <p>Hello, WEB!</p>
      <Image src="/home_icon.png" alt="Home Icon" width={48} height={48}></Image>
    </>
  );
}
