import { SortFilterItem } from 'lib/constants';
import FilterItemDropdown from './dropdown';
import { FilterItem } from './item';

export type ListItem = SortFilterItem | PathFilterItem;
export type PathFilterItem = { title: string; path: string };

function FilterItemList({ list }: { list: ListItem[] }) {
  return (
    <>
      {list.map((item: ListItem, i) => (
        <FilterItem key={i} item={item} />
      ))}
    </>
  );
}

export default function FilterList({ list, title }: { list: ListItem[]; title?: string }) {
  return (
    <>
      <nav>
        {title ? (
          <h3 className="hidden font-serif text-lg text-neutral-500 lg:block ">{title}</h3>
        ) : null}
        <ul className="hidden lg:block ">
          <FilterItemList list={list} />
        </ul>
        <ul className="lg:hidden">
          <FilterItemDropdown list={list} />
        </ul>
      </nav>
    </>
  );
}
