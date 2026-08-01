'use client';

import { JSX, ReactNode, RefObject, useEffect, useState } from 'react';

export type ResumeSection = {
  id: string;
  title: string;
};

export type ResumeData = {
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
  themeColorHex: string;
};

type TemplateProps = {
  resumeData: ResumeData;
  sections: ResumeSection[];
  currentColor: string;
  skillsList?: string[];
  sectionContent: Record<string, ReactNode>;
};

export function ClassicTemplate({
  resumeData,
  sections,
  currentColor,
  sectionContent,
}: TemplateProps) {
  return (
    <div className='bg-[repeating-linear-gradient(#FFFFFF_0_27px,#FBFAF5_27px_28px)] px-11 py-10'>
      <div
        className='mb-5 border-b-2 pb-4'
        style={{ borderColor: currentColor }}
      >
        <div className='text-[26px] font-extrabold text-ink'>
          {resumeData.name}
        </div>

        <div className='mt-1 text-sm font-bold' style={{ color: currentColor }}>
          {resumeData.title}
        </div>

        <div className='mt-3 flex flex-wrap gap-4 text-xs text-ink-soft'>
          {resumeData.email && (
            <span className='flex items-center gap-1.5'>
              <svg
                className='size-3.5 stroke-ink-soft'
                viewBox='0 0 24 24'
                fill='none'
                strokeWidth='2'
              >
                <path d='M4 4h16v16H4z' />
                <path d='M4 6l8 6 8-6' />
              </svg>
              {resumeData.email}
            </span>
          )}

          {resumeData.phone && (
            <span className='font-mono flex items-center gap-1.5'>
              <svg
                className='size-3.5 stroke-ink-soft'
                viewBox='0 0 24 24'
                fill='none'
                strokeWidth='2'
              >
                <path d='M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7 12.4 12.4 0 0 0 .7 2.8 2 2 0 0 1-.4 2.2L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.2-.4c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.6 2z' />
              </svg>
              {resumeData.phone}
            </span>
          )}

          {resumeData.location && <span>{resumeData.location}</span>}
        </div>
      </div>

      {sections.map((section) => (
        <div key={section.id} className='mb-5'>
          <div
            className='mb-3 flex items-center gap-2 border-b pb-1 text-sm font-bold'
            style={{
              borderColor: currentColor,
              color: currentColor,
            }}
          >
            <span
              className='size-2 rounded-xs'
              style={{ backgroundColor: currentColor }}
            />
            <span>{section.title}</span>
          </div>

          {sectionContent[section.id]}
        </div>
      ))}
    </div>
  );
}

export function ModernTemplate({
  resumeData,
  sections,
  currentColor,
  skillsList = [],
  sectionContent,
}: TemplateProps) {
  return (
    <div className='flex min-h-[1120px]'>
      <div
        className='w-[32%] p-6 text-white transition-colors duration-300'
        style={{ backgroundColor: currentColor }}
      >
        <div className='mb-6 flex justify-center'>
          <div className='size-24 rounded-full border-4 border-white/40 bg-white/20' />
        </div>

        <div className='space-y-2 border-b border-white/30 pb-6 text-xs leading-relaxed'>
          {resumeData.email && (
            <div className='break-all'>{resumeData.email}</div>
          )}
          {resumeData.phone && <div>{resumeData.phone}</div>}
          {resumeData.location && <div>{resumeData.location}</div>}
        </div>

        <div className='mt-6'>
          <div className='mb-4 text-base font-bold'>مهارت‌ها</div>

          <div className='space-y-3'>
            {skillsList.map((skill) => (
              <div key={skill}>
                <div className='mb-1 text-xs font-semibold'>{skill}</div>
                <div className='h-1.5 w-full overflow-hidden rounded-full bg-white/30'>
                  <div className='h-full w-[85%] bg-white' />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-[68%] p-10'>
        <div className='mb-8 border-b border-border pb-5'>
          <div className='text-3xl font-extrabold text-ink'>
            {resumeData.name}
          </div>

          <div
            className='mt-2 text-lg font-bold'
            style={{ color: currentColor }}
          >
            {resumeData.title}
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.id} className='mb-8'>
            <div
              className='mb-4 text-lg font-bold'
              style={{ color: currentColor }}
            >
              {section.title}
            </div>

            {sectionContent[section.id]}
          </div>
        ))}
      </div>
    </div>
  );
}

