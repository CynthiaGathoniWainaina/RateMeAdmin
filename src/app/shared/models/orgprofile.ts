export class Orgprofile {
  'userId': string;
  'companyName': string;
  'industryId': string; // FK
  'email': string;
  'logo': {name: string, url: string};
  'location': string;
  'createdAt': Date;
  'updatedAt': Date;
}
