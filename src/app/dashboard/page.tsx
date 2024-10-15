import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import {
  ScrollText,
  BookOpen,
  FileText,
  GavelIcon,
  ArrowRight
} from 'lucide-react'

const dashboardItems = [
  {
    title: 'Entendimentos',
    description: 'Explore os entendimentos jurídicos',
    icon: ScrollText,
    href: '/dashboard/rulings'
  },
  {
    title: 'Enunciados',
    description: 'Acesse os enunciados legais',
    icon: BookOpen,
    href: '/dashboard/statements'
  },
  {
    title: 'Documentos',
    description: 'Gerencie documentos importantes',
    icon: FileText,
    href: '/dashboard/documents'
  },
  {
    title: 'Jurisprudência',
    description: 'Consulte a jurisprudência relevante',
    icon: GavelIcon,
    href: '/dashboard/juris-search'
  }
]

export const Dashboard = () => {
  return (
    <div className="container mx-auto p-8 bg-zinc-900 animeLeft">
      <h1 className="text-4xl font-bold text-center text-zinc-100 mt-8 mb-12">
        Bem-vindo ao SIRCE-JUD
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dashboardItems.map((item, index) => (
          <div key={index}>
            <Link href={item.href} passHref>
              <Card className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 transition-all duration-300 transform hover:scale-105 cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center text-zinc-100">
                    <item.icon className="mr-2 h-6 w-6" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-end text-zinc-400 hover:text-zinc-100 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
