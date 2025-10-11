import { PaymentFormInputs, PaymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

const PaymentForm = ({
  setPaymentForm,
}: {
  setPaymentForm: (data: PaymentFormInputs) => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentFormInputs>({
    resolver: zodResolver(PaymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {};
  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handlePaymentForm)}
    >
      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardHolder"
          className="text-xs text-gray-500 font-medium"
        >
          Name on card
        </label>
        <input
          className="border-b border-gray-200 outline-none text-sm"
          type="text"
          id="cardHolder"
          placeholder="Angel Doe"
          {...register("cardHolder")}
        />
        {errors.cardHolder && (
          <p className="text-xs text-red-600">{errors.cardHolder.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="cardNumber"
          className="text-xs text-gray-500 font-medium"
        >
          Card number
        </label>
        <input
          className="border-b border-gray-200 outline-none text-sm"
          type="text"
          id="cardNumber"
          placeholder="1234567891234567"
          {...register("cardNumber")}
        />
        {errors.cardNumber && (
          <p className="text-xs text-red-600">{errors.cardNumber.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="expirationDate"
          className="text-xs text-gray-500 font-medium"
        >
          Expiration date
        </label>
        <input
          className="border-b border-gray-200 outline-none text-sm"
          type="text"
          id="expirationDate"
          placeholder="01/27"
          {...register("expirationDate")}
        />
        {errors.expirationDate && (
          <p className="text-xs text-red-600">
            {errors.expirationDate.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="cvv" className="text-xs text-gray-500 font-medium">
          CVV
        </label>
        <input
          className="border-b border-gray-200 outline-none text-sm"
          type="text"
          id="cvv"
          placeholder="123"
          {...register("cvv")}
        />
        {errors.cvv && (
          <p className="text-xs text-red-600">{errors.cvv.message}</p>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Image src="/klarna.png" alt="" width={50} height={25} />
        <Image src="/cards.png" alt="" width={50} height={25} />
        <Image src="/stripe.png" alt="" width={50} height={25} />
      </div>

      <button
        //temporary
        onClick={() => router.push("/")}
        type="submit"
        className="w-full cursor-pointer p-2 gap-2 bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white rounded-lg flex items-center justify-center"
      >
        Checkout <ShoppingCart className="w-3 h-3" />
      </button>
    </form>
  );
};

export default PaymentForm;
