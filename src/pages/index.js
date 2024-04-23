import Image from "next/image";
import { Inter } from "next/font/google";
import Body from "@/components/body";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <div className="h-screen flex items-center justify-center">
    <Body/>
  </div>)
  
}
