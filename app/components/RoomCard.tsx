export default function RoomCard(){
    return <div className={"bg-[#3E4257] flex flex-col rounded-xl p-5"}>
        <div className={"flex justify-between"}>
            <h3>@salumita_ivy</h3> <span className={"font-extrabold"}>5 days ago</span>
        </div>
        <h2 className={"font-bold text-xl"}>JavaScript made Simple</h2>
        <p className={"font-light my-3"}>Lorem  ipsum Server Component:
            [next]/internal/font/google/geist_mono_8d43a2aa.module.css
            [next]/internal/font/google/geist_mono_8d43a2aa.js
            ./app/layout.tsx</p>
        <hr/>
        <div className={"flex justify-between my-2"}>
            <h3>5.3k Joined</h3><span className={"bg-[#4F546E] px-2 py-1 rounded-full"}>Python</span>
        </div>
    </div>
}