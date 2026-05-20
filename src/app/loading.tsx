import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-(--black)">
      <DotLottieReact src="/assets/lottie/loading.lottie" loop autoplay className="w-40 h-40" />
    </div>
  );
}
