// {"id":1,"username":"jopa","telegram_username":"mrmamongo"}

export const botname = "mg_report_bot";
export type User = {
    username: string,
    telegram_username: string
}

export const api_url = "https://45c8-2a00-1370-81a8-8fe-e5d0-297b-f366-4365.ngrok-free.app/";
export function load_users(): Promise<User[]> {

    return fetch(`${api_url}api/v1/user/`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
        },
    }).then(r => r.json()).then(
        (users) => {
            if (users === null) {
                return []
            } else {
                return users
            }
        }
    )
}

export function create_user(user: User): Promise<User> {
    return fetch(`${api_url}api/v1/user/`,
        {
            method: "POST",
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify(user)
        }).then(r => r.json())
}

export function update_user(username: string, user: User): Promise<User> {
    console.log("Updated " + JSON.stringify(user))
    return fetch(`${api_url}api/v1/user/${username}`,
        {
            method: "PUT",
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify(user)
        }).then(r => r.json())
}

export function delete_user(user: User): Promise<Response> {
    return fetch(`${api_url}api/v1/user/${user.username}`,
        {
            method: "DELETE",
        })
}