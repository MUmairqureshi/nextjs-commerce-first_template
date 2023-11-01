/* eslint-disable unicorn/filename-case */
'use client';
import OurTeamCard from 'components/Cards/OurTeamCard';
import { motion } from 'framer-motion';

const OurTeam = ({ team, teamProducts }: { team: any; teamProducts: any }) => {
  return (
    <div className="w-full bg-white px-6 py-8 md:p-12 ">
      <motion.div
        viewport={{ once: false }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="flex w-full flex-col items-center justify-center gap-6"
      >
        <div className="h-1 w-20 bg-primary" />
        <h1 className="leading-wider mb-2 text-center text-xl font-semibold">{team.tags}</h1>
        <h1 className="leading-wider text-3xl font-bold tracking-wider md:text-4xl">
          {team.title}
        </h1>
        <p className="text-center font-light">{team.description}</p>
      </motion.div>
      <div className="mt-16 flex justify-center ">
        <div className="grid w-full grid-cols-1 gap-8 md:w-auto md:grid-cols-3">
          {teamProducts.slice(2).map((item: any, ind: any) => {
            // console.log("item:",item)
            return (
              <motion.div
                key={ind}
                viewport={{ once: false }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.2 * ind }}
              >
                <OurTeamCard key={ind} data={item} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
