// {"id":1,"username":"jopa","telegram_username":"mrmamongo"}
export type User = {
    username: string,
    telegram_username: string
}

export function load_users(): Promise<User[]> {

    return fetch("http://localhost:8080/v1/user/", {
        method: "GET",
        headers: {
            Accept: 'application/json',
        },
    }).then(r => {
        console.log(r.ok)
        return r.json<User[]>()
    })
}

export function create_user(user: User): Promise<User> {
    return fetch("http://localhost:8080/v1/user/",
        {
            method: "POST",
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify(user)
        }).then(r => r.json<User>())
}

export function update_user(username: string, user: User): Promise<User> {
    console.log("Updated " + JSON.stringify(user))
    return fetch(`http://localhost:8080/v1/user/${username}`,
        {
            method: "PUT",
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify(user)
        }).then(r => r.json<User>())
}

export function delete_user(user: User): Promise<Response> {
    return fetch(`http://localhost:8080/v1/user/${user.username}`,
        {
            method: "DELETE",
        })
}