import Steps from "./Steps";

export default function StepSection() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <h2 className="font-extrabold text-4xl w-[700px] tracking-tighter mb-8">
        From Design to Completion – Crafting Innovative & Sustainable Spaces.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Steps />
      </div>
    </div>
  );
}
