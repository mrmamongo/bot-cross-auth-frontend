import React, {useEffect, useState} from "react";
import {load_users, User} from "./data.ts";
import {UserCard} from "./UserCard.tsx";
import {CreateUserForm} from "./CreateUserForm.tsx";
function App(): React.ReactElement {
    const [users, setUsers] = useState<User[]>([]);


    useEffect(
        () => {
            load_users().then(setUsers)
        }, []
    )
  return (
    <React.Fragment>
      <div className="container py-4 px-3 mx-auto">
        <h1>Cross Auth Site</h1>
          <CreateUserForm setUsers={setUsers} users={users}/>
        <ul className="d-flex flex-wrap gap-3">
            {users.map((user: User, index: number) =>
                    <UserCard user={user} key={index} setUsers={setUsers}></UserCard>
            )}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default App
