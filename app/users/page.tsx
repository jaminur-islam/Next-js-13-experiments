"use client"

import Mypage from "@/components/Mypage";
import React, { Suspense } from "react";

const page = () => {
    return <div>
        <Suspense fallback={<div>loading.........</div>}>
            {/* @ts-expect-error Server Component */}
            <Mypage />
        </Suspense>
    </div>

        ;
};

export default page;
