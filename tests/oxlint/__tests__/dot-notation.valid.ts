const key = 'name';
const obj: { name: string; 'not-valid-id': number } = {
  name: 'Alice',
  'not-valid-id': 1
};

obj.name;
obj[key];
obj['not-valid-id'];
