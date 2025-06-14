//fake reviews of users
import CardFour from "../cards/CardFour";

const LandingReview = () => {
  return (
    <div className="w-full px-6 py-12">
      <h1 className="text-3xl mb-10 font-bold text-center">What Students Are Saying</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        <CardFour
          image=""
          message="CUNYConnect has made it so much easier to meet other students."
          name=""
        />
        <CardFour
          image=""
          message="I love the event discovery feature! It helped me a lot."
          name=""
        />
        <CardFour
          image=""
          message="Being able to message students across schools is awesome!"
          name=""
        />
        <CardFour
          image=""
          message="The academic tools helped me organize my classes better."
          name=""
        />
        <CardFour
          image=""
          message="I found a great club that matches my interests!"
          name=""
        />
        <CardFour
          image=""
          message="CUNYConnect keeps me in the loop with all events happening."
          name=""
        />
        <CardFour
          image=""
          message="Easy to use and very student-friendly interface."
          name=""
        />
        <CardFour
          image=""
          message="I finally feel part of a wider CUNY community."
          name=""
        />
        <CardFour
          image=""
          message="Highly recommend for new students joining CUNY!"
          name=""
        />
      </div>
    </div>
  );
};

export default LandingReview;
