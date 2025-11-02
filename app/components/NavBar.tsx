import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-blue-200 text-blue-950 rounded-md p-6">
            <div className="container">
                <ul className={"flex items-center gap-8 justify-between"}>
                    <li><Link href={"/"}> Home</Link></li>
                    <div className={"flex items-center gap-8 justify-between"}>
                        <li><Link href={"/login"}>Sing in</Link></li>
                        <li>Sing up</li>
                        <li>Profile</li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}