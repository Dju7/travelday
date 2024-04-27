import {Avatar} from "@nextui-org/react";

export default function AvatarUser() {
    return (
      <div className="flex flex-col gap-3 items-center m-4 lg:mt-10">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className=" w-12 h-12 lg:w-28 lg:h-28 text-large border-2 border-white hover:border-red-400"/>
      </div>
    );
  }