export function CreativeTemplate({
  resumeData,
  sections,
  currentColor,
  sectionContent,
}: TemplateProps) {
  return (
    <div>
      <div
        className='px-10 py-8 text-white transition-colors duration-300'
        style={{ backgroundColor: currentColor }}
      >
        <div className='text-4xl font-extrabold'>{resumeData.name}</div>

        <div className='mt-2 text-lg font-medium opacity-90'>
          {resumeData.title}
        </div>
      </div>

      <div className='px-10 py-8'>
        <div className='mb-8 flex flex-wrap gap-5 text-sm text-ink-soft border-b border-border pb-4'>
          {resumeData.email && <span>{resumeData.email}</span>}
          {resumeData.phone && <span>{resumeData.phone}</span>}
          {resumeData.location && <span>{resumeData.location}</span>}
        </div>

        {sections.map((section) => (
          <div key={section.id} className='mb-8'>
            <div
              className='mb-4 inline-flex rounded-full px-4 py-1 text-sm font-bold text-white shadow-xs'
              style={{ backgroundColor: currentColor }}
            >
              {section.title}
            </div>

            <div className='rounded-2xl border border-border bg-paper-alt p-5 overflow-clip'>
              {sectionContent[section.id]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResumePreviewRenderer({
  selectedTemplate,
  resumeData,
  sections,
  currentColor,
  skillsList = [],
  sectionContent,
  previewRef,
}: TemplateProps & {
  selectedTemplate: number;
  previewRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={previewRef}
      className='sticky top-6 self-start  border border-border bg-white rounded-xl shadow-md'
    >
      {selectedTemplate === 0 && (
        <>
          <div className='h-4 border-b border-dashed border-border bg-[radial-gradient(circle,_#F6F3EC_3px,_transparent_3.5px)] bg-[length:16px_16px] bg-[position:8px_center]' />
          <ClassicTemplate
            resumeData={resumeData}
            sections={sections}
            currentColor={currentColor}
            sectionContent={sectionContent}
          />
        </>
      )}

      {selectedTemplate === 1 && (
        <ModernTemplate
          resumeData={resumeData}
          sections={sections}
          currentColor={currentColor}
          skillsList={skillsList}
          sectionContent={sectionContent}
        />
      )}

      {selectedTemplate === 2 && (
        <CreativeTemplate
          resumeData={resumeData}
          sections={sections}
          currentColor={currentColor}
          sectionContent={sectionContent}
        />
      )}
    </div>
  );
}

export default function ResumeTemplates(): JSX.Element {
  const [curTemplate, setCurTemplate] = useState(0);
  useEffect(() => {
    const savedTemplate = localStorage.getItem('kaqaz_resume_template');
    if (savedTemplate) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurTemplate(Number(savedTemplate));
    }
  }, []);

  const handleTemplateSelect = (index: number) => {
    setCurTemplate(index);
    localStorage.setItem('kaqaz_resume_template', String(index));
  };

  const border = (index: number) =>
    curTemplate === index
      ? 'border-2 border-gold-dark ring-4 ring-teal/10 shadow-lg scale-[1.01]'
      : 'border border-transparent shadow-md hover:shadow-lg hover:-translate-y-1 opacity-90 hover:opacity-100';

  return (
    <>
      <div
        className={`bg-white rounded-2xl p-6 relative cursor-pointer transition-all duration-300 ease-out ${border(0)}`}
        onClick={() => handleTemplateSelect(0)}
      >
        {curTemplate === 0 && (
          <div className='absolute -top-4 right-6 bg-gold text-gold-dark text-sm font-bold px-3 py-1 rounded-full shadow-sm'>
            پرکاربردترین
          </div>
        )}

        <div className='aspect-[1/1.41] bg-paper-alt border border-border rounded-xl p-5 mb-6 overflow-hidden flex flex-col'>
          <div className='text-center font-extrabold text-ink text-sm mb-0.5'>
            پویا سپاس‌گذار
          </div>
          <div className='text-center text-[11px] font-semibold text-teal mb-2'>
            برنامه‌نویس فرانت‌اند
          </div>
          <div className='h-[1px] w-full bg-border mb-3'></div>
          <div className='space-y-2.5'>
            <div className='flex items-center gap-1 text-[8px] font-bold text-ink'>
              <span className='size-1 bg-teal rounded-sm'></span>
              تجربه کاری
            </div>
            <div className='space-y-1.5'>
              <div className='h-[4px] w-full bg-border rounded-sm'></div>
              <div className='h-[4px] w-2/3 bg-border rounded-sm'></div>
            </div>
            <div className='flex items-center gap-1 text-[8px] font-bold text-ink'>
              <span className='size-1 bg-teal rounded-sm'></span>
              مهارت‌ها
            </div>
            <div className='h-[4px] w-2/3 bg-border rounded-sm'></div>
          </div>
        </div>
        <SelectButton
          curTemplate={curTemplate}
          index={0}
          onSelect={handleTemplateSelect}
        />
      </div>

      <div
        className={`bg-white rounded-2xl p-6 relative cursor-pointer transition-all duration-300 ease-out ${border(1)}`}
        onClick={() => handleTemplateSelect(1)}
      >
        <div className='aspect-[1/1.41] bg-paper-alt border border-border rounded-xl mb-6 overflow-hidden flex flex-row gap-3'>
          <div className='w-1/3 border-l border-border bg-coral pl-2 flex flex-col gap-2 p-4 items-center'>
            <div className='size-8 rounded-full bg-border mb-1'></div>
            <div className='h-[3px] w-full bg-border rounded-sm'></div>
            <div className='h-[3px] w-4/5 bg-border rounded-sm'></div>
            <div className='h-[3px] w-5/6 bg-border rounded-sm'></div>
            <div className='text-[7px] font-bold text-ink mt-1'>مهارت‌ها</div>
            <div className='h-[3px] w-full bg-border rounded-full overflow-hidden'>
              <div className='h-full bg-coral/50 w-[85%]'></div>
            </div>
            <div className='h-[3px] w-full bg-border rounded-full overflow-hidden'>
              <div className='h-full bg-coral/50 w-[60%]'></div>
            </div>
            <div className='h-[3px] w-full bg-border rounded-full overflow-hidden'>
              <div className='h-full bg-coral/50 w-[70%]'></div>
            </div>
          </div>
          <div className='w-2/3 flex flex-col gap-2 p-4'>
            <div>
              <div className='font-extrabold text-ink text-sm'>
                پویا سپاس‌گذار
              </div>
              <div className='text-[11px] font-semibold text-coral'>
                برنامه‌نویس فرانت‌اند
              </div>
            </div>
            <div className='space-y-1.5'>
              <div className='text-[8px] font-bold text-ink'>تجربه کاری</div>
              <div className='h-[3px] w-full bg-border rounded-sm'></div>
              <div className='h-[3px] w-2/3 bg-border rounded-sm'></div>
            </div>
            <div className='space-y-1.5'>
              <div className='text-[8px] font-bold text-ink'>تحصیلات</div>
              <div className='h-[3px] w-2/3 bg-border rounded-sm'></div>
            </div>
          </div>
        </div>

        <SelectButton
          curTemplate={curTemplate}
          index={1}
          onSelect={handleTemplateSelect}
        />
      </div>

      <div
        className={`bg-white rounded-2xl p-6 relative flex flex-col cursor-pointer transition-all duration-300 ease-out ${border(2)}`}
        onClick={() => handleTemplateSelect(2)}
      >
        <div className='aspect-[1/1.41] bg-paper-alt border border-border rounded-xl p-4 mb-6 overflow-hidden flex flex-col'>
          <div className='bg-gold p-3 -mx-4 -mt-4 mb-3 flex flex-col gap-0.5 text-gold-dark'>
            <div className='font-extrabold text-sm'>پویا سپاس‌گذار</div>
            <div className='text-[11px] opacity-90'>برنامه‌نویس فرانت‌اند</div>
          </div>
          <div className='flex flex-col gap-3 px-1'>
            <div className='space-y-1.5'>
              <div className='text-[8px] font-bold text-ink'>تجربه کاری</div>
              <div className='h-[3px] w-full bg-border rounded-sm'></div>
              <div className='h-[3px] w-[55%] bg-border rounded-sm'></div>
            </div>
            <div className='space-y-1.5'>
              <div className='text-[8px] font-bold text-ink'>تحصیلات</div>
              <div className='h-[3px] w-[65%] bg-border rounded-sm'></div>
            </div>
            <div className='flex gap-1 mt-1'>
              <div className='h-3 w-8 bg-teal-light rounded-full'></div>
              <div className='h-3 w-8 bg-teal-light rounded-full'></div>
              <div className='h-3 w-8 bg-teal-light rounded-full'></div>
            </div>
          </div>
        </div>

        <SelectButton
          curTemplate={curTemplate}
          index={2}
          onSelect={handleTemplateSelect}
        />
      </div>
    </>
  );
}

function SelectButton({
  curTemplate,
  onSelect,
  index,
}: {
  curTemplate: number;
  onSelect: (index: number) => void;
  index: number;
}) {
  return (
    <div className='flex items-center justify-between mt-auto pt-4 border-t border-border/50'>
      <span className='font-bold text-ink'>
        {index === 0 ? 'کلاسیک' : index === 1 ? 'مدرن' : 'خلاقانه'}
      </span>
      <button
        type='button'
        className={`text-white text-sm font-bold px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ease-out transform active:scale-95 hover:shadow-md ${
          curTemplate === index
            ? 'bg-gold-dark shadow-sm scale-105'
            : 'bg-ink hover:bg-ink-soft hover:-translate-y-0.5'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(index);
        }}
      >
        {curTemplate === index ? 'انتخاب شد' : 'انتخاب'}
      </button>
    </div>
  );
}
