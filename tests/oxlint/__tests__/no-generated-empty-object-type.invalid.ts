type Input = null | {
  name: string;
  value: number;
};

type Unexpected = Omit<Input, 'name'>;
