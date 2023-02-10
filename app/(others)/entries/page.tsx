import EntryList from "./PostList";
export default async function coursePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">entry list</h1>
            {/* @ts-expect-error Server Component */}
            <EntryList></EntryList>
        </div>
    )
}