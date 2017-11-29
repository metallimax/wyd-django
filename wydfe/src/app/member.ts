export class Member {
  model: string;
  pk: number;
  fields: {
    firstname: string;
    lastname: string;
    pseudo: string;
    birth_date: string;
    avatar: string;
    member_from: string;
    member_until: string;
  };
  roles: string[];
}
