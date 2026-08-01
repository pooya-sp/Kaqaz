'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ResumeSample {
  id: string;
  title: string;
  role: string;
  category: 'tech' | 'design' | 'management' | 'marketing';
  templateIndex: number; // 0: Classic, 1: Modern, 2: Creative
  themeHex: string; // Hex code for live color customizer in builder
  themeColor: {
    primary: string;
    accent: string;
    bgBadge: string;
    textBadge: string;
    sidebarBg?: string;
    bannerBg?: string;
  };
  data: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    company: string;
    startDate: string;
    endDate: string;
    experienceDescription1: string;
    experienceDescription2: string;
    degree: string;
    university: string;
    skillsInput: string;
    project1Title: string;
    project1Desc: string;
    project2Title: string;
    project2Desc: string;
    themeColorHex?: string;
  };
}

const SAMPLE_RESUMES: ResumeSample[] = [
  {
    id: 'sample-1',
    title: 'رزومه ارشد فرانت‌اند (قالب کلاسیک)',
    role: 'توسعه‌دهنده فرانت‌اند',
    category: 'tech',
    templateIndex: 0,
    themeHex: '#0f766e', // Teal
    themeColor: {
      primary: 'text-teal-700',
      accent: 'bg-teal-700',
      bgBadge: 'bg-teal-50',
      textBadge: 'text-teal-700 border-teal-200',
    },
    data: {
      name: 'امیرحسین رضایی',
      title: 'توسعه‌دهنده ارشد فرانت‌اند (Senior Frontend Developer)',
      email: 'a.rezaei@example.com',
      phone: '۰۹۱۲۳۴۵۶۷۸۹',
      location: 'تهران، ایران',
      company: 'شرکت اسنپ (Snapp)',
      startDate: 'فروردین ۱۴۰۱',
      endDate: 'اکنون',
      experienceDescription1:
        'بازطراحی معماری مایکروفرانت‌اند اپلیکیشن وب و بهبود ۷۰ درصدی سرعت لود اولیه صفحات اصلی با Next.js 14',
      experienceDescription2:
        'رهبری تیم ۶ نفره فرانت‌اند، پیاده‌سازی تست‌های سرتاسری E2E و استانداردسازی دیزاین سیستم',
      degree: 'کارشناسی ارشد مهندسی نرم‌افزار',
      university: 'دانشگاه صنعتی شریف',
      skillsInput:
        'React, Next.js, TypeScript, TailwindCSS, Redux Toolkit, GraphQL, Jest',
      project1Title: 'سامانه مدیریت ناوگان هوشمند',
      project1Desc:
        'داشبورد مانیتورینگ آنلاین بیش از ۱۰۰ هزار سفیر با قابلیت کشف لایو موقعیت جغرافیایی',
      project2Title: 'کتابخانه کامپوننت UI اختصاصی',
      project2Desc:
        'طراحی و انتشار پکیج کامپوننت‌های دسترسی‌پذیر (Accessible) بر پایه Tailwind CSS',
      themeColorHex: '#0f766e',
    },
  },
  {
    id: 'sample-2',
    title: 'رزومه طراح ارشد محصول (قالب مدرن)',
    role: 'طراح UI/UX و محصول',
    category: 'design',
    templateIndex: 1,
    themeHex: '#e11d48', // Coral / Rose
    themeColor: {
      primary: 'text-rose-600',
      accent: 'bg-rose-600',
      bgBadge: 'bg-rose-50',
      textBadge: 'text-rose-600 border-rose-200',
      sidebarBg: 'bg-rose-600',
    },
    data: {
      name: 'سارا حسینی',
      title: 'طراح ارشد محصول (Senior Product Designer)',
      email: 'sara.design@example.com',
      phone: '۰۹۱۲۹۸۷۶۵۴۳',
      location: 'اصفهان، ایران',
      company: 'گروه دیجی‌کالا',
      startDate: 'مهر ۱۳۹۹',
      endDate: 'اکنون',
      experienceDescription1:
        'بهینه‌سازی قیف خرید کاربران (Checkout Flow) و افزایش ۱۵ درصدی نرخ تبدیل (Conversion Rate)',
      experienceDescription2:
        'اجرای تست‌های کاربرپذیری (Usability Testing) و تدوین استراتژی تجربه کاربری بخش فروشندگان',
      degree: 'کارشناسی طراحی صنعتی',
      university: 'دانشگاه هنر تهران',
      skillsInput:
        'Figma, User Research, Wireframing, Prototyping, Design Systems, Usability Testing',
      project1Title: 'بازطراحی اپلیکیشن سوپرمارکت آنلاین',
      project1Desc:
        'کاهش زمان فرایند سفارش‌دهی از ۴ دقیقه به ۱.۵ دقیقه بر اساس تحقیقات کاربر محور',
      project2Title: 'دیزاین سیستم یکپارچه موبایل و وب',
      project2Desc:
        'ایجاد کتابخانه کامل UI Kit شامل ۱۲۰+ کامپوننت تعاملی و مستندات اتود دیزاین',
      themeColorHex: '#e11d48',
    },
  },
  {
    id: 'sample-3',
    title: 'رزومه مدیر محصول (قالب خلاقانه)',
    role: 'مدیر محصول (Product Manager)',
    category: 'management',
    templateIndex: 2,
    themeHex: '#d97706', // Gold / Amber
    themeColor: {
      primary: 'text-amber-700',
      accent: 'bg-amber-500',
      bgBadge: 'bg-amber-50',
      textBadge: 'text-amber-700 border-amber-200',
      bannerBg: 'bg-amber-500 text-amber-950',
    },
    data: {
      name: 'محمدامین کاظمی',
      title: 'مدیر ارشد محصول (Senior Product Manager)',
      email: 'm.kazemi@example.com',
      phone: '۰۹۳۵۱۱1۲۲۳۳',
      location: 'تهران، ایران',
      company: 'کافه بازار',
      startDate: 'خرداد ۱۴۰۰',
      endDate: 'اکنون',
      experienceDescription1:
        'مدیریت نقشه راه (Roadmap) سرویس پرداخت و رشد ۴۰ درصدی حجم تراکنش‌های ماهانه',
      experienceDescription2:
        'هماهنگی میان تیم‌های فنی، مارکتینگ و پشتیبانی جهت ارائه موفق ۵ فیچر کلیدی جدید',
      degree: 'کارشناسی ارشد مدیریت کسب‌وکار (MBA)',
      university: 'دانشگاه تهران',
      skillsInput:
        'Product Strategy, Agile/Scrum, OKRs, Data Analytics, Jira, Product Discovery',
      project1Title: 'سیستم هوشمند پیشنهاددهی محصول',
      project1Desc:
        'افزایش ۲۰ درصدی ارزش سبد خرید با الگوریتم‌های پیشنهاد متقاطع (Cross-selling)',
      project2Title: 'داشبورد تحلیل رفتاری کاربران',
      project2Desc:
        'طراحی شاخص‌های کلیدی عملکرد (KPIs) برای رصد دقیق ریزش کاربران (Churn Rate)',
      themeColorHex: '#d97706',
    },
  },
  {
    id: 'sample-4',
    title: 'رزومه متخصص دیجیتال مارکتینگ (قالب کلاسیک)',
    role: 'مدیر دیجیتال مارکتینگ',
    category: 'marketing',
    templateIndex: 0,
    themeHex: '#7c3aed', // Purple
    themeColor: {
      primary: 'text-purple-700',
      accent: 'bg-purple-700',
      bgBadge: 'bg-purple-50',
      textBadge: 'text-purple-700 border-purple-200',
    },
    data: {
      name: 'نیلوفر عباسی',
      title: 'مدیر دیجیتال مارکتینگ و رشد (Growth Marketer)',
      email: 'niloofar.mkt@example.com',
      phone: '۰۹۱۹۸۸۸۷۷۶۶',
      location: 'شیراز، ایران',
      company: 'شرکت علی‌بابا (Alibaba.ir)',
      startDate: 'دی ۱۳۹۹',
      endDate: 'اکنون',
      experienceDescription1:
        'طراحی و اجرای کمپین‌های تبلیغاتی عملکردی (Performance Marketing) با بازگشت سرمایه ۳۰۰٪',
      experienceDescription2:
        'ارتقای رتبه سئو برای کلمات کلیدی پرجستجوی حوزه گردشگری و افزایش ۲ برابری ورودی ارگانیک',
      degree: 'کارشناسی مدیریت بازرگانی',
      university: 'دانشگاه شیراز',
      skillsInput:
        'SEO, Google Analytics, Performance Marketing, Content Strategy, A/B Testing, Email Marketing',
      project1Title: 'کمپین نوروزی جذب کاربر',
      project1Desc:
        'جذب بیش از ۵۰ هزار کاربر جدید در بازه ۳ هفته‌ای با بهینه‌سازی کانال‌های جذب',
      project2Title: 'استراتژی بازاریابی محتوایی',
      project2Desc:
        'تولید و بهینه‌سازی بیش از ۲۰۰ مقاله تخصصی و رشد ۵۰ درصدی ترافیک وبلاگ',
      themeColorHex: '#7c3aed',
    },
  },
  {
    id: 'sample-5',
    title: 'رزومه مهندس ارشد بک‌اند (قالب مدرن)',
    role: 'توسعه‌دهنده بک‌اند و داده',
    category: 'tech',
    templateIndex: 1,
    themeHex: '#312e81', // Indigo Dark
    themeColor: {
      primary: 'text-indigo-900',
      accent: 'bg-indigo-900',
      bgBadge: 'bg-indigo-50',
      textBadge: 'text-indigo-900 border-indigo-200',
      sidebarBg: 'bg-indigo-900',
    },
    data: {
      name: 'علیرضا نوری',
      title: 'مهندس ارشد بک‌اند (Senior Backend & Data Engineer)',
      email: 'a.nouri@example.com',
      phone: '۰۹۱۳۵۵۵۴۴۳۳',
      location: 'مشهد، ایران',
      company: 'شرکت تپسی (Tapsi)',
      startDate: 'آبان ۱۳۹۸',
      endDate: 'اکنون',
      experienceDescription1:
        'توسعه سرویس‌های توزیع‌شده با پاسخ‌دهی زیر ۵۰ میلی‌ثانیه برای پاسخگویی به ۱۰ میلیون درخواست روزانه',
      experienceDescription2:
        'پیاده‌سازی پایپ‌لاین داده‌های حجیم (Big Data) و یکپارچه‌سازی دیتابیس‌های PostgreSQL و Redis',
      degree: 'کارشناسی علوم کامپیوتر',
      university: 'دانشگاه فردوسی مشهد',
      skillsInput:
        'Node.js, Go, Python, PostgreSQL, Redis, Docker, Kubernetes, Microservices',
      project1Title: 'موتور تخصیص هوشمند درخواست‌ها',
      project1Desc:
        'کاهش ۱۵ درصدی زمان انتظار کاربران با بهینه‌سازی کوئری‌های الگوریتم تطبیق داده',
      project2Title: 'مهاجرت معماری به میکروخدمات',
      project2Desc:
        'تبدیل سیستم یکپارچه (Monolith) به سرویس‌های مستقل با پایداری ۹۹.۹٪',
      themeColorHex: '#312e81',
    },
  },
];

