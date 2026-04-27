const values = [1];
const record = { bar: 2 };

const [_foo] = values;
const { bar: _bar } = record;

void _foo;
void _bar;