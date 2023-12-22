import React from 'react';
import { Table } from 'antd';
import './App.css'

interface ComparisonItem {
  key: string;
  aspect: string;
  nextJs: string;
  react: string;
}

const data: ComparisonItem[] = [
  { key: '1', aspect: 'Renderizado del lado del servidor (SSR)',  nextJs: 'Totalmente compatible y configurado por defecto',                      react: 'Posible con configuración adicional' },
  { key: '2', aspect: 'Renderizado del lado del cliente (CSR)',   nextJs: 'Sí (automático para páginas sin SSR)',                                 react: 'Sí' },
  { key: '3', aspect: 'Enrutamiento',                             nextJs: 'Construido en el enrutador con fácil configuración',                   react: 'Depende de soluciones externas (ej. react-router)' },
  { key: '4', aspect: 'Configuración',                            nextJs: 'Configuración mínima requerida para empezar',                          react: 'Más configuración necesaria, proporciona más flexibilidad' },
  { key: '5', aspect: 'Manejo de datos',                          nextJs: 'API integrada para obtener datos en el servidor y el cliente',         react: 'Necesita soluciones externas (ej. fetch, axios)' },
  { key: '6', aspect: 'Ecosistema',                               nextJs: 'Opiniones y decisiones preestablecidas para una mayor productividad',  react: 'Libertad para elegir herramientas y bibliotecas según necesidad' },
  { key: '7', aspect: 'Tamaño de la comunidad',                   nextJs: 'Comunidad sólida con soporte de Vercel y la comunidad de React',       react: 'La comunidad más grande en el ecosistema de JavaScript' },
  { key: '8', aspect: 'Tipo de proyecto',                         nextJs: 'Ideal para aplicaciones web y sitios estáticos o dinámicos',           react: 'Flexible para proyectos de cualquier tamaño y complejidad' },
];

const columns = [
  { title: 'Aspecto',   dataIndex: 'aspect',  key: 'aspect' },
  { title: 'Next.js',   dataIndex: 'nextJs',  key: 'nextJs' },
  { title: 'React',     dataIndex: 'react',   key: 'react' },
];

const ComparisonTable: React.FC = () => {
  return (
    <>
      <h1 style={{textAlign:'center', marginTop:0}}>Cuadro Comparativo: Next.js vs React</h1>
      <div>
      <Table<ComparisonItem> dataSource={data} columns={columns} bordered pagination={false}/>
      </div>
      <br/>
      <div className='contaier' style={{display:'flex', justifyContent:'center', padding:5, gap:25, backgroundColor:'#305567', borderRadius:10}}>
      <div>
        <h3>Cuándo usar Next.js:</h3>
        <p style={{display:'flex', textAlign:'justify'}}>
          - Necesitas renderizado del lado del servidor (SSR) para mejorar el rendimiento y SEO.
          <br />
          - Prefieres un enrutador incorporado y fácil configuración.
          <br />
          - Estás construyendo una aplicación web con necesidades específicas de renderizado.
        </p>
      </div>
      <hr />
      <div>
        <h3>Cuándo usar React:</h3>
        <p style={{ display:'flex',textAlign:'justify'}}>
          - Quieres la máxima flexibilidad y libertad para elegir tus herramientas.
          <br />
          - No necesitas renderizado del lado del servidor (puedes usar CSR).
          <br />
          - Estás construyendo una aplicación de cualquier tamaño o complejidad y prefieres configurar <br />tu propio conjunto de herramientas.
        </p>
      </div>
      </div>
      
    </>
  );
};

export default ComparisonTable;
