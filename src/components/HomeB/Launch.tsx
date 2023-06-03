import Countdown from '@/components/Countdown';

export default function Launch() {
  const endDate = new Date('2023-06-30T00:00:00');
  return (
    <section className="bg-black py-12 md:py-24">
      <div className="container max-w-6xl">
        <div className="flex w-full items-center justify-center">
          <h2 className="w-64 text-center font-roc text-3xl md:text-4xl md:leading-[3rem]">
            La{' '}
            <span className="rounded-xl bg-primary px-2 pb-1 pt-2 text-black">
              culture
            </span>{' '}
            à portée de <span className="text-primary">clic</span> !
          </h2>
        </div>
        <div className="flex items-center justify-center gap-20">
          <div className="hidden md:block">
            <svg
              width="153"
              height="97"
              viewBox="0 0 153 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M152.5 86.3865L92.0125 95.4686M147.194 53.4348L0.500004 40.4371M152.5 28.8249L51.6131 2.31891"
                stroke="#F4F4F4"
                strokeWidth="3"
              />
            </svg>
          </div>
          <Countdown endDate={endDate} />
          <div className="hidden md:block">
            <svg
              width="153"
              height="97"
              viewBox="0 0 153 97"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 86.3865L60.9875 95.4686M5.80583 53.4348L152.5 40.4371M0.5 28.8249L101.387 2.31891"
                stroke="#F4F4F4"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