export default function SamplesPage() {
  const router = useRouter();

  const handleUseSample = (sample: ResumeSample) => {
    try {
      localStorage.setItem('kaqaz_resume_data', JSON.stringify(sample.data));
      localStorage.setItem(
        'kaqaz_resume_template',
        String(sample.templateIndex),
      );
      router.push('/builder');
    } catch (error) {
      console.error('Failed to save sample data:', error);
    }
  };

  return (
    <div className='bg-paper min-h-screen p-6 md:p-12 text-ink' dir='rtl'>
      <div className='max-w-6xl mx-auto'>
        {/* Topbar */}
        <div className='flex flex-row-reverse items-center justify-between mb-10 pb-6 border-b border-border/60'>
          <Link href='/' className='flex items-center gap-2 group'>
            <div
              className='size-7 bg-teal transition-transform group-hover:scale-105'
              style={{
                clipPath: 'polygon(0 0,100% 0,100% 100%,20% 100%,0 80%)',
              }}
            ></div>
            <div className='font-bold text-xl text-ink'>کاغذ</div>
          </Link>

          <div className='flex items-center gap-4'>
            <Link
              href='/templates'
              className='text-sm font-semibold text-ink-soft hover:text-ink transition-colors'
            >
              قالب‌ها
            </Link>
            <Link
              href='/builder'
              className='bg-ink text-gold hover:bg-ink-soft text-sm font-bold px-4 py-2 rounded-lg transition-all'
            >
              ساخت رزومه
            </Link>
          </div>
        </div>

        {/* Heading */}
        <div className='mb-10 text-center md:text-right'>
          <div className='inline-block bg-teal/10 text-teal font-semibold text-sm px-3 py-1 rounded-full mb-3'>
            نمونه رزومه‌های آماده
          </div>
          <h1 className='text-3xl md:text-4xl font-extrabold text-ink mb-3'>
            نمونه رزومه‌های واقعی ساخته شده در کاغذ
          </h1>
          <p className='text-ink-soft text-base md:text-lg max-w-2xl'>
            هر یک از این نمونه‌ها دقیقاً شبیه رزومه‌ای است که در سازنده
            می‌سازید. می‌توانید روی «استفاده از رزومه» کلیک کنید تا با اطلاعات
            آماده وارد ویرایشگر شوید.
          </p>
        </div>

        {/* Grid of Resume Paper Samples */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {SAMPLE_RESUMES.map((sample) => (
            <div
              key={sample.id}
              className='bg-white rounded-2xl border border-border p-5 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1'
            >
              {/* Header Title & Role Badge */}
              <div className='flex items-center justify-between mb-4 pb-3 border-b border-border/60'>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-md border ${sample.themeColor.textBadge} ${sample.themeColor.bgBadge}`}
                >
                  {sample.role}
                </span>
                <span className='text-[11px] font-semibold text-ink-soft'>
                  قالب:{' '}
                  {sample.templateIndex === 0
                    ? 'کلاسیک'
                    : sample.templateIndex === 1
                      ? 'مدرن'
                      : 'خلاقانه'}
                </span>
              </div>

              {/* Realistic Mini Resume Paper Canvas */}
              <div
                className='aspect-[1/1.41] bg-paper-alt border border-border rounded-xl p-4 mb-5 overflow-hidden shadow-inner cursor-pointer relative group-hover:border-gold transition-colors flex flex-col'
                onClick={() => handleUseSample(sample)}
              >
                <ResumePaperPreview sample={sample} />
              </div>

              {/* Action Button */}
              <div className='mt-auto pt-3 border-t border-border/60 flex items-center'>
                <button
                  type='button'
                  onClick={() => handleUseSample(sample)}
                  className='w-full bg-ink hover:bg-ink-soft text-gold text-xs font-bold py-3 px-4 rounded-xl transition-all cursor-pointer text-center shadow-sm hover:shadow'
                >
                  استفاده و ویرایش این رزومه
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sub-component: Mini Paper Card Preview
function ResumePaperPreview({ sample }: { sample: ResumeSample }) {
  const { data, templateIndex, themeHex } = sample;
  const skillsList = data.skillsInput.split(',').slice(0, 4);

  if (templateIndex === 0) {
    // Classic Template Preview
    return (
      <div className='h-full flex flex-col text-[9px] bg-white p-3 rounded-lg border border-border/50 text-ink'>
        <div className='border-b-2 pb-2 mb-2' style={{ borderColor: themeHex }}>
          <div className='font-extrabold text-ink text-[12px] leading-snug'>
            {data.name}
          </div>
          <div
            className='font-semibold text-[10px]'
            style={{ color: themeHex }}
          >
            {data.title}
          </div>
          <div className='text-[8px] text-ink-soft mt-1 flex flex-wrap gap-2'>
            <span>{data.email}</span>
            <span>•</span>
            <span>{data.location}</span>
          </div>
        </div>

        {/* Section 1: Work Experience */}
        <div className='mb-2'>
          <div
            className='font-bold flex items-center gap-1 border-b border-border pb-0.5 mb-1'
            style={{ color: themeHex }}
          >
            <span
              className='size-1.5 rounded-xs'
              style={{ backgroundColor: themeHex }}
            ></span>
            تجربه کاری
          </div>
          <div className='font-bold text-ink text-[8.5px]'>{data.company}</div>
          <div className='text-ink-soft text-[7.5px] line-clamp-2 leading-snug mt-0.5'>
            {data.experienceDescription1}
          </div>
        </div>

        {/* Section 2: Education */}
        <div className='mb-2'>
          <div
            className='font-bold flex items-center gap-1 border-b border-border pb-0.5 mb-1'
            style={{ color: themeHex }}
          >
            <span
              className='size-1.5 rounded-xs'
              style={{ backgroundColor: themeHex }}
            ></span>
            تحصیلات
          </div>
          <div className='font-bold text-ink text-[8.5px]'>{data.degree}</div>
          <div className='text-ink-soft text-[7.5px]'>{data.university}</div>
        </div>

        {/* Section 3: Skills */}
        <div className='mt-auto'>
          <div
            className='font-bold flex items-center gap-1 border-b border-border pb-0.5 mb-1'
            style={{ color: themeHex }}
          >
            <span
              className='size-1.5 rounded-xs'
              style={{ backgroundColor: themeHex }}
            ></span>
            مهارت‌ها
          </div>
          <div className='flex flex-wrap gap-1 mt-0.5'>
            {skillsList.map((skill, idx) => (
              <span
                key={idx}
                className='bg-paper-alt text-ink font-semibold px-1.5 py-0.5 rounded text-[7.5px] border border-border/60'
              >
                {skill.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (templateIndex === 1) {
    // Modern Sidebar Template Preview
    return (
      <div className='h-full flex flex-row text-[9px] bg-white rounded-lg border border-border/50 overflow-hidden -m-4'>
        {/* Sidebar */}
        <div
          className='w-1/3 text-white p-2.5 flex flex-col items-center text-center gap-1.5'
          style={{ backgroundColor: themeHex }}
        >
          <div className='size-7 rounded-full bg-white/30 border border-white/50 mb-0.5'></div>
          <div className='text-[8px] font-bold line-clamp-1 break-all'>
            {data.email}
          </div>
          <div className='text-[8px] opacity-90'>{data.location}</div>

          <div className='w-full border-t border-white/20 pt-1.5 mt-1 text-right'>
            <div className='font-bold text-[8px] mb-1 text-center'>
              مهارت‌ها
            </div>
            <div className='space-y-1'>
              {skillsList.slice(0, 3).map((skill, idx) => (
                <div
                  key={idx}
                  className='text-[7.5px] bg-white/20 px-1 py-0.5 rounded text-center truncate'
                >
                  {skill.trim()}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Body */}
        <div className='w-2/3 p-3 flex flex-col justify-between text-ink'>
          <div>
            <div className='font-extrabold text-ink text-[11px] leading-snug'>
              {data.name}
            </div>
            <div
              className='font-semibold text-[9.5px] mb-2'
              style={{ color: themeHex }}
            >
              {data.title}
            </div>

            <div className='mb-2'>
              <div
                className='font-bold text-[8.5px] mb-0.5'
                style={{ color: themeHex }}
              >
                تجربه کاری
              </div>
              <div className='font-bold text-[8px]'>{data.company}</div>
              <div className='text-ink-soft text-[7.5px] line-clamp-2 leading-snug'>
                {data.experienceDescription1}
              </div>
            </div>

            <div>
              <div
                className='font-bold text-[8.5px] mb-0.5'
                style={{ color: themeHex }}
              >
                تحصیلات
              </div>
              <div className='font-bold text-[8px]'>{data.degree}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // TemplateIndex === 2 (Creative Banner Template)
  return (
    <div className='h-full flex flex-col text-[9px] bg-white rounded-lg border border-border/50 overflow-hidden -m-4'>
      {/* Top Banner */}
      <div
        className='p-3.5 flex flex-col text-white'
        style={{ backgroundColor: themeHex }}
      >
        <div className='font-extrabold text-[12px] leading-tight'>
          {data.name}
        </div>
        <div className='text-[9.5px] font-medium opacity-90 mt-0.5'>
          {data.title}
        </div>
      </div>

      {/* Body */}
      <div className='p-3 flex-1 flex flex-col justify-between text-ink'>
        <div className='text-[7.5px] text-ink-soft border-b border-border pb-1.5 mb-2 flex gap-2'>
          <span>{data.email}</span>
          <span>•</span>
          <span>{data.location}</span>
        </div>

        <div className='mb-2'>
          <div
            className='font-bold px-2 py-0.5 rounded-full text-[8px] inline-block mb-1 text-white'
            style={{ backgroundColor: themeHex }}
          >
            تجربه کاری
          </div>
          <div className='font-bold text-[8.5px]'>{data.company}</div>
          <div className='text-ink-soft text-[7.5px] line-clamp-2 leading-snug mt-0.5'>
            {data.experienceDescription1}
          </div>
        </div>

        <div>
          <div
            className='font-bold px-2 py-0.5 rounded-full text-[8px] inline-block mb-1 text-white'
            style={{ backgroundColor: themeHex }}
          >
            تحصیلات
          </div>
          <div className='font-bold text-[8.5px]'>{data.degree}</div>
        </div>
      </div>
    </div>
  );
}
