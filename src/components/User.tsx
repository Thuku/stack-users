import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { getAvatarFallback } from "@/lib/utils";
import { MoreVertical } from "lucide-react";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function User(props: { user: IUser }) {
  const [isFollowed, setIsFollowed] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const { user } = props;
  const avataRFallBack = getAvatarFallback(user.display_name);

  const handleFollow = () => {
    setIsFollowed(!isFollowed);
  };
  const handleBlock = () => {
    setIsFollowed(false);

    setIsBlocked(!isBlocked);
  };
  const followButtonText = isFollowed ? "Unfollow" : "Follow";
  const blockuttonText = isBlocked ? "Unblock" : "Block";
  const contentClass = isBlocked ? "bg-gray-500" : "bg-white";
  return (
    <CardContent
      className={`${contentClass} px-4 py-5 focus-within:ring-2 focus-within:ring-inset ${
        isBlocked ? "" : "hover:bg-gray-50"
      }`}
    >
      <li className="flex justify-between gap-x-6  ">
        <div className="flex gap-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={user.profile_image} alt="Avatar" />
            <AvatarFallback>{avataRFallBack}</AvatarFallback>
          </Avatar>

          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {user.display_name}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              Reputation: {user.reputation}
            </p>
          </div>
        </div>
        <div className=" sm:flex sm:items-end">
          <div>{isFollowed && <Badge>Following</Badge>}</div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MoreVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-26">
                <DropdownMenuLabel>More</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem disabled={isBlocked} onClick={handleFollow}>
                    <span> {followButtonText}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleBlock}>
                    <span>{blockuttonText}</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </li>
    </CardContent>
  );
}
