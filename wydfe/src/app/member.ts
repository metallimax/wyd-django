class Gear {
  name: string;
  type: string;
}

export class Member {
  name: string;
  avatar: string;
  member_until: string;
  gears: Gear[];
  roles: string[];
}
