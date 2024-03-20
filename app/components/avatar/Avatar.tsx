import {Avatar} from "@nextui-org/react";

export default function AvatarUser() {
    return (
      <div className="flex flex-col gap-3 items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-30 h-30 text-large border-2 border-white"/>
      </div>
    );
  }