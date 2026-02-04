import { useState } from "react";
import {
  PilesIcon,
  HerniaIcon,
  KidneyStoneIcon,
  CataractIcon,
  CircumcisionIcon,
  LasikIcon,
  VaricoseIcon,
  GallstoneIcon,
  AnalFistulaIcon,
  GynaecomastiaIcon,
  AnalFissureIcon,
  LipomaIcon,
  SebaceousIcon,
  PilonidalIcon,
  BreastLumpIcon,
  TurpIcon,
  HydroceleIcon,
  KneeIcon,
  HairTransplantIcon,
} from "./SurgeryIcons";

const SurgeriesHero = () => {
  const surgeries = [
    { name: "Piles", Icon: PilesIcon },
    { name: "Hernia Treatment", Icon: HerniaIcon },
    { name: "Kidney Stone", Icon: KidneyStoneIcon },
    { name: "Cataract", Icon: CataractIcon },
    { name: "Circumcision", Icon: CircumcisionIcon },
    { name: "Lasik", Icon: LasikIcon },
    { name: "Varicose Veins", Icon: VaricoseIcon },
    { name: "Gallstone", Icon: GallstoneIcon },
    { name: "Anal Fistula", Icon: AnalFistulaIcon },
    { name: "Gynaecomastia", Icon: GynaecomastiaIcon },
    { name: "Anal Fissure", Icon: AnalFissureIcon },
    { name: "Lipoma Removal", Icon: LipomaIcon },
    { name: "Sebaceous Cyst", Icon: SebaceousIcon },
    { name: "Pilonidal Sinus", Icon: PilonidalIcon },
    { name: "Lump in Breast", Icon: BreastLumpIcon },
    { name: "TURP", Icon: TurpIcon },
    { name: "Hydrocele", Icon: HydroceleIcon },
    { name: "Knee Replacement", Icon: KneeIcon },
    { name: "Hair Transplant", Icon: HairTransplantIcon },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    <div style={styles.wrapper}>
      <div style={styles.left}>
        <h2>Popular Surgeries</h2>

        <div style={styles.grid}>
          {surgeries.map((s, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                transform: hovered === i ? "scale(1.05)" : "scale(1)",
                boxShadow:
                  hovered === i
                    ? "0 8px 20px rgba(0,0,0,0.2)"
                    : "0 2px 6px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                borderRadius: "12px",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <s.Icon />
              <p style={styles.label}>{s.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    gap: "40px",
    alignItems: "flex-start",
  },
  left: {
    flex: 1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "30px",
    marginTop: "20px",
  },
  card: {
    textAlign: "center",
    cursor: "pointer",
    padding: "15px",
    backgroundColor: "#fff",
  },
  label: {
    marginTop: "8px",
    fontSize: "14px",
  },
};

export default SurgeriesHero;
