
import * as React from "react";
import { Card, CardProps } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TankCardProps extends CardProps {}

const TankCard = React.forwardRef<
  React.ElementRef<typeof Card>,
  TankCardProps
>(({ className, ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        "bg-tank-glass backdrop-blur-lg border border-white/10",
        className
      )}
      {...props}
    />
  );
});
TankCard.displayName = "TankCard";

export { TankCard };
