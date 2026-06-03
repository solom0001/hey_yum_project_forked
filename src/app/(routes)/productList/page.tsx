import Nav from "@/app/components/utilityComponents/Header/Nav";
import ProductsComponent from "@/app/components/utilityComponents/Products/ProductsComponent";

export default function ProductsPage() {
  return (
    <div className="grid mb-16">
      <Nav page="shop" />
      <div className=" mt-(--mt_std)">
        <ProductsComponent text="Our product" />
      </div>
    </div>
  );
}
