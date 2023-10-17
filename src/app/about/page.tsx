import FollowUs from 'components/About/FollowUs';
import OurTeam from 'components/About/OurTeam';
import WhoWeAre from 'components/About/WhoWeAre';
import ChooseUs from 'components/Home/ChooseUs';
import img from 'components/images/aboutUsBanner.jpg';
import img2 from 'components/images/teamMember1.png';
import img1 from 'components/images/teamMember2.png';
import Image from 'next/image';

const TeamData = [
  { name: 'Harvey Spector', post: 'Founder - CEO', img: img2 },
  { name: 'Jessica Pearson', post: 'COO', img: img1 },
  { name: 'Rachel Zain', post: 'Marketing Head', img: img2 },
  { name: 'Jessica Pearson', post: 'COO', img: img1 },
  { name: 'Rachel Zain', post: 'Marketing Head', img: img2 },
  { name: 'Harvey Spector', post: 'Founder - CEO', img: img2 }
];

const About = () => {
  return (
    <>
      <div className="w-full  bg-cover bg-fixed bg-no-repeat ">
        <img
          src="https://ideogram.ai/api/images/direct/t1AVJJ1LQBycwC4mxCKzXA"
          className={`absolute -z-40 h-full w-full max-w-screen-xl bg-cover bg-fixed bg-no-repeat brightness-50 filter`}
          alt="bg-image"
        />

        <div className="flex h-[480px] w-full items-center justify-center backdrop-brightness-50 xl:h-[700px]">
          <span className="text-5xl font-bold text-white">About Us</span>
        </div>
        <WhoWeAre />
      </div>
      {/* <div className="w-full bg-FollowUsBanner bg-cover bg-fixed bg-no-repeat "> */}
      <OurTeam TeamData={TeamData} />
      <FollowUs />
      <ChooseUs bgColor="white" />
      {/* </div> */}
    </>
  );
};

export default About;
