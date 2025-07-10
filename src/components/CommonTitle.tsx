const CommonTitle = ({ title = "", description = "", className = "" }) => {
  return (
    <div className={`text-center max-w-2xl mx-auto mb-8 ${className}`}>
      <h1
        className="text-3xl sm:text-5xl font-semibold text-gray-900 mb-4 "
        data-aos="fade-up"
      >
        {title}
      </h1>
      <p
        className="text-base sm:text-xl text-gray-600 font-normal"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {description}
      </p>
    </div>
  );
};

export default CommonTitle;
