
'use client'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

const produtos = [
  { lab: "Alpha Pharma", produto: "Testobolin", substancia: "Testosterona Enantato", dosagem: "250mg/ml", quantidade: "10 ampolas de 1ml", preco_brl: 500, preco_eur: 77.25 },
  { lab: "Alpha Pharma", produto: "Mastebolin", substancia: "Masteron", dosagem: "100mg/ml", quantidade: "10 ampolas de 1ml", preco_brl: 600, preco_eur: 92.70 },
  { lab: "Alpha Pharma", produto: "Astralean", substancia: "Clembuterol", dosagem: "40mcg/tableta", quantidade: "50 tabletas", preco_brl: 250, preco_eur: 38.62 },
]

export default function CatalogoInterativo() {
  const [busca, setBusca] = useState("")

  const filtrados = produtos.filter(p => {
    const termo = busca.toLowerCase()
    return (
      p.lab.toLowerCase().includes(termo) ||
      p.produto.toLowerCase().includes(termo) ||
      p.substancia.toLowerCase().includes(termo)
    )
  })

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Catálogo Interativo de Produtos</h1>
      <Input placeholder="Buscar por produto, substância ou laboratório..." value={busca} onChange={e => setBusca(e.target.value)} className="mb-6" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtrados.map((p, i) => (
          <Card key={i}>
            <CardContent className="p-4 space-y-1">
              <h2 className="font-semibold text-lg">{p.produto}</h2>
              <p className="text-sm text-muted-foreground">{p.substancia}</p>
              <p className="text-sm">{p.dosagem} - {p.quantidade}</p>
              <p className="text-sm font-medium">Preço: R${p.preco_brl} / €{p.preco_eur}</p>
              <p className="text-xs text-green-600">{p.preco_eur <= 30 ? "¡Mejor precio!" : p.substancia === "Clembuterol" ? "Definición avanzada" : p.dosagem.includes("250mg/ml") ? "Potencia clásica" : ""}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
