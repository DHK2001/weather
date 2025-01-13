import Image from 'next/image';

function Loading() {

  return (
    <Image
        className="m-auto"
        src="/loading.svg"
        alt="loading"
        width={300}
        height={300}
    />
  );
}

export default Loading;