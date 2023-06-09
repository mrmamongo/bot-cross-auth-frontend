// @flow
import {useState} from 'react';
import {delete_user, load_users, update_user, User} from "./data.ts";
import "./UserCard.css";

type Props = {
    user: User
    setUsers: (users: User[]) => void
};
export function UserCard({user, setUsers}: Props) {
    const [username, setUsername] = useState<string>(user.username)
    const [telegramUsername, setTelegramUsername] = useState<string>(user.telegram_username)

    const [editing, setEditing] = useState<boolean>(false);

    const update_edited = () => {
        if (username !== user.username || telegramUsername !== user.telegram_username) {
            update_user(user.username, {username: username, telegram_username: telegramUsername}).then(load_users).then(setUsers)
        }
        setEditing(false);
    }
    const cancel_editing = () => {
        setUsername(user.username);
        setTelegramUsername(user.telegram_username);
        setEditing(false);
    }

    const remove = () => {
        delete_user(user).then(load_users).then(setUsers);
    }
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <input type="text" className="btn card-title user-data"
                       value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       onPointerEnter={(e) => e.preventDefault()}
                       disabled={!editing}
                />
                <input type="text" className="btn card-title user-data"
                       value={telegramUsername}
                       onChange={e => {setTelegramUsername(e.target.value)}}
                       onPointerEnter={(e) => e.preventDefault()}
                       disabled={!editing}
                />
            </div>
            <div className="card-footer">
                <button className="btn btn-success" onClick={e => {editing ? update_edited() : setEditing(true)}}>{editing ? "Save" : "Edit"}</button>
                <button className="btn btn-danger ms-3" onClick={e => {
                    editing ?  cancel_editing() : remove()
                }}>{editing ? "Cancel" : "Delete"}</button>
            </div>
        </div>
    );
}