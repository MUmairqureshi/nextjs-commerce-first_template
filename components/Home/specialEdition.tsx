import { Button } from 'src/components/ui/button';
const SpecialEdition = () => {
  return (
    <div className=" flex w-full items-center bg-transparent backdrop-brightness-50">
      <div className="flex max-w-2xl flex-col gap-6 py-20 pl-10 text-white lg:py-32 lg:pl-28">
        <h2 className="font-mono text-2xl font-bold">Limited Time Offer</h2>
        <h1 className="font-sans text-3xl font-bold">Special Edition</h1>
        <p className="font-sans text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <h2 className="font-mono text-2xl font-bold">Use Code OFF20 For 20% Discount</h2>
        <Button className="w-40" variant="secondary">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default SpecialEdition;
