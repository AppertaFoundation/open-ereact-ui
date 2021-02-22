type news2Type = {
  value: {
    trend: string;
    value: number;
    clinicalRisk: string;
  } | null;
};

export interface IPatient {
  id: string;
  birthDate: string;
  name: string;
  gender: string;
  location: string;
  nhsnumber: string;

  admitted: string;
  discharge: string;
  consultant: string;
  news2: news2Type;
}
