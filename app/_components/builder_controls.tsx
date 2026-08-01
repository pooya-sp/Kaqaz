"use client";

import { ResumeData, ResumeSection } from "./resume_templates";

const COLOR_PRESETS = [
  { name: "فیروزه‌ای (Teal)", hex: "#0f766e" },
  { name: "مرجانی (Rose)", hex: "#e11d48" },
  { name: "طلایی (Gold)", hex: "#d97706" },
  { name: "نیلی (Indigo)", hex: "#312e81" },
  { name: "بنفش (Purple)", hex: "#7c3aed" },
  { name: "زمردی (Emerald)", hex: "#059669" },
  { name: "زغالی (Slate)", hex: "#334155" },
  { name: "مشکی (Dark)", hex: "#18181b" },
];

type ControlsProps = {
  resumeData: ResumeData;
  sections: ResumeSection[];
  currentColor: string;
  draggingId: string | null;
  setDraggingId: (id: string | null) => void;
  updateField: (field: keyof ResumeData, value: string) => void;
  moveSection: (draggedId: string, targetId: string) => void;
};

export function ColorCustomizer({
  currentColor,
  updateField,
}: {
  currentColor: string;
  updateField: (field: keyof ResumeData, value: string) => void;
}) {
  return (
    <div className="border border-border bg-white p-4 rounded-xl shadow-xs">
      <div className="mb-3 border-b border-border pb-2 flex items-center justify-between">
        <h3 className="text-[13px] font-bold text-teal flex items-center gap-2">
          <span
            className="size-3 rounded-full border border-black/10"
            style={{ backgroundColor: currentColor }}
          ></span>
          تغییر رنگ رزومه
        </h3>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {COLOR_PRESETS.map((preset) => (
            <button
              key={preset.hex}
              type="button"
              onClick={() => updateField("themeColorHex", preset.hex)}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                currentColor.toLowerCase() === preset.hex.toLowerCase()
                  ? "border-ink bg-ink/5 font-bold shadow-xs"
                  : "border-border hover:border-ink-soft bg-paper-alt"
              }`}
            >
              <span
                className="size-3.5 rounded-full border border-black/20"
                style={{ backgroundColor: preset.hex }}
              ></span>
              <span>{preset.name}</span>
            </button>
          ))}
        </div>

        <div className="pt-2 border-t border-border/60 flex items-center justify-between">
          <label className="text-xs font-semibold text-ink-soft flex items-center gap-2">
            انتخاب رنگ دلخواه پالت:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={currentColor}
              onChange={(e) => updateField("themeColorHex", e.target.value)}
              className="size-8 cursor-pointer rounded border border-border bg-transparent p-0.5"
            />
            <span className="text-xs font-mono text-ink-soft bg-paper-alt px-2 py-1 rounded border border-border">
              {currentColor.toUpperCase()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SectionReorder({
  sections,
  draggingId,
  setDraggingId,
  moveSection,
}: {
  sections: ResumeSection[];
  draggingId: string | null;
  setDraggingId: (id: string | null) => void;
  moveSection: (draggedId: string, targetId: string) => void;
}) {
  return (
    <div className="border border-border bg-white p-4 rounded-xl shadow-xs">
      <h3 className="mb-3 border-b border-border pb-2 text-[13px] font-bold text-teal">
        ترتیب بخش‌های رزومه (درگ و دراپ)
      </h3>

      <div className="space-y-2">
        {sections.map((section) => (
          <div
            key={section.id}
            draggable
            onDragStart={() => setDraggingId(section.id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (draggingId) moveSection(draggingId, section.id);
            }}
            className={`flex items-center justify-between border p-3 text-xs font-bold transition-all cursor-grab active:cursor-grabbing ${
              draggingId === section.id
                ? "border-teal bg-teal/10 opacity-60"
                : "border-border bg-paper-alt hover:bg-white"
            }`}
          >
            <span>{section.title}</span>
            <span className="text-ink-soft text-lg leading-none">⋮⋮</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResumeFormInputs({
  resumeData,
  updateField,
}: {
  resumeData: ResumeData;
  updateField: (field: keyof ResumeData, value: string) => void;
}) {
  return (
    <>
      {/* Personal Info */}
      <div className="border border-border bg-white p-4 rounded-xl shadow-xs">
        <h3 className="mb-3 border-b border-border pb-2 text-[13px] font-bold text-teal">
          ویرایش: اطلاعات شخصی
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              نام و نام خانوادگی
            </label>
            <input
              value={resumeData.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              عنوان شغلی
            </label>
            <input
              value={resumeData.title}
              onChange={(e) => updateField("title", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-ink-soft">ایمیل</label>
            <input
              value={resumeData.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
              dir="ltr"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              شماره تماس
            </label>
            <input
              value={resumeData.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
              dir="ltr"
            />
          </div>

          <div className="col-span-2">
            <label className="mb-1 block text-xs text-ink-soft">
              شهر / موقعیت مکانی
            </label>
            <input
              value={resumeData.location}
              onChange={(e) => updateField("location", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="border border-border bg-white p-4 rounded-xl shadow-xs">
        <h3 className="mb-3 border-b border-border pb-2 text-[13px] font-bold text-teal">
          ویرایش: سوابق شغلی
        </h3>

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs text-ink-soft">
                نام شرکت
              </label>
              <input
                value={resumeData.company}
                onChange={(e) => updateField("company", e.target.value)}
                className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs text-ink-soft">
                بازه زمانی (از - تا)
              </label>
              <div className="flex gap-1">
                <input
                  value={resumeData.startDate}
                  onChange={(e) => updateField("startDate", e.target.value)}
                  placeholder="شروع"
                  className="w-1/2 border border-border bg-paper-alt px-2 py-1.5 text-xs outline-none focus:border-teal rounded-lg"
                />
                <input
                  value={resumeData.endDate}
                  onChange={(e) => updateField("endDate", e.target.value)}
                  placeholder="پایان"
                  className="w-1/2 border border-border bg-paper-alt px-2 py-1.5 text-xs outline-none focus:border-teal rounded-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              توضیح مسئولیت‌ها (مورد اول)
            </label>
            <textarea
              value={resumeData.experienceDescription1}
              onChange={(e) =>
                updateField("experienceDescription1", e.target.value)
              }
              rows={2}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              توضیح مسئولیت‌ها (مورد دوم)
            </label>
            <textarea
              value={resumeData.experienceDescription2}
              onChange={(e) =>
                updateField("experienceDescription2", e.target.value)
              }
              rows={2}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="border border-border bg-white p-4 rounded-xl shadow-xs">
        <h3 className="mb-3 border-b border-border pb-2 text-[13px] font-bold text-teal">
          ویرایش: تحصیلات
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              رشته و مقطع تحصیلی
            </label>
            <input
              value={resumeData.degree}
              onChange={(e) => updateField("degree", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              نام دانشگاه / موسسه
            </label>
            <input
              value={resumeData.university}
              onChange={(e) => updateField("university", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="border border-border bg-white p-4 rounded-xl shadow-xs">
        <h3 className="mb-3 border-b border-border pb-2 text-[13px] font-bold text-teal">
          ویرایش: مهارت‌ها
        </h3>

        <div>
          <label className="mb-1 block text-xs text-ink-soft">
            مهارت‌ها (با ویرگول جدا کنید)
          </label>
          <input
            value={resumeData.skillsInput}
            onChange={(e) => updateField("skillsInput", e.target.value)}
            className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            dir="ltr"
          />
        </div>
      </div>

      {/* Projects */}
      <div className="border border-border bg-white p-4 rounded-xl shadow-xs">
        <h3 className="mb-3 border-b border-border pb-2 text-[13px] font-bold text-teal">
          ویرایش: پروژه‌ها
        </h3>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              عنوان پروژه اول
            </label>
            <input
              value={resumeData.project1Title}
              onChange={(e) => updateField("project1Title", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              توضیح پروژه اول
            </label>
            <input
              value={resumeData.project1Desc}
              onChange={(e) => updateField("project1Desc", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              عنوان پروژه دوم
            </label>
            <input
              value={resumeData.project2Title}
              onChange={(e) => updateField("project2Title", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-ink-soft">
              توضیح پروژه دوم
            </label>
            <input
              value={resumeData.project2Desc}
              onChange={(e) => updateField("project2Desc", e.target.value)}
              className="w-full border border-border bg-paper-alt px-3 py-1.5 text-sm outline-none focus:border-teal rounded-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function BuilderControls({
  resumeData,
  sections,
  currentColor,
  draggingId,
  setDraggingId,
  updateField,
  moveSection,
}: ControlsProps) {
  return (
    <div className="space-y-6">
      <ColorCustomizer currentColor={currentColor} updateField={updateField} />
      <SectionReorder
        sections={sections}
        draggingId={draggingId}
        setDraggingId={setDraggingId}
        moveSection={moveSection}
      />
      <ResumeFormInputs resumeData={resumeData} updateField={updateField} />
    </div>
  );
}
