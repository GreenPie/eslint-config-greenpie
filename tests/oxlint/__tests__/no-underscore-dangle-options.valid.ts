const values = [1];
const record = { bar: 2 };

const [foo] = values;
const { bar } = record;

void foo;
void bar;