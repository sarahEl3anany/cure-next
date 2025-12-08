"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Toast } from "primereact/toast";

export const verifyCodeSchema = z.object({
    code: z
        .string()
        .min(1, { message: "Code is required!" })
});

export type VerifyCodeFormValues = z.infer<typeof verifyCodeSchema>;

export function useVerifyCodeForm(toastRef: React.RefObject<Toast | null>) {
    const router = useRouter();

    const form = useForm<VerifyCodeFormValues>({
        resolver: zodResolver(verifyCodeSchema),
        defaultValues: { code: "" },
        mode: "onChange",
    });

    const onSubmit = async (data: VerifyCodeFormValues) => {
        try {
            const res = await fetch("/api/auth/verify-code", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code: data.code }),
            });
            const result = await res.json();
            console.log(result);
            if (result.status == 200) {
                toastRef.current?.show({
                    severity: "success",
                    summary: result.message,
                    detail: `Verified successfully`,
                    life: 3000,
                });
                router.push("/change-password");
            } else {
                toastRef.current?.show({
                    severity: "error",
                    summary: "Error",
                    detail: result.message,
                    life: 4000,
                });
            }
        } catch (err: unknown) {
            let msg = "Something went wrong";
            if (err instanceof Error) msg = err.message;
            toastRef.current?.show({
                severity: "error",
                summary: "Error",
                detail: msg,
                life: 4000,
            });
        }
    };

    return { ...form, onSubmit };
}