
export type Menu = {
  id: number;
  title: string;
  path?:any;
  newTab: boolean;
  submenu?: Menu[];
};
