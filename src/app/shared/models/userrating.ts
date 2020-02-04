export class Userrating {
  'id': number;
  'orgProfileId': number; // FK
  'userProfileId': number; // FK
  'possibleSolutionId': string; // FK
  'createdAt': Date;
  'updatedAt': Date;
}
