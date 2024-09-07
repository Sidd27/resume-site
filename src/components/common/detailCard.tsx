import { Calendar, MapPin } from "lucide-react";
import * as React from "react";
import Badge from "./badge";
import { InnerCard } from "./Cards";

interface IDetailCardProps {
  image?: string;
  title?: string;
  company?: string;
  location?: string;
  description?: string;
  dateRange?: string;
  badge?: string;
  technologies?: string[];
  primaryIcon: React.ReactNode;
}

const DetailCard: React.FunctionComponent<IDetailCardProps> = ({
  image,
  title,
  company,
  location,
  description,
  dateRange,
  badge,
  technologies,
  primaryIcon,
}) => {
  return (
    <InnerCard className="flex">
      <img
        src={image}
        className="border-2 bg-white border-white shadow object-center object-contain w-14 h-14 rounded-full align-middle"
      />
      <div className="ml-4 relative">
        <div className="text-foreground font-semibold">{title}</div>
        <div className="flex gap-2 text-muted-foreground mt-2 md:gap-4 flex-wrap">
          <div className="text-xs flex space-x-1 items-center">
            <span className="shrink-0">{primaryIcon}</span>
            <span>{company}</span>
          </div>
          <div className="text-xs flex space-x-1 items-center">
            <MapPin size="14" className="shrink-0" />
            <span>{location}</span>
          </div>
          <div className="text-xs flex space-x-1 items-center">
            <Calendar size="14" className="shrink-0" />
            <span>{dateRange}</span>
          </div>
        </div>
        <p className="mt-4 text-muted-foreground">{description}</p>
        {badge && (
          <div className="absolute top-0 right-0 hidden md:block">
            <Badge>{badge}</Badge>
          </div>
        )}
        {technologies && (
          <div className="mt-4 gap-2 flex flex-wrap">
            {technologies.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}
          </div>
        )}
      </div>
    </InnerCard>
  );
};

export default DetailCard;
