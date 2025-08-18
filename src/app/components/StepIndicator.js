// 'use client'
// // components/StepIndicator.tsx
// import { useRouter } from "next/router";

// const pages = ["/contact"];

// export default function StepIndicator() {
//   const router = useRouter();
//   const currentIndex = pages.indexOf(router.pathname);

//   return (
//     <div className="flex items-center gap-2">
//       {pages.map((_, index) => (
//         <div
//           key={index}
//           className={`h-2 w-2 rounded-full transition-all duration-300
//             ${index === currentIndex ? "bg-[#0F172A] w-6" : "bg-gray-400"}
//           `}
//         />
//       ))}
//     </div>
//   );
// }