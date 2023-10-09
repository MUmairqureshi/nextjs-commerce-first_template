import FollowUs from 'components/About/FollowUs';
import OurTeam from 'components/About/OurTeam';
import WhoWeAre from 'components/About/WhoWeAre';
import ChooseUs from 'components/Home/ChooseUs';
import img2 from 'components/images/teamMember1.png';
import img1 from 'components/images/teamMember2.png';

const TeamData = [
  { name: 'Harvey Spector', post: 'Founder - CEO', img: img2 },
  { name: 'Jessica Pearson', post: 'COO', img: img1 },
  { name: 'Rachel Zain', post: 'Marketing Head', img: img2 },
  { name: 'Jessica Pearson', post: 'COO', img: img1 },
  { name: 'Rachel Zain', post: 'Marketing Head', img: img2 },
  { name: 'Harvey Spector', post: 'Founder - CEO', img: img2 }
];
const bgImage =
  'https://img.freepik.com/premium-photo/group-diverse-business-people-working-together-having-meeting_695793-1294.jpg?w=740';
const followUsBgImage =
  'https://img.freepik.com/free-photo/medium-shot-happy-friends-city-lifestyle_23-2149003092.jpg?w=740&t=st=1696797907~exp=1696798507~hmac=c08e950643c7663e37536816ac061374c21ed589da241ab0a03108bdedada5a5';
const About = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="w-full bg-cover bg-fixed bg-center bg-no-repeat "
      >
        <div className="flex h-[320px] w-full items-center justify-center backdrop-brightness-50 md:h-[440px]">
          <div className="text-4xl font-bold text-white md:text-5xl">About Us</div>
        </div>
        <WhoWeAre />
      </div>

      <div
        style={{ backgroundImage: `url(${followUsBgImage})` }}
        className="w-full bg-cover bg-fixed bg-no-repeat "
      >
        <OurTeam TeamData={TeamData} />
        <FollowUs />
        <ChooseUs bgColor="white" />
      </div>
    </>
  );
};

export default About;
