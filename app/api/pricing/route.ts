import { NextResponse } from "next/server";

export async function GET() {
  const tiers = [
    {
      id: 1,
      title: "Initial Consultation",
      price: 0,
      description:
        "An initial meeting to discuss your project ideas, requirements, and scope.",
    },
    {
      id: 2,
      title: "Detailed Consultation and Planning",
      price: 2000,
      description:
        "In-depth discussions, preliminary designs, and planning services to outline the project's feasibility and direction.",
    },
    {
      id: 3,
      title: "Full Design and Architectural Plans",
      price: 100000,
      description:
        "Comprehensive design services, including detailed architectural plans, construction documents, and coordination throughout the project.​",
    },
  ];
  return NextResponse.json(tiers);
}
