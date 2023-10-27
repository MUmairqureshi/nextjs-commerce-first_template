// 'use client';
import FilterList from 'components/layout/search/filter';
import { motion } from 'framer-motion';
import { sorting } from 'lib/constants';
import { Select, SelectContent, SelectTrigger } from 'src/components/ui/select';

const DefaultSortingDropdown = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[200px] lg:w-[220px]">
          <motion.div initial="hidden" animate="visible">
            Sort By
          </motion.div>
        </SelectTrigger>
        <SelectContent>
          <div className="order-none mb-2 flex-none px-3 md:order-last md:w-[150px]">
            <FilterList list={sorting} />
          </div>
          {/* <AnimatePresence initial={false}>
            <SelectItem value="default">
              <motion.div exit="hidden">Default sorting</motion.div>
            </SelectItem>
            <SelectItem value="popularity">
              <motion.div exit="hidden">Sort by popularity</motion.div>
            </SelectItem>
            <SelectItem value="average_rating">
              <motion.div exit="hidden">Sort by average rating</motion.div>
            </SelectItem>
            <SelectItem value="latest">
              <motion.div exit="hidden">Sort by latest</motion.div>
            </SelectItem>
            <SelectItem value="low_to_high">
              <motion.div exit="hidden">
                Sort by price: low to high
              </motion.div>
            </SelectItem>
            <SelectItem value="high_to_low">
              <motion.div exit="hidden">
                Sort by price: high to low
              </motion.div>
            </SelectItem>
          </AnimatePresence> */}
        </SelectContent>
      </Select>
    </div>
  );
};

export default DefaultSortingDropdown;
