import RoomCard from "@/app/components/RoomCard";
import TopicCount from "@/app/components/TopicCount";
import Activities from "@/app/components/Activities";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'StudyBuddy',
    description: 'Join the conversation and chat with others in real time.',
}

export default function Home() {
  return (
      <main  className={"flex flex-row gap-10 h-screen px-6 py-2 bg-[#2C2D39]"}>
          <div className={"flex-2 p-2  justify-center space-y-4"}>
              <div className={"text-[#6C6C83] mt-3 uppercase font-semibold"}>Browse Topics</div>
              <TopicCount count={553} topic={"All"} active={true}/>
              <TopicCount count={222} topic={"Python"}/>
              <TopicCount count={122} topic={"JavaScript"}/>
              <TopicCount count={87} topic={"React"}/>
              <TopicCount count={90} topic={"Database"}/>
          </div>
          <div className={"flex-5 mt-5"}>
              <h2 className={"uppercase font-semibold"}>study room</h2>
              <h3 className={"text-[#6C6C83] mb-5"}>7,439 Rooms available</h3>
              <div className={"space-y-3"}>
                  <RoomCard/>
                  <RoomCard/>
                  <RoomCard/>
              </div>
          </div>
          <div className={"flex-3 mt-3"}>
              <div className={"uppercase bg-[#686c9c]  p-2 rounded-t-md"}>Recent Activities</div>
              <div className={"bg-[#3E4257] w-full h-full p-2 space-y-2"}>
                  <Activities/>
                  <Activities/>
                  <Activities/>
              </div>
          </div>
      </main>
  );
}
