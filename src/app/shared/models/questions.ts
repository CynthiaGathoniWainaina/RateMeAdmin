export class Questions {
  'id': number;
  'orgProfileId': number;  // FK
  'templateId': number; // FK
  'question': string;
  'ratingRangeId': number; // FK
  'createdAt': Date;
  'updatedAt': Date;
}
