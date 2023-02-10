async function getData() {
    const client_id = 'QWKzg0bfLzaa51kmyZdce8QlGbvja66t8gEVkZuD'
    const client_secret = 'EyfssYCgYtCRKahBH8OCKdYolUOTw52ivAB3LJTUkuwN26GJDnDRUTVBfN3LGsI8Qt2EPn2ACCIlfuK0V8OATQVW33Ihm4082rfyC7NmnEWlTWMVfaB3aYtpbhrI4j7X'
    const category = 'science'
    const page = 2
    const page_size = 12
    const headers = {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json;charset=utf-8",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.35",
    }
    const res = await fetch(`https://api.publicapis.org/entries?category=${category}`, {
        //  next: {revalidate: 30},
        headers: headers
    })
    // if (!res.ok) {
    //     throw new Error('failed to fetch data')
    // }
    // 返回Cloudflare 无解
    return res.json()

}


export default async function entries() {
    const data = await getData()
    return (
        <div>
        <ul>
            {data.entries.map((entry,index) => <li>({index+1}) <a href={entry.Link}>{entry.Description}</a></li>)}
        </ul>
        </div>
    )
}