import CommonTitle from "./CommonTitle";

const Banner = ({ title, description }) => {
  return (
    <section className="pt-28 pb-12 px-4 bg-gradient-to-br from-white via-blue-50 to-blue-100 text-center">
      <CommonTitle title={title} description={description} />
    </section>
  );
};

export default Banner;
