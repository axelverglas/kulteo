import Countdown from '@/components/Countdown';

export default function Launch() {
  const endDate = new Date('2023-06-30T00:00:00');
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-16">
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
        <Countdown endDate={endDate} />
      </div>
    </section>
  );
}