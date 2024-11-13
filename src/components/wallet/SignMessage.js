import { useSignMessage } from "wagmi";

import { useAppKitAccount } from "@reown/appkit/react";

export default function SignMessage() {
  const { signMessageAsync } = useSignMessage();
  const { address } = useAppKitAccount();

  const handleSignMessage = async () => {
    if (!address) {
      console.error("Please connect wallet first");
      return;
    }

    const hexSignature = await signMessageAsync({
      message: "hello world",
      account: address,
    });

    console.log(hexSignature);
  };

  return <button onClick={handleSignMessage}>Sign message</button>;
}
