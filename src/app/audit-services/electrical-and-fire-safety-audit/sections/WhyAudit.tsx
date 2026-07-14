"use client";

import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    image: "/EFS/1.png",
    title: "COMPLIANCE",
    description:
      "Helps ensure compliance with relevant standards like CEA Regulations 2023, NEC 2023, NBC 2016, and more.",
  },
  {
    id: 2,
    image: "/EFS/2.png",
    title: "REDUCED FIRE RISK",
    description:
      "Identification and remediation of the electrical root causes that are responsible for 60% of fire incidents in India: overheating, insulation failure, overloading, short circuits.",
  },
  {
    id: 3,
    image: "/EFS/3.png",    
    title: "PERSONNEL SAFETY",
    description:
      "Helps in ensuring the safety of personnel against electrical and fire risks in the facility.",
  },
  {
    id: 4,
    image: "/EFS/6.png",
    title: "ASSET PROTECTION",
    description:
      "Early detection of insulation degradation, overheating, harmonics and power quality issues which may otherwise result in damage/failure of equipment.",
  },
  {
    id: 5,
    image: "/EFS/5.png",
    title: "INSURANCE READINESS",
    description:
      "Documented audit reports of periodic inspection for insurers.",
  },
  {
    id: 6,
    image: "/EFS/4.png",
    title: "PREVENTIVE MAINTENANCE PROGRAMME",
    description:
      "Asset-level PM schedule to extend asset life.",
  },
  {
    id: 7,
    image: "/EFS/7.png",
    title: "CERTIFIED STAFF",
    description:
      "Assessed, competent, documented.",
  },
  {
    id: 8,
    image: "/EFS/4.png",
    title: "JEF SAFETY CERTIFICATION",
    description:
      "Displayed where the people it protects can see it.",
  },
];

const duplicatedCards = [...cards, ...cards];

export default function WhyAudit() {
  return (
    <section className="w-full bg-[#232427] py-16 md:py-[72px] overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[24px] md:text-[32px] uppercase font-bold tracking-[4px] text-[#C02429]">
            WHAT THE AUDIT DELIVERS
          </h2>
        </motion.div>

        <div className="mt-12 md:mt-20 relative overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 50,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {duplicatedCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className="w-[300px] md:w-[420px] min-w-[300px] md:min-w-[420px] flex flex-col gap-4"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full aspect-[463/239] object-cover"
                />

                <h3 className="text-white uppercase text-[14px] md:text-[16px]">
                  {card.title}
                </h3>

                <p className="text-[#D0D0D0] text-[12px] md:text-[14px] leading-[1.7]">
                  {card.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
