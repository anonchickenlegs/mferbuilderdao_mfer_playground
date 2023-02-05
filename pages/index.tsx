import { useIsMounted } from 'hooks/useIsMounted'

import Header from '@/components/Layout/Header'

export default function AnalyticsPage({}) {
  const isMounted = useIsMounted()

  if (!isMounted) return <></>

  // TODO: wrap this page in the Layout component, modify so Hero displays 100% across the screen

  return (
    <div className="bg-skin-backdrop text-skin-base min-h-screen flex flex-col items-center">
      <div className="bg-skin-fill w-full flex items-center justify-around">
        <div className="max-w-[1400px]">
          <Header />
        </div>
      </div>
      <div className="max-w-[1400px] w-full space-y-12">
        <div>index</div>
      </div>
    </div>
  )
}
