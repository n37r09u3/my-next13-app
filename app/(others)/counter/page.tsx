import Counter from "./Counter";
import Logo from "./Logo";
import List from "./List";

export default async function CounterPage() {
    return (
        <div>
            CounterPage
            {/* @ts-expect-error Server Component */}
            <Logo></Logo>
            <List></List>
            <Counter></Counter>
        </div>
    )
}