//used for main page plannings,upcomming tasks, events, and classes 
// InfoCard.tsx
interface InfoCardProps {
  title: string;
  content: string;
  date: string;
  icon?: React.ReactNode; // optional future icon
  bgColor?: string; // optional
}

const InfoCard = ({ title, content, date, icon, bgColor }: InfoCardProps) => {
  return (
    <div className={`rounded-md p-4 shadow-md border border-gray-300 ${bgColor || "bg-white"}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
        {icon && <div>{icon}</div>}
      </div>
      <p className="text-sm text-gray-600 my-1">{content}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
};

export default InfoCard;
