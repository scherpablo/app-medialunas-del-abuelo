import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="flex justify-center my-5">
        <div className="relative w-40 h-40">
          <Image fill src={`/logo.png`} alt="imagen logo" priority={true} />
        </div>
      </div>
    </>
  );
};

export default Logo;
