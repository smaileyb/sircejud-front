import { CollapsibleSideMenu } from '@/components/collapsible-side-menu'
import { ReactNode } from 'react'

export default async function DashboardLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <>
      <section className="flex h-screen transition-all duration-700">
        <CollapsibleSideMenu />
        <div className="w-full">{children}</div>
      </section>
    </>
  )
}
