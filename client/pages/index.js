import Categories from "@/components/Categories";
import Settings from "@/components/Settings";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { Inter } from "next/font/google";
import IntroductioToDua from "./Dua/IntroductioToDua";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex flex-row p-5">
        <SideBar />
        <div className="w-full">
          {/* top bar start */}
          <TopBar />
          {/* top bar end */}
          {/* content start */}
          <div className="flex flex-row gap-5 p-2">
            {/* catagories start */}
            <div className="w-2/5 bg-white rounded-md">
              <Categories />
            </div>
            {/* catagories end */}
            <div className="w-full">
              <IntroductioToDua />
            </div>
            <div className="w-72 bg-red-400">
              <Settings />
            </div>
          </div>
          {/* content end */}
        </div>
      </div>
    </>
  );
}
