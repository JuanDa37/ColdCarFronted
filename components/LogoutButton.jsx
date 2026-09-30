"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");

        router.replace("/login");
    };

    return (
        <button
            type="button"
            onClick={logout}
        >
            <i className="bxr bxs-arrow-out-up-left-square text-red-500 hover:text-red-800 font-bold text-2xl"></i>
        </button>
    );
}