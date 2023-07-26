export interface IOlympicData {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

export interface IOlympicWinnerData {
  name: string;
  person: {
    age: number;
    country: string;
  };
  medals: {
    gold: number;
    silver: number;
    bronze: number;
  };
}