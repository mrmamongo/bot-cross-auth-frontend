// @flow
import React, {useState} from "react";
import {create_user, load_users, User} from "./data.ts";

type Props = {
    users: User[]
    setUsers: (users: User[]) => void
}
export const CreateUserForm = ({setUsers}: Props) => {
    const [username, setUsername] = useState<string>("")
    const [telegramUsername, setTelegramUsername] = useState<string>("")


    const create = () => {
        create_user({username, telegram_username: telegramUsername}).then(load_users).then(setUsers)
    }
    return (
        <React.Fragment>
            <div className="container d-flex gap-2 flex-column pb-4 pt-4">
                <h3>Create new user</h3>
                <div className="d-flex gap-3">
                <input type={"text"} placeholder={"username"} onChange={(e) => setUsername(e.target.value)}/>
                <input type={"text"} placeholder={"telegram username"} onChange={e => {setTelegramUsername(e.target.value)}}/>
                <button className="btn btn-success" onClick={() => {create()}}>Submit</button>
                </div>
            </div>
        </React.Fragment>
    );
};