import Link from 'next/link';
import ResumeTemplates from '../_components/resume_templates';

export default function TemplatesPage() {
  return (
    <div className='bg-paper min-h-screen p-8 md:p-12 text-ink' dir='rtl'>
      <div className='max-w-5xl mx-auto'>
        {/* Topbar */}
        <div className='flex flex-row-reverse items-center justify-end mb-12'>
          <Link href={'/'} className='flex items-center gap-2'>
            <div
              className='size-6 bg-teal'
              style={{
                clipPath: 'polygon(0 0,100% 0,100% 100%,20% 100%,0 80%)',
              }}
            ></div>
            <div className='font-bold text-lg text-ink'>کاغذ</div>
          </Link>
        </div>

        {/* Heading */}
        <div className=' mb-16'>
          <h1 className='text-3xl md:text-4xl font-bold text-ink mb-4'>
            یک قالب انتخاب کن
          </h1>
          <p className='text-ink-soft text-lg'>
            هر وقت خواستی می‌تونی قالب رو از داخل ویرایشگر عوض کنی.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 m'>
          <ResumeTemplates />
        </div>
        <div className='w-full flex justify-center items-center'>
          <Link
            href='/builder'
            className='mt-20   pointer-cursor bg-ink text-gold px-8 rounded-md py-2 text-lg'
          >
            ویرایش
          </Link>
        </div>
      </div>
    </div>
  );
}
