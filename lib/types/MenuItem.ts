import { ReactElement } from "react";

export interface MenuItem {
  name: string;
  icon?: ReactElement<{ className?: string }>;  // Explicitly declare className
  path: string;
  subMenu?: MenuItem[];
}
