"use client";
import Image from "next/image";
import { motion } from "motion/react";
const UserCard = ({ type }: { type: string }) => {
  return (
    <motion.div
      className="rounded-2xl odd:bg-purple-300 even:bg-amber-300 p-4 flex-1"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2025/26
        </span>
        <Image src="/more.png" alt="" width={20} height={20}></Image>
      </div>

      <h1 className="text-2xl font-semibold my-4">1234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
    </motion.div>
  );
};
export default UserCard;
