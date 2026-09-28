type Input = {
  name: string;
  value: number;
};

type Expected = Omit<Input, 'name'>;
