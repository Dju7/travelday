import {Avatar} from "@nextui-org/react";

export default function AvatarUser() {
    return (
      <div className="flex flex-col gap-3 items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-28 h-28 text-large border-2 border-white hover:border-[#fa9746]"/>
      </div>
    );
  }