"use client";

import Image from "next/image";
import { useGoogleLogin } from "@react-oauth/google";

import GoogleLogo from "@/public/assets/img/sign-in/googleLogo.svg";

import { Button } from "primereact/button";

type GoogleAuthProps = {
  txt: string;
};
function GoogleAuth(props: GoogleAuthProps) {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log("✅ Login success", tokenResponse),
    onError: (err) => console.error("❌ Login failed", err),
  });
  return (
    <Button
      onClick={() => login()}
      className="w-full flex items-center justify-center gap-3 border py-3
       border-neutral-300 hover:bg-neutral-100 rounded-lg transition-colors text-center"
    >
      <Image src={GoogleLogo} alt="Google Logo" className="w-5 h-5" />
      <span className="text-secondary-500 font-montserratMedium text-sm">
        {props.txt}
      </span>
    </Button>
  );
}
export default GoogleAuth;