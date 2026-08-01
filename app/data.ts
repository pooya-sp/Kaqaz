import { ResumeData, ResumeSection } from './_components/resume_templates';

export interface ResumeSample {
  id: string;
  title: string;
  role: string;
  category: 'tech' | 'design' | 'management' | 'marketing';
  templateIndex: number;
  themeHex: string;
  themeColor: {
    primary: string;
    accent: string;
    bgBadge: string;
    textBadge: string;
    sidebarBg?: string;
    bannerBg?: string;
  };
  data: ResumeData;
}

export const DEFAULT_SECTIONS: ResumeSection[] = [
  { id: 'experience', title: 'سوابق شغلی' },
  { id: 'education', title: 'تحصیلات' },
  { id: 'skills', title: 'مهارت‌ها' },
  { id: 'projects', title: 'پروژه‌ها' },
];

export const DEFAULT_RESUME_DATA: ResumeData = {
  name: 'پویا سپاس‌گذار',
  title: 'برنامه‌نویس فرانت‌اند',
  email: 'pooyasepas40@gmail.com',
  phone: '-',
  location: 'همدان، ایران',
  company: 'شرکت پینو',
  startDate: 'مرداد ۱۴۰۳',
  endDate: 'اکنون',
  experienceDescription1:
    'پیاده‌سازی صفحات چت، اکسپلور، پروفایل و پنل کاربری با React و Next.js',
  experienceDescription2: '',
  degree: 'کارشناسی مهندسی کامپیوتر',
  university: 'دانشگاه آزاد',
  skillsInput: 'React, Next.js, TypeScript, Tailwind, Git',
  project1Title: 'پنل مدیریت فروشگاه',
  project1Desc: 'طراحی شده با Next.js و Tailwind',
  project2Title: '',
  project2Desc: '',
  themeColorHex: '#0f766e',
};

export const SAMPLE_RESUMES: ResumeSample[] = [
  {
    id: 'sample-1',
    title: 'رزومه ارشد فرانت‌اند (قالب کلاسیک)',
    role: 'توسعه‌دهنده فرانت‌اند',
    category: 'tech',
    templateIndex: 0,
    themeHex: '#0f766e',
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
    themeHex: '#e11d48',
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
    themeHex: '#d97706',
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
      phone: '۰۹۳۵۱۱۱۲۲۳۳',
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
    themeHex: '#7c3aed',
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
    themeHex: '#312e81',
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