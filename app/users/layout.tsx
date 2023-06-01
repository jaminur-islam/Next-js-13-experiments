import React from "react";

const UserNav = ({ children }: { children: React.ReactNode }) => {
    return <div>
        <h1 className="bg-red-500">UserNav </h1>
        {children}
        <h1 className="bg-red-500">UserNav </h1>

    </div>;
};

export default UserNav;
