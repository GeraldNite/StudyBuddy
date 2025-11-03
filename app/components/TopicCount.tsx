interface Props {
    count: number
    topic: string
    active?: boolean
}
export default function TopicCount({ topic, count, active=false}: Props) {
    return (
        <div className={"flex justify-between items-center font-semibold"}>
            <h3 className={`${active ? 'text-[#5D91A2]':''}`}>{topic}</h3>
            <div className={`bg-gray-600 py-1 px-2 rounded-sm ${active ? 'text-[#5D91A2]':''}`}>{count}</div>
        </div>
    );
}