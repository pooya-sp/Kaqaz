import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-paper min-h-screen'>
      <div className='w-2/3 mx-auto'>
        <nav
          id='nav'
          className='flex   text-ink-soft items-center py-6 text-lg'
        >
          <div className='flex gap-3 items-center'>
            <div
              className='size-8 bg-teal'
              style={{
                clipPath: 'polygon(0 0,100% 0,100% 100%,20% 100%,0 80%)',
              }}
            ></div>
            <div className='font-bold text-ink'>کاغذ</div>
          </div>
        </nav>

        <div id='hero' className='flex py-24 w-full items-center'>
          <div className='text-ink w-2/3'>
            <h1 className='font-bold text-5xl'>
              رزومه‌ای که <span className='text-teal'>درست</span> خوانده می‌شود
            </h1>
            <p className='mt-8 max-w-2/3 text-ink-soft'>
              یک ابزار ساده برای ساختن رزومه فارسی و راست‌به‌چپ. پیش‌نمایش زنده،
              چند قالب آماده، و خروجی PDF با یک کلیک؛ بدون نیاز به ثبت‌نام.
            </p>
            <div className='flex mt-8 gap-4 font-bold'>
              <Link
                href='/templates'
                className='bg-ink text-white px-8 py-4 hover:bg-ink/90 transition-colors'
              >
                شروع رایگان
              </Link>
              <Link
                href='/samples'
                className='text-ink border border-border px-8 py-4 hover:bg-white/50 transition-colors'
              >
                دیدن نمونه
              </Link>
            </div>
          </div>
          <HeroVisual />
        </div>

        <div id='features' className='py-20 border-t border-border'>
          <div className='text-center max-w-xl mx-auto mb-16'>
            <div className='text-teal font-bold text-sm tracking-wider mb-2'>
              ویژگی‌ها
            </div>
            <h2 className='text-3xl font-bold text-ink'>
              هرچی که برای یک رزومه خوب لازمه
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='bg-white p-8 border border-border  shadow-sm hover:shadow-md transition-shadow'>
              <div className='text-teal mb-4'>
                <svg
                  className='size-8'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z' />
                  <circle cx='12' cy='12' r='3' />
                </svg>
              </div>
              <h4 className=' font-bold text-ink mb-2'>پیش‌نمایش زنده</h4>
              <p className='text-ink-soft leading-relaxed  text-sm'>
                هر چیزی که تایپ می‌کنی همون لحظه توی رزومه نهایی دیده می‌شه.
              </p>
            </div>

            <div className='bg-white p-8 border border-border  shadow-sm hover:shadow-md transition-shadow'>
              <div className='text-teal mb-4'>
                <svg
                  className='size-8'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </div>
              <h4 className=' font-bold text-ink mb-2'>
                جابه‌جایی آسان بخش‌ها
              </h4>
              <p className='text-ink-soft leading-relaxed text-sm'>
                ترتیب بخش‌های رزومه رو با کشیدن و رها کردن تغییر بده.
              </p>
            </div>

            <div className='bg-white p-8 border border-border  shadow-sm hover:shadow-md transition-shadow'>
              <div className='text-teal mb-4'>
                <svg
                  className='size-8'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <rect x='4' y='4' width='16' height='16' rx='1' />
                  <path d='M4 9h16' />
                </svg>
              </div>
              <h4 className=' font-bold text-ink mb-2'>راست‌به‌چپ واقعی</h4>
              <p className='text-ink-soft leading-relaxed  text-sm'>
                طراحی‌شده برای فارسی، نه ترجمه یک قالب انگلیسی.
              </p>
            </div>

            <div className='bg-white p-8 border border-border  shadow-sm hover:shadow-md transition-shadow'>
              <div className='text-teal mb-4'>
                <svg
                  className='size-8'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path d='M12 3v13m0 0l-4-4m4 4l4-4M4 21h16' />
                </svg>
              </div>
              <h4 className=' font-bold text-ink mb-2'>خروجی فوری PDF</h4>
              <p className='text-ink-soft leading-relaxed  text-sm'>
                یک کلیک تا فایل نهایی و آماده ارسال برای کارفرما.
              </p>
            </div>
          </div>
        </div>

        {/* Templates Preview Section */}
        <div className='py-20 border-t border-border'>
          <div className='text-center max-w-xl mx-auto mb-16'>
            <div className='text-teal font-bold text-sm tracking-wider mb-2'>
              قالب‌ها
            </div>
            <h2 className='text-3xl font-bold text-ink'>
              چند قالب آماده، همه قابل تغییر
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <TemplateCard cardName='کلاسیک' color='bg-ink/20' />
            <TemplateCard cardName='مدرن' color='bg-teal/20' />
            <TemplateCard cardName='خلاقانه' color='bg-gold/20' />
          </div>
        </div>
      </div>
      {/* Final CTA Section */}

      <div className='bg-ink py-16 text-center'>
        <h2 className='text-3xl font-bold  mb-6'>
          رزومه بعدیت رو همین حالا بساز
        </h2>
        <Link
          href={'/templates'}
          className='bg-gold text-ink-soft font-bold px-8 py-4 hover:bg-ink/90 transition-colors shadow-lg shadow-ink/10'
        >
          شروع رایگان
        </Link>
      </div>

      {/* Footer Section */}
      <footer className='py-4 flex justify-center items-center text-center text-ink-soft text-sm'>
        کاغذ — یک پروژه شخصی
      </footer>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className='relative h-[340px] w-1/3' dir='rtl'>
      {/* back card 2 - furthest back */}
      <div
        className='absolute right-5 top-5 z-0 h-[340px] w-[280px] rotate-6
                   border border-border bg-surface p-[22px] opacity-55'
      />

      {/* back card 1 - middle */}
      <div
        className='absolute right-[100px] top-[14px] z-10 h-[340px] w-[280px] -rotate-[7deg]
                   border border-border bg-surface p-[22px] opacity-75'
      />

      {/* front card - the actual resume preview */}
      <div
        className='absolute right-[60px] top-0 z-20 h-[340px] w-[280px]
                   border border-border bg-surface p-[22px]'
      >
        <div className='text-[15px] font-extrabold text-ink'>
          پویا سپاس‌گذار
        </div>
        <div className='mt-0.5 text-[10px] font-semibold text-teal'>
          برنامه‌نویس فرانت‌اند
        </div>

        <div className='mt-4 h-[3px] w-[60px] bg-gold' />
        <div className='mt-3.5 h-[5px] w-4/5 bg-border' />
        <div className='mt-1.5 h-[5px] w-1/2 bg-border' />
        <div className='mt-1.5 h-[5px] w-4/5 bg-border' />
        <div className='mt-1.5 h-[5px] w-1/2 bg-border' />
      </div>
    </div>
  );
}
function TemplateCard({
  cardName,
  color,
}: {
  cardName: string;
  color: string;
}) {
  return (
    <div className='bg-white p-6 border border-border rounded-2xl shadow-sm hover:shadow-md transition-all group '>
      <div className='bg-paper-alt border border-border rounded-xl p-6 h-48 flex flex-col justify-between mb-4 group-hover:border-teal/30 transition-colors'>
        <div className={`h-3 w-1/2  rounded ${color}`}></div>
        <div className='space-y-2'>
          <div className='h-2 w-full bg-border rounded'></div>
          <div className='h-2 w-full bg-border rounded'></div>
          <div className='h-2 w-2/3 bg-border rounded'></div>
        </div>
      </div>
      <span className='font-bold text-ink group-hover:text-teal transition-colors'>
        {cardName}
      </span>
    </div>
  );
}
