import { OrderWithProducts } from "@/src/types";
import { formatCurrency } from "@/src/utils";

type OrderItemListProps = {
  order: OrderWithProducts;
};

const OrdrerItemList = ({ order }: OrderItemListProps) => {
  return (
    <>
      <section
        aria-labelledby="summary-heading"
        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4 shadow-lg"
      >
        <p className="text-2xl font-black text-amber-800">
          Cliente:{" "}
          <span className="font-semibold italic text-black text-xl">
            {order.name}
          </span>
        </p>
        <p className="text-2xl font-black text-amber-800">
          Teléfono:{" "}
          <span className="font-semibold italic text-black text-xl">
            {order.table}
          </span>
        </p>
        <p className="text-lg font-black uppercase">
          Detalle del Pedido:
        </p>
        <dl className="space-y-4 bg-gray-100 p-3 rounded-lg">
          {order.orderProducts.map((product) => (
            <div
              key={product.productId}
              className="flex items-center gap-2 border-gary-200 pt-4"
            >
              <dt className="flex items-center">
                <span className="font-bold">
                  ({product.quantity}) {""}
                </span>
              </dt>
              <dd className="italic font-semibold">{product.product.name}</dd>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="font-black text-xl text-amber-500">Total Abonado: </dt>
            <dd className="text-xl font-bold">{formatCurrency(order.total)}</dd>
          </div>
        </dl>
      </section>
    </>
  );
};

export default OrdrerItemList;
