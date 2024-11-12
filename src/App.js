import './App.css';
import { createAppKit, useAppKit, useAppKitAccount, useDisconnect } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet } from '@reown/appkit/networks'

function App() {

  const projectId = 'bbde116a7a060ad7e912795f23152071'

  const networks = [mainnet]

  const metadata = {
    name: 'Dapp resonator',
    description: 'Dapp resonator',
    url: 'https://dapp.rsntr.io/',
    icons: ['https://cdn.prod.website-files.com/6718fd0cca76b8cb98982ac7/671a2770a1409fcc73ac97a3_logo-square.svg']
  }

  createAppKit({
    adapters: [new EthersAdapter()],
    networks,
    defaultNetwork: mainnet,
    enableWalletConnect: false,
    metadata,
    projectId,
    features: {
      analytics: true,
      email: false,
      socials: [],
      emailShowWallets: false,
    },
    allWallets: 'HIDE',
    featuredWalletIds: [
      'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
      '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
      '18388be9ac2d02726dbac9777c96efaac06d744b2f6d580fccdd4127a6d01fd1'
    ]
  })

  const { open } = useAppKit()
  const { address } = useAppKitAccount()
  const { disconnect } = useDisconnect()
  /*const { signMessage } = useSignMessage()

  const getSignature = () => {
    const res = signMessage({ message: 'hello world' })
    console.log(res);
  }*/

  return (
    <div className="App">
          <button onClick={open}>Connect</button>
          <p>Address: {address}</p>
          <button onClick={disconnect}>Disconnect</button>
    </div>
  );
}

export default App;
