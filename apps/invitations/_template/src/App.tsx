import { useEffect } from "react";
import { InvitationSite } from "@virtual-invite/invitation-kit";
import { invitationConfig } from "./invitation.config";

export function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const inPhone = params.get("embed") === "phone" || window.self !== window.top;
    if (inPhone) {
      document.documentElement.classList.add("phone-embed");
    }
    return () => document.documentElement.classList.remove("phone-embed");
  }, []);

  return <InvitationSite config={invitationConfig} />;
}
