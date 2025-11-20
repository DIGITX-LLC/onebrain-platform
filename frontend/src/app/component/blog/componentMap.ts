import dynamic from "next/dynamic";

export const componentMap: any = {
    details1: dynamic(() => import("@/app/component/about/BlogDetails"), {
    ssr: false,
  }),
  details2: dynamic(() => import("@/app/component/about/BlogDetailsOne"), {
    ssr: false,
  }),

  details3: dynamic(() => import("@/app/component/about/BlogDetailsTwo"), {
    ssr: false,
  }),

  details5: dynamic(() => import("@/app/component/about/BlogDetailsFive"), {
    ssr: false,
  }),
  
  details6: dynamic(() => import("@/app/component/about/BlogDetailsSix"), {
    ssr: false,
  }),
  
  details7: dynamic(() => import("@/app/component/about/BlogDetailsSeven"), {
    ssr: false,
  }),
   default: dynamic(() => import("@/app/component/blog/BlogDetail"), {
    ssr: false,
  }),
};
