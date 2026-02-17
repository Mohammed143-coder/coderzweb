const SectionTitle = ({
  title,
  paragraph,
  width = "900px",
  center,
  mb = "40px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`reveal w-full text-gray-500 ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed md:text-lg ">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
