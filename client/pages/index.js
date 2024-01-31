import SideBar from "@/components/SideBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <SideBar />
        <duas />
      </div>
    </>
  );
}
