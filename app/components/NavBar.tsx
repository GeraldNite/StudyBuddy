import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-[#3d4155] text-white">
            <div className="container py-4 px-6">
                <ul className={"flex items-center gap-8 justify-between"}>
                    <li className="font-bold text-xl"><Link href={"/"}> StudyBuddy </Link></li>
                    {/*<div className={"flex justify-between"}>*/}
                        <input type="text" placeholder={"Search for posts"} className={"px-4 py-2 bg-[#4F5470] rounded-md w-1/3"}/>
                        <div className={"flex flex-col items-center justify-between text-sm"}>
                            <li>John Doe</li>
                            <li>@john_doe</li>
                        </div>
                    {/*</div>*/}
                </ul>
            </div>
        </nav>
    )
}