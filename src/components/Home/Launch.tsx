import Countdown from '@/components/Countdown';

export default function Launch() {
  const endDate = new Date('2023-06-30T00:00:00');
  return (
    <section className="pb-12 pt-24 md:pb-16 md:pt-32">
      <div className="container max-w-6xl">
        <div className="flex w-full items-center justify-center">
          <h2 className="w-64 text-center font-roc text-3xl md:text-4xl md:leading-[3rem]">
            La{' '}
            <span className="rounded-lg bg-primary px-2 pb-1 pt-2 text-black">
              culture
            </span>{' '}
            à portée de <span className="text-primary">clic</span> !
          </h2>
        </div>
        <div className="flex items-center justify-center gap-20">
          <div className="launch-svg-left hidden md:block"></div>
          <Countdown endDate={endDate} />
          <div className="launch-svg-right hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
