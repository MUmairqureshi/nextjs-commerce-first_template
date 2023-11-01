import FollowUs from 'components/About/FollowUs';
import OurTeam from 'components/About/OurTeam';
import WhoWeAre from 'components/About/WhoWeAre';
import ChooseUs from 'components/Home/ChooseUs';
import { getCollectionProducts } from 'lib/shopify';

const About = async () => {
  const AboutProducts = await getCollectionProducts({
    collection: 'abouuts'
  });
  const FollowProducts = await getCollectionProducts({
    collection: 'follow-us'
  });
  const TeamProducts = await getCollectionProducts({
    collection: 'our-team'
  });

  const bgImage = AboutProducts[0]?.featuredImage.url;
  const followUsBgImage = FollowProducts[0]?.featuredImage.url;
  return (
    <>
      <div
        style={{ backgroundImage: `url(${collectionProduct[0]?.featuredImage.url})` }}
        className="w-full bg-cover bg-fixed bg-center bg-no-repeat "
      >
        <div className="flex h-[320px] w-full items-center justify-center backdrop-brightness-50 md:h-[440px]">
          <div className="text-4xl font-bold text-white md:text-5xl">{AboutProducts[0]?.title}</div>
        </div>
        <WhoWeAre data={AboutProducts[1]} />
      </div>

      <div
        style={{ backgroundImage: `url(${collectionProduct[0]?.featuredImage.url})` }}
        className="w-full bg-cover bg-fixed bg-no-repeat "
      >
        <OurTeam TeamData={TeamProducts} />
        <FollowUs title={FollowProducts[0]?.title} />
        <ChooseUs bgColor="white" />
      </div>
    </>
  );
};

export default About;
