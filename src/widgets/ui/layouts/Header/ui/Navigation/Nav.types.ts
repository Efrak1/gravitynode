interface NavItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

export interface NavGroup {
  title: string;
  sections: NavSection[];
  allButton: {
    label: string;
    href: string;
    icon: React.ReactNode;
  };
}