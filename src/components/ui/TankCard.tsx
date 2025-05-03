
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
        "bg-tank-glass backdrop-blur-lg border border-white/10",
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
