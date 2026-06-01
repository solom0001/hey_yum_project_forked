import StepComp from "@/app/components/productionComponents/productionProcessComps/StepComp";
import Nav from "@/app/components/utilityComponents/Header/Nav";

export default function Contact() {
  return (
    <div className="grid">
      <Nav page="production" />
      <StepComp />
    </div>
  );
}
