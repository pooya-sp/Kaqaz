"use client";

import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { BuilderControls } from "../_components/builder_controls";
import {
  ResumeData,
  ResumePreviewRenderer,
  ResumeSection,
} from "../_components/resume_templates";
import { DEFAULT_RESUME_DATA, DEFAULT_SECTIONS } from "../data";

export default function BuilderPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [sections, setSections] = useState<ResumeSection[]>(DEFAULT_SECTIONS);
  const [resumeData, setResumeData] = useState<ResumeData>(DEFAULT_RESUME_DATA);
  const [hydrated, setHydrated] = useState(false);

  async function generateResumePdfBlob(element: HTMLElement): Promise<Blob> {
    await document.fonts.ready;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;

      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);

      heightLeft -= pageHeight;
    }

    return pdf.output("blob");
  }

  async function handleGeneratePdf() {
    if (!previewRef.current) return;

    const newTab = window.open("", "_blank");

    const blob = await generateResumePdfBlob(previewRef.current);

    const url = URL.createObjectURL(blob);

    if (newTab) {
      newTab.location.href = url;
    }
  }

  useEffect(() => {
    try {
      const savedResumeData = localStorage.getItem("kaqaz_resume_data");
      const savedSections = localStorage.getItem("kaqaz_resume_sections");

      if (savedResumeData) {
        setResumeData({
          ...DEFAULT_RESUME_DATA,
          ...JSON.parse(savedResumeData),
        });
      }

      if (savedSections) {
        setSections(JSON.parse(savedSections));
      }

      const savedTemplate = localStorage.getItem("kaqaz_resume_template");

      if (savedTemplate) {
        setSelectedTemplate(Number(savedTemplate));
      }
    } catch (e) {
      console.error("Failed to parse saved resume data", e);
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("kaqaz_resume_data", JSON.stringify(resumeData));
  }, [resumeData, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("kaqaz_resume_sections", JSON.stringify(sections));
  }, [sections, hydrated]);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem("kaqaz_resume_template", String(selectedTemplate));
  }, [selectedTemplate, hydrated]);

  const updateField = (field: keyof ResumeData, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const moveSection = (draggedId: string, targetId: string) => {
    const updated = [...sections];

    const draggedIndex = updated.findIndex((s) => s.id === draggedId);

    const targetIndex = updated.findIndex((s) => s.id === targetId);

    if (draggedIndex === -1 || targetIndex === -1) return;

    const [draggedItem] = updated.splice(draggedIndex, 1);

    updated.splice(targetIndex, 0, draggedItem);

    setSections(updated);
  };

  const skillsList = useMemo(() => {
    return resumeData.skillsInput
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }, [resumeData.skillsInput]);

  const currentColor = resumeData.themeColorHex || "#0f766e";

  const sectionContent = useMemo(
    () => ({
      experience: (
        <div className="mb-5">
          <div className="flex items-baseline justify-between">
            <span className="text-[13.5px] font-bold">
              {resumeData.title}

              {resumeData.company && (
                <>
                  <span className="mx-2">·</span>

                  <span className="font-medium" style={{ color: currentColor }}>
                    {resumeData.company}
                  </span>
                </>
              )}
            </span>

            {(resumeData.startDate || resumeData.endDate) && (
              <span className="text-[11px] text-ink-soft">
                {resumeData.startDate} — {resumeData.endDate}
              </span>
            )}
          </div>

          <ul className="mt-2 mr-4 space-y-2 text-[12.5px] leading-8">
            {resumeData.experienceDescription1 && (
              <li className="relative list-disc pl-2">
                {resumeData.experienceDescription1}
              </li>
            )}

            {resumeData.experienceDescription2 && (
              <li className="relative list-disc pl-2">
                {resumeData.experienceDescription2}
              </li>
            )}
          </ul>
        </div>
      ),

      education: (
        <div className="mb-5">
          <div className="flex items-baseline justify-between">
            <span className="text-[13.5px] font-bold">{resumeData.degree}</span>

            {resumeData.university && (
              <span className="text-[12px] text-ink-soft">
                {resumeData.university}
              </span>
            )}
          </div>
        </div>
      ),

      skills: (
        <div className="mb-5 flex flex-wrap gap-2">
          {skillsList.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-border bg-paper-alt px-3 py-1 text-[12px] font-medium text-ink"
            >
              {skill}
            </span>
          ))}
        </div>
      ),

      projects: (
        <div className="mb-5 space-y-3">
          {resumeData.project1Title && (
            <div>
              <div className="text-[13px] font-bold text-ink">
                {resumeData.project1Title}
              </div>

              {resumeData.project1Desc && (
                <div className="text-[12px] text-ink-soft mt-0.5">
                  {resumeData.project1Desc}
                </div>
              )}
            </div>
          )}

          {resumeData.project2Title && (
            <div>
              <div className="text-[13px] font-bold text-ink">
                {resumeData.project2Title}
              </div>

              {resumeData.project2Desc && (
                <div className="text-[12px] text-ink-soft mt-0.5">
                  {resumeData.project2Desc}
                </div>
              )}
            </div>
          )}
        </div>
      ),
    }),
    [resumeData, skillsList, currentColor],
  );

  return (
    <div className="min-h-screen bg-paper text-ink" dir="rtl">
      <div className="border-b border-border bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className="size-7 bg-teal transition-transform group-hover:scale-105"
                style={{
                  clipPath: "polygon(0 0,100% 0,100% 100%,20% 100%,0 80%)",
                }}
              ></div>

              <div className="font-bold text-lg text-ink">کاغذ</div>
            </Link>

            <Link
              href="/samples"
              className="mr-4 text-xs font-semibold text-ink-soft hover:text-ink transition-colors"
            >
              نمونه رزومه‌ها
            </Link>
          </div>

          <button
            onClick={handleGeneratePdf}
            className="bg-ink hover:bg-ink-soft text-gold font-bold px-4 py-2 rounded-lg text-sm transition-all shadow-sm"
          >
            دانلود PDF رزومه
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl p-6">
        <div className="mb-6 rounded-2xl border border-border bg-white p-4 shadow-xs">
          <div className="mb-3 text-xs font-bold text-ink-soft">
            انتخاب قالب کلی رزومه:
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSelectedTemplate(0)}
              className={`flex-1 min-w-[140px] rounded-xl border p-3 text-center text-xs font-bold transition-all ${
                selectedTemplate === 0
                  ? "border-teal bg-teal/10 text-teal"
                  : "border-border bg-paper-alt hover:bg-white text-ink-soft"
              }`}
            >
              قالب ۱: کلاسیک
            </button>

            <button
              type="button"
              onClick={() => setSelectedTemplate(1)}
              className={`flex-1 min-w-[140px] rounded-xl border p-3 text-center text-xs font-bold transition-all ${
                selectedTemplate === 1
                  ? "border-coral bg-coral/10 text-coral"
                  : "border-border bg-paper-alt hover:bg-white text-ink-soft"
              }`}
            >
              قالب ۲: مدرن
            </button>

            <button
              type="button"
              onClick={() => setSelectedTemplate(2)}
              className={`flex-1 min-w-[140px] rounded-xl border p-3 text-center text-xs font-bold transition-all ${
                selectedTemplate === 2
                  ? "border-gold bg-gold/10 text-gold-dark"
                  : "border-border bg-paper-alt hover:bg-white text-ink-soft"
              }`}
            >
              قالب ۳: خلاقانه
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <BuilderControls
            resumeData={resumeData}
            sections={sections}
            currentColor={currentColor}
            draggingId={draggingId}
            setDraggingId={setDraggingId}
            updateField={updateField}
            moveSection={moveSection}
          />

          <ResumePreviewRenderer
            selectedTemplate={selectedTemplate}
            resumeData={resumeData}
            sections={sections}
            currentColor={currentColor}
            skillsList={skillsList}
            sectionContent={sectionContent}
            previewRef={previewRef}
          />
        </div>
      </div>
    </div>
  );
}
