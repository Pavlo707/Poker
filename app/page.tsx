import Link from "next/link";
import Divider from "@/components/divider";
import CreateRoomForm from "@/components/forms/create-room-form";
import JoinRoomForm from "@/components/forms/join-room-form";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full space-y-10">
      <div className="text-3xl text-center text-indigo-600 md:mb-4">
        Planning Poker
      </div>
      <div>
        <JoinRoomForm />
      </div>

      <Divider />

      <div>
        <CreateRoomForm />
      </div>
    </div>
  );
}

