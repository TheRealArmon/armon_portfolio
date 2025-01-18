// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AccomplishmentCardProps {
  title: string;
  organization: string;
  description: string;
  date?: string;
  url?: string;
}

export function AccomplishmentCard({
  title,
  organization,
  date,
  description,
  url,
}: AccomplishmentCardProps) {
  return (
    <Card className="bg-[#232936] border-[#2D9CDB] border-t-4 flex flex-col justify-between h-full">
      <div>
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-white">
            {title}
          </CardTitle>
          <p className="text-[#2D9CDB]">
            {organization} {date ? <span>| {date}</span> : null}
          </p>
        </CardHeader>
        <CardContent>
          {description && <p className="text-gray-300">{description}</p>}
        </CardContent>
      </div>
      <CardFooter className="mt-auto">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white bg-blue-500 hover:bg-blue-600 border border-blue-400 border-opacity-50 rounded-lg px-4 py-2 inline-block text-center"
          >
            View badge
          </a>
        ) : null}
      </CardFooter>
    </Card>
  );
}
