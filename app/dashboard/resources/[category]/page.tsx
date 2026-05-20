"use client";
import { useParams } from "next/navigation";

const sampleResourcesByCategory: Record<string, Array<{ title: string; desc: string; tagColor: string }>> = {
  math: [
    { title: "Solve for x in the equation 3x + 7 = 22", desc: "From y = ln(4-x), we get 4-x = eʸ, therefore x = 4 - eʸ", tagColor: "#ef4444" },
    { title: "Solve for x in the equation 3x + 7 = 22", desc: "From y = ln(4-x), we get 4-x = eʸ, therefore x = 4 - eʸ", tagColor: "#ef4444" },
    { title: "Solve for x in the equation 3x + 7 = 22", desc: "From y = ln(4-x), we get 4-x = eʸ, therefore x = 4 - eʸ", tagColor: "#ef4444" },
    { title: "Solve for x in the equation 3x + 7 = 22", desc: "From y = ln(4-x), we get 4-x = eʸ, therefore x = 4 - eʸ", tagColor: "#ef4444" },
  ],
  statistics: [
    { title: "Calculate standard deviation of a dataset", desc: "Find the mean of the data set. Subtract the mean from each data value and square the result. Find the mean of those squared differences.", tagColor: "#3b82f6" },
    { title: "Find the probability of independent events", desc: "For independent events A and B, P(A and B) = P(A) * P(B). Example: rolling two dice.", tagColor: "#3b82f6" },
  ],
  calculus: [
    { title: "Find the limit of a rational function", desc: "Evaluate limit as x approaches c of (x^2 - c^2)/(x - c) by factoring out (x - c). Result is 2c.", tagColor: "#8b5cf6" },
    { title: "Power Rule of Integration", desc: "The integral of x^n dx is (x^(n+1))/(n+1) + C for any real number n != -1.", tagColor: "#8b5cf6" },
  ],
  physics: [
    { title: "Calculate Newton's Second Law force", desc: "Force is equal to the change in momentum per change in time. For constant mass, Force = mass * acceleration.", tagColor: "#22c55e" },
    { title: "Kinematic equation for displacement", desc: "d = v_initial * t + 0.5 * a * t^2. Describes movement under constant acceleration.", tagColor: "#22c55e" },
  ],
  chemistry: [
    { title: "Balance chemical equations", desc: "Ensure that there are the same number of each type of atom on both sides of the chemical equation. Example: 2H2 + O2 -> 2H2O.", tagColor: "#eab308" },
    { title: "Ideal Gas Law calculation", desc: "PV = nRT. P is pressure, V is volume, n is number of moles, R is gas constant, T is temperature.", tagColor: "#eab308" },
  ],
  biology: [
    { title: "Describe stages of Mitosis", desc: "Stages: Prophase, Metaphase, Anaphase, Telophase. Cell division resulting in identical daughter cells.", tagColor: "#ec4899" },
    { title: "Understand Photosynthesis equation", desc: "6CO2 + 6H2O + Light -> C6H12O6 + 6O2. Plants convert light energy into chemical energy.", tagColor: "#ec4899" },
  ],
  economics: [
    { title: "Law of Supply and Demand", desc: "If demand increases and supply remains unchanged, a shortage occurs, leading to a higher equilibrium price.", tagColor: "#06b6d4" },
    { title: "Calculate Gross Domestic Product (GDP)", desc: "GDP = Consumption + Investment + Government Spending + (Exports - Imports).", tagColor: "#06b6d4" },
  ],
  literature: [
    { title: "Identify metaphorical imagery in Shakespeare", desc: "Analysis of the 'To be or not to be' monologue from Hamlet and its metaphorical meaning.", tagColor: "#f97316" },
    { title: "Contrast Protagonist and Antagonist development", desc: "Examining character arcs, conflicting motivations, and narrative functions in literature.", tagColor: "#f97316" },
  ],
  business: [
    { title: "Construct a SWOT analysis matrix", desc: "Strengths, Weaknesses, Opportunities, and Threats assessment for business strategic planning.", tagColor: "#14b8a6" },
    { title: "Explain time value of money", desc: "A dollar today is worth more than a dollar tomorrow due to potential earning capacity and inflation.", tagColor: "#14b8a6" },
  ],
  writing: [
    { title: "Structure an argumentative essay outline", desc: "Introduction with thesis, supporting body paragraphs with evidence, counterargument, and conclusion.", tagColor: "#6366f1" },
    { title: "Active vs Passive voice revision", desc: "Revise passive structures to active verbs to create direct, concise, and engaging academic writing.", tagColor: "#6366f1" },
  ],
};

export default function ResourceCategoryPage() {
  const params = useParams();
  const categoryParam = String(params?.category || "math").toLowerCase();

  const title = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1);
  const resources = sampleResourcesByCategory[categoryParam] || sampleResourcesByCategory.math;

  return (
    <div style={{ padding: "28px 32px" }}>
      <h2 style={{ color: "#ffffff", fontSize: "24px", fontWeight: 700, margin: "0 0 28px" }}>
        {title} - Equation
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {resources.map((item, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#111118",
              borderRadius: "14px",
              border: "1px solid rgba(255,255,255,0.06)",
              padding: "24px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(79,70,229,0.3)";
              e.currentTarget.style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.transform = "translateX(0)";
            }}
          >
            {/* Category Tag */}
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "14px",
                backgroundColor: `${item.tagColor}25`,
                color: item.tagColor,
                fontSize: "11px",
                fontWeight: 600,
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              {title}
            </span>

            <h3 style={{ color: "#ffffff", fontSize: "16px", fontWeight: 600, margin: "0 0 8px" }}>
              {item.title}
            </h3>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
