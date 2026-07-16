"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  {
    label: "ABOUT EMI EMC",
    nav: "ABOUT EMI EMC",
    title: "ABOUT EMI EMC",
    content: (
      <>
        <p>
          Electromagnetic interference (EMI) can disrupt the performance of electrical systems, leading to operational inefficiencies, equipment malfunctions, and potential safety hazards. EMC ensures that all electrical components within a system operate without affecting or being affected by electromagnetic disturbances. Effective EMI/EMC management is crucial for:
        </p>
        <br />
        <p>Effective EMI/EMC management is crucial for:</p>
        <br />
        <p>
          • <span className="text-[#C02429]">Ensuring Operational Continuity</span> -
          Avoiding disruptions caused by electromagnetic interference.
        </p>
        <br />
        <p>
          • <span className="text-[#C02429]">Protecting Sensitive Equipment</span> - 
          Preventing damage to devices due to unregulated electromagnetic emissions.
        </p>
        <br />
        <p>
          • <span className="text-[#C02429]">Compliance with Standards</span> - 
          Compliance with Standards: Adhering to international regulations such as IEC 61000 and IEEE 299.
        </p>
        <br />
        <p>
          •{" "}
          <span className="text-[#C02429]">
            Optimizing System Performance
          </span>{" "}
          - Improving the efficiency and reliability of electrical systems.
        </p>
      </>
    ),
  },
  {
    label: "COMPLIANCE AND STANDARDS",
    nav: "COMPLIANCE\nAND STANDARDS",
    title: "COMPLIANCE AND STANDARDS",

        content: (
      <>
        <br/>
        <p>JEF ensures that all EMI/EMC studies meet or exceed international standards, including:</p>
        <br />
        <p>
          • IEC 61000 (Electromagnetic Compatibility Standards).
        </p>
        <br />
        <p>
          • IEEE 299 (Shielding Effectiveness of Enclosures).
        </p>
        <br />
        <p>
          • MIL-STD-461 (Control of Electromagnetic Interference).
        </p>
        <br />
        <p>
          • Local regulatory guidelines specific to project locations.
        </p>
      </>
    ),

    // subsections: [
    //   {
    //     tags: [
    //       "Fault Investigation and Analysis",
    //       "Electrical System Performance Evaluation",
    //       "Grounding and Lightning Protection System Assessment",
    //       "Power Quality Analysis",
    //       "Failure Mode Effect Analysis (FMEA)",
    //       "Corrective and Preventive Action Plans",
    //     ],
    //     tagDescriptions: [
    //       "• Detailed investigation of system failures, including equipment malfunctions, grounding issues, and power disruptions.\n\n• Comprehensive data collection and analysis to trace the origins of faults.",
    //       "• Evaluation of system components such as transformers, switchgear, and cables to assess performance.\n\n• Identification of weaknesses and inefficiencies affecting system reliability.",
    //       "• Analysis of grounding and lightning protection systems to identify vulnerabilities and improve safety.\n\n• Recommendations for optimizing protection systems to prevent recurring issues.",
    //       "• Investigating power quality issues, including voltage sags, harmonics, and transients, to determine their root causes.\n\n• Providing solutions to enhance power stability and prevent future disruptions.",
    //       "• Systematic assessment of potential failure modes and their effects on system performance.\n\n• Implementing proactive measures to mitigate risks and improve system resilience.",
    //       "• Development of detailed action plans to address identified root causes.\n\n• Implementation of preventive measures to avoid future occurrences of similar issues.",
    //     ],
    //   },
    // ],
  },
  {
    label: "INDUSTRY APPLICATIONS",
    nav: "INDUSTRY\nAPPLICATIONS",
    title: "INDUSTRY APPLICATIONS",
    content: (
      <>
        <p>Our EMI/EMC studies are tailored to meet the needs of various industries:</p>
        <br />
        <p>• Oil & Gas</p>
        <br />
        <p>• Railways</p>
        <br />
        <p>• Manufacturing</p>
        <br />
        <p>• Healthcare</p>
        <br />
        <p>• Data Centres and many more...</p>
        <br />
        <p>Get in touch with us to know more about how we can help address the concerns for your specific application.</p>
      </>
    ),
  },
  {
    label: "ABOUT AC INTERFERENCE STUDY",
    nav: "ABOUT AC\nINTERFERENCE STUDY",
    title: "ABOUT AC INTERFERENCE STUDY",
    content: (
      <>
        <p>
          We provide detailed software model and study for Interference to Pipeline due to Power Transmission Lines & Cables.
        </p>
        <br />
        <p>We Analyse</p>
        <br />
        <p>• Touch Potentials (Safety)</p>
        <br />
        <p>• Current Density (AC Corrosion)</p>
        <br />
        <p>• Coating Stress Voltage (Coating Damage) and more…</p>
      </>
    ),
  },
  {
    label: "COMPLIANCE AND STANDARDS FOR AC INTERFERENCE",
    nav: "COMPLIANCE AND STANDARDS FOR AC INTERFERENCE",
    title: "COMPLIANCE AND STANDARDS FOR AC INTERFERENCE",
    content: (
      <>
        <p>
          Applicable Standards/Codes (Page no.250/360 IOCL Tender Document)
        </p>
        <br />
        <p>• NACE SP 0104, The use of Coupons for Cathodic Protection Monitoring Applications</p>
        <br />
        <p>• IS 8062–Part II - Code of Practice for Cathodic Protection of Steel Structures - Underground Pipelines</p>
        <br />
        <p>• NACE SP 0169-Control of External Corrosion on Underground or Submerged Metallic Piping Systems</p>
        <br />
        <p>• ISO 18086 - Corrosion of Metals and Alloys - Determination of AC Corrosion - Protection Criteria.</p>
      </>
    ),
  },
];

