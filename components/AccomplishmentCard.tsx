import { Button } from "@/components/ui/button";
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
  date: string;
  description: string;
}

export function AccomplishmentCard({
  title,
  organization,
  date,
  description,
}: AccomplishmentCardProps) {
  return (
    <Card className="bg-[#232936] border-[#2D9CDB] border-t-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">
          {title}
        </CardTitle>
        <p className="text-[#2D9CDB]">
          {organization} | {date}
        </p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          className="text-white hover:text-white bg-blue-500 hover:bg-blue-600 border-blue-400 border-opacity-50"
        >
          View in credly
        </Button>
      </CardFooter>
    </Card>
  );
}
