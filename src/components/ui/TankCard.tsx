
import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TankCardProps extends React.HTMLAttributes<HTMLDivElement> {}

const TankCard = React.forwardRef<
  HTMLDivElement,
  TankCardProps
>(({ className, children, ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        "bg-tank-abyss/60 border-tank-teal/40 border shadow-[0_0_35px_rgba(59,173,202,0.4)]",
        className
      )}
      {...props}
    >
      {children}
    </Card>
  );
});
TankCard.displayName = "TankCard";

export { TankCard };
