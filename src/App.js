import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { WagmiProvider } from "wagmi";
import wagmiConfig from "./config/wagmi";

import WalletConnection from "./components/wallet/WalletConnection";
import SignMessage from "./components/wallet/SignMessage";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient} contextSharing={true}>
        <WalletConnection />
        <SignMessage />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
