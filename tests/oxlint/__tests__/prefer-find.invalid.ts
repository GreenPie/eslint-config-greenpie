interface Item {
  active: boolean;
}

const list: Item[] = [{ active: true }, { active: false }];

const first = list.filter((item) => item.active)[0];
void first;
