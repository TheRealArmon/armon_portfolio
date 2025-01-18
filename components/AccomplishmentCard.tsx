import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface AccomplishmentCardProps {
  title: string
  organization: string
  date: string
  description: string
}

export function AccomplishmentCard({
  title,
  organization,
  date,
  description
}: AccomplishmentCardProps) {
  return (
    <Card className="bg-[#232936] border-[#2D9CDB] border-t-4">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-white">{title}</CardTitle>
        <p className="text-[#2D9CDB]">{organization} • {date}</p>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="text-[#2D9CDB] border-[#2D9CDB]">View Certificate</Button>
      </CardFooter>
    </Card>
  )
}

