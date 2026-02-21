interface Item {
  active: boolean;
}

const list: Item[] = [{ active: true }, { active: false }];

const first = list.find((item) => item.active);
void first;
