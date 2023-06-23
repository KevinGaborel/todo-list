import Form from "./components/Form";
import Column from "./components/Column";

export default function Home() {
  const mockData = [
    {title: 'Première carte', describe: 'Première description du futur', tags: ['Web', 'Bug'], date: '19/06/2023', owner: 'Ben'},
    {title: 'Deuxième carte', describe: 'Deuxième description du futur', tags: ['Design'], date: '05/06/2023', owner: 'Johanna'},
    {title: 'Troisième carte', describe: 'Troisième description du futur', tags: ['Web', 'POC'], date: '20/06/2023', owner: 'Kévin'},
    {title: 'Quatrième carte', describe: 'Quatrième description du futur', tags: ['UX'], date: '10/06/2023', owner: 'Ben'},
    {title: 'Cinquième carte', describe: 'Cinquième description du futur', tags: ['Web', 'Tests'], date: '20/06/2023', owner: 'Louis'},
    {title: 'Sixième carte', describe: 'Sixième description du futur', tags: ['DevOps'], date: '02/06/2023', owner: 'Kévin'},
  ]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-3 py-10">
      <Column title={'To do'} cardData={mockData} />
    </main>
  )
}