const PROGRESS_DURATION = 15000;
const PROGRESS_INTERVAL = 50;

const DetailedContent = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeTags, setActiveTags] = useState<Record<number, number | undefined>>({});
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [restartKey, setRestartKey] = useState(0);

  useEffect(() => {
    if (isPaused || isManualPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (PROGRESS_INTERVAL / PROGRESS_DURATION) * 100;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [activePage, isPaused, isManualPaused, restartKey]);

  useEffect(() => {
    if (progress >= 100) {
      setActivePage((prev) => (prev + 1) % pages.length);
      setActiveTags({});
      setProgress(0);
    }
  }, [progress]);

  const handleTabClick = (index: number) => {
    if (index === activePage) {
      if (isManualPaused) {
        setIsManualPaused(false);
        setIsPaused(false);
      } else {
        setIsManualPaused(true);
      }
    } else {
      setIsManualPaused(false);
      setIsPaused(false);
      setActivePage(index);
      setActiveTags({});
      setProgress(0);
      setRestartKey((prev) => prev + 1);
    }
  };

  const page = pages[activePage];

  return (
    <section className="bg-[#161414] font-montserrat py-10 md:pt-16 md:pb-12 overflow-hidden min-h-[760px] flex flex-col">
      <div
        onMouseEnter={() => !isManualPaused && setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="section-container flex flex-col flex-1 gap-6 md:gap-8"
      >
        <motion.h2
          key={`title-${activePage}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#C02429] text-[20px] md:text-[26px] font-bold tracking-[1px] md:tracking-[1.49px] leading-[1.4] uppercase"
        >
          {page.title}
        </motion.h2>

        <div className="w-full relative z-20 flex-1">
          <motion.div
            key={`content-${activePage}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col max-w-[1400px]"
          >
                 {page.content &&
        React.Children.map(page.content.props.children, (child, i) => {
          if (React.isValidElement(child) && child.type === "p") {
            const element = child as React.ReactElement<{ children?: React.ReactNode }>;
            return (
              <p
                key={i}
                className="text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5] text-white text-justify"
              >
                {element.props.children}
              </p>
            );
          }

          return child;
        })}

          </motion.div>

          {(page as any).subsections?.map((sub, si) => (
            <div key={si} className="mt-8">
              <div className="flex flex-col gap-5">
                {sub.tags.map((tag, ti) => (
                  <button
                    key={ti}
                    onClick={() =>
                      setActiveTags((prev) => ({
                        ...prev,
                        [si]: prev[si] === ti ? undefined : ti,
                      }))
                    }
                    className="w-fit text-left text-white underline underline-offset-4 hover:text-[#C02429] transition-colors text-[16px] md:text-[18px] lg:text-[20px] font-semibold"
                  >
                    • {tag}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeTags[si] !== undefined && (
                  <motion.div
                    key={`desc-${activeTags[si]}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 18 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 bg-[#161414]  px-6 md:px-12 py-8"
                  >
                    <h3 className="text-[#C02429] text-[16px] md:text-[18px] lg:text-[20px] font-bold uppercase mb-5">
                      {sub.tags[activeTags[si] as number]}
                    </h3>
                    <p className="whitespace-pre-line text-white text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5]">
                      {sub.tagDescriptions[activeTags[si] as number]}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 pb-4">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))] md:grid-cols-5 gap-4 md:gap-10">
            {pages.map((tab, index) => {
              const isCurrent = activePage === index;

              return (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className="bg-none border-none cursor-pointer flex flex-col items-start w-full group transition-all duration-500"
                >
                  <div className="w-full h-[2px] bg-[#d4d0c8] mb-3 relative z-10">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-[#C02429]"
                      initial={{ width: 0 }}
                      animate={{
                        width: isCurrent
                          ? `${progress}%`
                          : activePage > index
                          ? "100%"
                          : "0%",
                      }}
                      transition={{ ease: "linear" }}
                    />
                  </div>

                  <span
                    className={`text-[12px] md:text-[18px] tracking-[1px] md:tracking-[2.5px] font-medium uppercase mt-1 transition-all duration-300 text-left whitespace-pre-line ${
                      isCurrent
                        ? "text-[#C02429]"
                        : "text-[#d4d0c8] group-hover:text-white"
                    }`}
                  >
                    {tab.nav}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedContent;
