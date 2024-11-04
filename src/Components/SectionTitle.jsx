/* eslint-disable react/prop-types */
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="pt-20 pb-14">
      <p className="text-[#D99904] my-4 text-center">---{subHeading}---</p>
      <h3 className="uppercase border-y-2 text-3xl border-slate-500 py-4 w-64 text-center mx-auto">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
