// import { useQuery } from "react-query";

import { useState } from "react";
import { useQuery } from "react-query";
import axiosClient from "./api";
import { UserList } from "./components/UserList";

export default function Dashboard() {
  const [searchInput, setSearchInput] = useState<string>("");
  const { isLoading, error, data } = useQuery("users", () =>
    axiosClient
      .get("/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow")
      .then((res) => res.data)
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;
  const { items } = data;
  let searchResult: IUser[] = [];

  const handleChange = (e: { target: { value: string } }) => {
    setSearchInput(e.target.value.toLowerCase());
  };

  if (searchInput.length > 0) {
    searchResult = items.filter((user: IUser) => {
      return user.display_name.toLowerCase().match(searchInput);
    });
  }
  const usersToDisplay = searchResult.length ? searchResult : items;
  return (
      <div className="min-h-full">
        <div className="py-10">
          <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Dashboard
              </h1>
            </div>
          </header>
          <main>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <UserList users={usersToDisplay} handleSearch={handleChange} />
            </div>
          </main>
        </div>
      </div>
  );
}
