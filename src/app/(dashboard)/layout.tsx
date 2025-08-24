import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";

import Link from "next/link";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">School Admin</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      {/* overflow-scroll : 右边可以滑动 */}
      <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
};
export default DashboardLayout;
