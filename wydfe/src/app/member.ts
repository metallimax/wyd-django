class Gear {
  name: string;
  type: string;
}

export class Member {
  name: string;
  avatar_url: string;
  member_until: string;
  gears: Gear[];
  roles: string[];
}
