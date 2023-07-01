import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { User } from "./User";

export function UserList(props: {
  users: IUser[];
  handleSearch: (e: {
    target: {
      value: string;
    };
  }) => void;
}) {
  const { users, handleSearch } = props;
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Stack overflow users</CardDescription>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="Search" onChange={handleSearch} />
        </div>
      </CardHeader>
      <ul role="list" className="divide-y divide-gray-100">
        {users.map((user: IUser) => (
          <User key={user.account_id} user={user} />
        ))}
      </ul>
    </Card>
  );
}
